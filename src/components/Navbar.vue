<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="shrink-0">
          <a href="#inicio" class="text-xl font-bold text-blue-600 dark:text-blue-400">
            D.R.C.P.
          </a>
        </div>
        
        <!-- Menú Desktop -->
        <div class="hidden md:flex items-center gap-8">
          <a 
            v-for="item in menuItems" 
            :key="item.id"
            :href="item.href"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Botón menú móvil -->
        <div class="flex items-center gap-3 shrink-0">
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Menú móvil"
          >
            <span class="text-xl">☰</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Menú móvil -->
    <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div class="px-4 pt-3 pb-4 space-y-2">
        <a
          v-for="item in menuItems"
          :key="item.id"
          :href="item.href"
          @click="toggleMobileMenu"
          class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const mobileMenuOpen = ref(false)

const menuItems = [
  { id: 1, name: 'Inicio', href: '#inicio' },
  { id: 2, name: 'Sobre Mí', href: '#sobre-mi' },
  { id: 3, name: 'Experiencia', href: '#experiencia' },
  { id: 4, name: 'Proyectos', href: '#proyectos' },
  { id: 5, name: 'Contacto', href: '#contacto' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

