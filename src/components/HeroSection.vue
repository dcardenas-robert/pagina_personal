<template>
  <section id="inicio"
    class="min-h-screen flex items-center justify-center pt-40 pb-20 px-4 sm:px-6 lg:px-8 w-full relative bg-linear-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800"
    style="padding-top: 160px;" ref="heroSection">
    <div class="w-full">
      <div class="opacity-0 translate-y-10 transition-all duration-1000"
        :class="{ 'opacity-100 translate-y-0': isVisible }">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800 dark:text-white text-center">
          <span class="text-gray-800 dark:text-gray-100">Hola, soy</span><br>
          <span class="text-blue-600 dark:text-blue-400">David Roberto Cardenas Porras</span>
        </h1>
        <p class="text-xl md:text-2xl mb-4 text-center">
          <span class="font-semibold text-blue-700 dark:text-blue-400">Ingeniero Mecatrónico</span>
        </p>
        <p class="text-xl md:text-2xl mb-12 text-gray-800 dark:text-gray-200 text-center">
          Desarrollador Full Stack especializado en
          <span class="font-semibold text-blue-700 dark:text-blue-400">Laravel + Livewire + Vue</span>
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <a href="#contacto"
            class="px-12 py-4 text-lg bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 min-w-[200px] text-center">
            Contáctame
          </a>
          <button @click="downloadCV"
            class="px-12 py-4 text-lg bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-xl font-bold hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 min-w-[200px]">
            Descargar CV
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const heroSection = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.1 }
  )

  if (heroSection.value) {
    observer.observe(heroSection.value)
  }
})


const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/cv.pdf'
  link.download = 'CV_Ingeniero_Mecatronico.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
