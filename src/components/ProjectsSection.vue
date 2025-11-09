<template>
  <section 
    id="proyectos" 
    class="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 w-full relative"
    ref="projectsSection"
  >
    <div class="mx-auto">
      <div 
        class="text-center mb-16 opacity-0 translate-y-10 transition-all duration-1000"
        :class="{ 'opacity-100 translate-y-0': isVisible }"
      >
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Proyectos
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          Algunos de mis trabajos destacados
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :index="index"
          :is-visible="isVisible"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard.vue'

const projectsSection = ref(null)
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

  if (projectsSection.value) {
    observer.observe(projectsSection.value)
  }
})
</script>

