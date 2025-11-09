<template>
  <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 w-full">
    <div class="max-w-5xl mx-auto">
      <div v-if="!project" class="text-center py-24">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Caso de estudio no encontrado</h1>
        <p class="text-gray-600 dark:text-gray-400">Verifica el enlace o regresa a la página principal.</p>
      </div>
      <div v-else>
        <header class="mb-8">
          <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
            {{ project.title }}
          </h1>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2 mt-4">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
            >{{ tech }}</span>
          </div>
        </header>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="md:col-span-2 space-y-8">
            <section v-if="project.caseStudy?.problem">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Problema</h2>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                {{ project.caseStudy.problem }}
              </p>
            </section>

            <section v-if="project.caseStudy?.solution">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Solución</h2>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
                {{ project.caseStudy.solution }}
              </p>
              <div v-if="project.caseStudy?.architecture" class="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-1">Arquitectura</h3>
                <p class="text-sm text-gray-700 dark:text-gray-300">{{ project.caseStudy.architecture }}</p>
              </div>
            </section>

            <section v-if="project.caseStudy?.impact?.length">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Impacto</h2>
              <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li v-for="point in project.caseStudy.impact" :key="point">{{ point }}</li>
              </ul>
            </section>

            <section v-if="project.caseStudy?.challenges?.length">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Retos</h2>
              <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li v-for="point in project.caseStudy.challenges" :key="point">{{ point }}</li>
              </ul>
            </section>
          </div>

          <aside class="space-y-4">
            <div class="p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Enlaces</h3>
              <div class="space-y-2">
                <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="block text-blue-600 dark:text-blue-400 hover:underline">Repositorio</a>
                <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="block text-blue-600 dark:text-blue-400 hover:underline">Demo</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects'

const route = useRoute()
const slug = computed(() => route.params.slug)

function slugify(text) {
  return String(text || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const project = computed(() => {
  const s = slug.value
  if (!s) return null
  return projects.find(p => p.slug === s || slugify(p.title) === s) || null
})
</script>


