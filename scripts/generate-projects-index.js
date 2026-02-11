import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsDir = path.join(__dirname, '../public/projects');
const outputFile = path.join(projectsDir, 'index.json');

// Parse YAML frontmatter from markdown
function parseFrontmatter(content) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
    const match = content.match(frontmatterRegex);

    if (!match) return null;

    const frontmatter = {};
    const lines = match[1].split('\n');

    lines.forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex === -1) return;

        const key = line.substring(0, colonIndex).trim();
        const value = line.substring(colonIndex + 1).trim();

        if (!key || !value) return;

        // Handle arrays [...]
        if (value.startsWith('[')) {
            try {
                frontmatter[key] = JSON.parse(value);
            } catch (e) {
                console.warn(`⚠️  Failed to parse array for key "${key}": ${value}`);
            }
        }
        // Handle numbers
        else if (/^\d+$/.test(value)) {
            frontmatter[key] = parseInt(value);
        }
        // Handle strings (remove quotes if present)
        else {
            frontmatter[key] = value.replace(/^["']|["']$/g, '');
        }
    });

    return frontmatter;
}

// Generate index.json from markdown files with frontmatter
async function generateIndex() {
    try {
        const files = fs.readdirSync(projectsDir)
            .filter(file => file.endsWith('.md') && file !== 'README.md');

        const projects = [];
        const errors = [];

        for (const file of files) {
            const filePath = path.join(projectsDir, file);
            const content = fs.readFileSync(filePath, 'utf-8');
            const slug = path.basename(file, '.md');

            // Parse frontmatter
            const frontmatter = parseFrontmatter(content);

            if (!frontmatter) {
                errors.push(`❌ ${slug}: No frontmatter found`);
                continue;
            }

            // Validate required fields
            if (!frontmatter.title) {
                errors.push(`❌ ${slug}: Missing 'title' in frontmatter`);
                continue;
            }

            if (!frontmatter.year) {
                errors.push(`❌ ${slug}: Missing 'year' in frontmatter`);
                continue;
            }

            // Build project object
            const project = {
                slug,
                title: frontmatter.title,
                description: frontmatter.description || '',
                year: frontmatter.year, // Incluir year en el output
                tags: frontmatter.tags || [],
                image: frontmatter.image || `img/${slug.toLowerCase()}.png`,
                url: frontmatter.url || ''
            };

            projects.push(project);
            console.log(`✅ ${slug}: Loaded (${frontmatter.year})`);
        }

        // Show errors if any
        if (errors.length > 0) {
            console.log('\n⚠️  Errors found:');
            errors.forEach(err => console.log(err));
            console.log('\n💡 Add YAML frontmatter to these files. See README.md for examples.\n');
        }

        // Sort by year (newest first)
        projects.sort((a, b) => b.year - a.year);

        // Write to file
        fs.writeFileSync(outputFile, JSON.stringify(projects, null, 4));

        console.log(`\n✅ Generated index.json with ${projects.length} projects`);
        console.log(`📁 Output: ${outputFile}`);

        if (projects.length > 0) {
            const years = projects.map(p => p.tags.find(t => /^\d{4}$/.test(t)) || 'N/A');
            console.log(`📅 Year range: ${Math.max(...years.filter(y => y !== 'N/A'))} - ${Math.min(...years.filter(y => y !== 'N/A'))}`);
        }

    } catch (error) {
        console.error('❌ Error generating index:', error);
        process.exit(1);
    }
}

generateIndex();
