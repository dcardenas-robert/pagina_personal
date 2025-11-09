<template>
  <div 
    class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl opacity-0 translate-y-10 transition-all duration-1000"
    :class="{ 
      'opacity-100 translate-y-0': isVisible,
      'delay-200': index === 0,
      'delay-400': index === 1,
      'delay-600': index === 2
    }"
  >
    <div class="h-48 bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
      <span class="text-6xl">🚀</span>
    </div>
    
    <div class="p-6">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">
          {{ project.title }}
        </h3>
        <span 
          v-if="project.featured"
          class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded"
        >
          Destacado
        </span>
      </div>
      
      <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
        >
          {{ tech }}
        </span>
      </div>

      <div class="flex space-x-4">
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span>📂</span>
          <span class="text-sm font-medium">GitHub</span>
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span>🌐</span>
          <span class="text-sm font-medium">Demo</span>
        </a>
        <router-link
          v-if="project.slug"
          :to="{ name: 'CaseStudy', params: { slug: project.slug } }"
          class="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span>📖</span>
          <span class="text-sm font-medium">Caso de estudio</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  isVisible: {
    type: Boolean,
    default: false
  }
})
</script>

