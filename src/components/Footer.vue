<template>
  <footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 w-full">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">
            David Roberto Cardenas Porras
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">
            Ingeniero Mecatrónico
          </p>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            Especializado en desarrollo web con Laravel, Livewire y Vue.js
          </p>
          <div class="mt-4 space-y-1 text-sm">
            <p class="text-gray-600 dark:text-gray-400">
              🎓 Egresado Facultad de Ingeniería, UNAM (2019)
            </p>
            <p class="text-gray-600 dark:text-gray-400">
              ✉️ <a href="mailto:drcpcardenas@gmail.com" class="hover:underline">drcpcardenas@gmail.com</a>
            </p>
            <p class="text-gray-600 dark:text-gray-400">
              📞 <a href="tel:+525621080754" class="hover:underline">+52 56 2108 0754</a>
            </p>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Enlaces
          </h4>
          <ul class="space-y-2">
            <li>
              <a href="#inicio" class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Inicio
              </a>
            </li>
            <li>
              <a href="#sobre-mi" class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Sobre Mí
              </a>
            </li>
            <li>
              <a href="#proyectos" class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contacto" class="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Redes Sociales
          </h4>
          <div class="flex space-x-4">
            <a 
              href="https://github.com/DRCPCARDENAS" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <span class="text-2xl">📱</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/david-roberto-cardenas-porras" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <span class="text-2xl">💼</span>
            </a>
            <a 
              href="mailto:drcpcardenas@gmail.com" 
              class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <span class="text-2xl">✉️</span>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; {{ currentYear }} Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

