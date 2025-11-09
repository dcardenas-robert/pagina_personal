<template>
  <section 
    id="sobre-mi" 
    class="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 w-full relative"
    ref="aboutSection"
  >
    <div class="mx-auto">
      <div 
        class="text-center mb-16 opacity-0 translate-y-10 transition-all duration-1000"
        :class="{ 'opacity-100 translate-y-0': isVisible }"
      >
        <h2 class="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
          Sobre Mí
        </h2>
        
        <!-- Imagen de perfil -->
        <div class="flex justify-center mb-8">
          <div class="relative">
            <div class="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-blue-500/20 dark:ring-blue-400/20 shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="David Roberto Cardenas Porras" 
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
            </div>
            <!-- Decoración -->
            <div class="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
              <span class="text-2xl">👨‍💻</span>
            </div>
          </div>
        </div>

        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Soy <span class="font-semibold text-blue-600 dark:text-blue-400">David Roberto Cardenas Porras</span>, Ingeniero Mecatrónico con pasión por el desarrollo web y la creación de soluciones tecnológicas innovadoras.
        </p>
        <p class="mt-3 text-base text-gray-500 dark:text-gray-400">
          Egresado de la Facultad de Ingeniería de la UNAM (2019).
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div 
          class="opacity-0 translate-y-10 transition-all duration-1000 delay-200"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
        >
          <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Mi Historia
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Como Ingeniero Mecatrónico y persona autodidacta, he combinado la ingeniería con el desarrollo de software. 
            Tengo experiencia en desarrollo web, manejo de bases de datos y servidores, programación, robótica y electrónica. 
            Me especializo en crear aplicaciones web robustas y escalables utilizando el stack Laravel + Livewire + Vue.js.
          </p>
          <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Además, cuento con habilidades blandas para colaborar con equipos multidisciplinarios y he trabajado tanto en el 
            sector privado como en el público.
          </p>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Entre mis logros destacan haber trabajado en el extranjero; la culminación del centro de simulación médica más grande 
            de América Latina; el diseño y programación de un sistema de adquisiciones y compras; y un sistema que envía diariamente 
            resultados de pruebas de laboratorio a los 32 estados de la República Mexicana, entre otros sistemas de misión crítica.
          </p>
        </div>

        <div 
          class="opacity-0 translate-y-10 transition-all duration-1000 delay-400"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
        >
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <h4 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Stack Tecnológico
            </h4>
            <div class="grid grid-cols-2 gap-4">
              <div 
                v-for="skill in skills" 
                :key="skill.name"
                class="flex items-center space-x-3 p-3 bg-white dark:bg-gray-900 rounded-lg hover:shadow-md transition-shadow"
              >
                <span class="text-2xl">{{ skill.icon }}</span>
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">{{ skill.name }}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ skill.level }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { skills } from '@/data/skills'

const aboutSection = ref(null)
const isVisible = ref(false)

const handleImageError = (event) => {
  // Imagen placeholder si no se encuentra la imagen principal
  event.target.src = 'https://ui-avatars.com/api/?name=David+Roberto&size=400&background=3B82F6&color=fff&bold=true'
}

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

  if (aboutSection.value) {
    observer.observe(aboutSection.value)
  }
})
</script>

