export function About() {
  return `
    <section class="bg-white dark:bg-gray-900 mt-20">
      <div class="py-8 px-4 mx-auto max-w-screen-md lg:py-16">
          <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">Sobre Mí</h2>
          <p class="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400 text-justify">
              ¡Hola! Soy un desarrollador Apasionado por la tecnología y el diseño. Mi viaje en el mundo del desarrollo web comenzó por la curiosidad de entender cómo funcionaban las cosas en internet, y desde entonces no he parado de aprender.
              <br><br>
              Me especializo en crear aplicaciones web modernas, rápidas y accesibles. Utilizo un enfoque centrado en el usuario, asegurando que cada proyecto no solo se vea bien, sino que sea intuitivo y fácil de usar.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10">
             <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 class="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">Habilidades Técnicas</h3>
                <ul class="space-y-2 text-gray-500 dark:text-gray-400">
                    <li class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>JavaScript (ES6+)</li>
                    <li class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>React & Vite</li>
                    <li class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Tailwind CSS</li>
                    <li class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Node.js & Express</li>
                    <li class="flex items-center"><span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Git & GitHub Actions</li>
                </ul>
             </div>
             <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 class="text-xl font-bold mb-4 text-green-600 dark:text-green-400">Soft Skills</h3>
                <ul class="space-y-2 text-gray-500 dark:text-gray-400">
                    <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Resolución de problemas</li>
                    <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Trabajo en equipo</li>
                    <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Aprendizaje autodidacta</li>
                    <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Comunicación efectiva</li>
                </ul>
             </div>
          </div>
      </div>
    </section>
  `;
}

export function Contact() {
  return `
    <section class="bg-white dark:bg-gray-900 mt-20">
      <div class="py-8 px-4 mx-auto max-w-screen-md lg:py-16">
          <h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">Contáctame</h2>
          <p class="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              ¿Tienes un proyecto en mente, una oportunidad laboral o simplemente quieres saludar? ¡Me encantaría hablar contigo!
          </p>
          
          <div class="max-w-md mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md mb-10">
              <form action="#" class="space-y-6">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tu Email</label>
                      <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="nombre@ejemplo.com" required>
                  </div>
                  <div>
                      <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Asunto</label>
                      <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Déjame saber en qué puedo ayudarte" required>
                  </div>
                  <div>
                      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tu Mensaje</label>
                      <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Escribe tu mensaje aquí..."></textarea>
                  </div>
                  <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar Mensaje</button>
              </form>
          </div>

          <div class="flex justify-center space-x-6">
              <a href="mailto:email@example.com" class="flex items-center text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-400 transition-colors">
                 <span class="mr-2">📧</span> email@example.com
              </a>
              <a href="#" class="flex items-center text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-400 transition-colors">
                 <span class="mr-2">💼</span> LinkedIn
              </a>
              <a href="#" class="flex items-center text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-400 transition-colors">
                 <span class="mr-2">🐙</span> GitHub
              </a>
          </div>
      </div>
    </section>
  `;
}
