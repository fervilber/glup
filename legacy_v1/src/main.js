import './style.css';
import { Navbar } from './components/Navbar.js';
import { Home } from './components/Home.js';
import { Projects } from './components/Projects.js';
import { ProjectDetail } from './components/ProjectDetail.js';
import { MarkdownPage } from './components/MarkdownPage.js';
import { NotFound } from './components/NotFound.js';
import { initScrollAnimations } from './utils/animations.js';

const routes = {
    '/': Home,
    '/projects': Projects,
    '/about': () => MarkdownPage('about'),
    '/contact': () => MarkdownPage('contact'),
};

async function router() {
    const app = document.getElementById('app');
    const path = window.location.hash.slice(1) || '/';

    // Initialize Layout on first load
    if (!document.getElementById('main-content')) {
        app.innerHTML = `
      ${Navbar()}
      <div class="flex flex-col min-h-screen">
          <main id="main-content" class="flex-grow"></main>
          <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800 mt-auto transition-colors duration-300">
          <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2026 <a href="#/" class="hover:underline">Glup company</a>. Todos los derechos reservados.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li><a href="#/about" class="hover:underline me-4 md:me-6">Sobre mí</a></li>
              <li><a href="#/contact" class="hover:underline">Contacto</a></li>
          </ul>
          </div>
      </footer>
    `;
        initThemeToggle();
        initMobileMenu();
    }

    const mainContent = document.getElementById('main-content');
    const cleanPath = path.split('?')[0];
    let componentFn = routes[cleanPath];
    let content = '';

    // Routing Logic
    if (path.startsWith('/project/')) {
        const slug = path.split('/project/')[1];
        content = await ProjectDetail(slug);
    } else if (componentFn) {
        const result = componentFn();
        content = result instanceof Promise ? await result : result;
    } else {
        // 404 Fallback
        content = NotFound();
    }

    // Render & Animate
    mainContent.style.opacity = '0';
    setTimeout(() => {
        mainContent.innerHTML = content;
        mainContent.style.opacity = '1';
        window.scrollTo(0, 0);
        initScrollAnimations();
    }, 150);

    updateActiveNavLink(path);
    updatePageMeta(path);
}

function updatePageMeta(path) {
    const titles = {
        '/': 'Inicio | Mi Portafolio',
        '/projects': 'Proyectos | Mi Portafolio',
        '/about': 'Sobre Mí | Mi Portafolio',
        '/contact': 'Contacto | Mi Portafolio'
    };

    if (path.startsWith('/project/')) {
        document.title = 'Proyecto | Mi Portafolio';
    } else if (titles[path]) {
        document.title = titles[path];
    } else {
        document.title = '404 No Encontrado | Mi Portafolio';
    }
}

function updateActiveNavLink(path) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        const href = link.getAttribute('href');
        const isActive = href === `#${path.slice(1)}` || (path === '/' && href === '#');

        if (isActive) {
            link.classList.add('text-brand-700', 'md:text-brand-700', 'dark:text-brand-500');
            link.classList.remove('text-gray-900', 'md:text-gray-900', 'dark:text-white');
        } else {
            link.classList.remove('text-brand-700', 'md:text-brand-700', 'dark:text-brand-500');
            link.classList.add('text-gray-900', 'md:text-gray-900', 'dark:text-white');
        }
    });
}

function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    // Safe check if elements exist
    if (!themeToggleBtn || !darkIcon || !lightIcon) return;

    const isDark = localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
        document.documentElement.classList.add('dark');
        lightIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        darkIcon.classList.remove('hidden');
    }

    // Remove existing listeners to avoid duplicates if re-run (though we guard with check)
    // Actually, simple cloneNode or flag is better, but safe enough here given logic structure.
    themeToggleBtn.addEventListener('click', function () {
        darkIcon.classList.toggle('hidden');
        lightIcon.classList.toggle('hidden');

        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    });
}

function initMobileMenu() {
    const trigger = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
    const target = document.getElementById('navbar-sticky');

    if (trigger && target) {
        // Clone to remove old listeners if any
        const newTrigger = trigger.cloneNode(true);
        trigger.parentNode.replaceChild(newTrigger, trigger);

        newTrigger.addEventListener('click', () => {
            target.classList.toggle('hidden');
            const expanded = newTrigger.getAttribute('aria-expanded') === 'true';
            newTrigger.setAttribute('aria-expanded', !expanded);
        });
    }
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
