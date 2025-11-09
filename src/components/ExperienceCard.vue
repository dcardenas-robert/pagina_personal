<template>
  <div 
    class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 border-l-4 opacity-0 translate-y-10 transition-all duration-1000"
    :class="{ 
      'border-emerald-600 dark:border-emerald-400': experience.isDeveloper,
      'border-blue-600 dark:border-blue-400': !experience.isDeveloper,
      'opacity-100 translate-y-0': isVisible,
      'delay-200': index === 0,
      'delay-400': index === 1,
      'delay-600': index === 2
    }"
  >
    <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
      <div>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {{ experience.title }}
        </h3>
        <p class="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
          {{ experience.company }}
        </p>
        <p class="text-gray-600 dark:text-gray-400">
          📍 {{ experience.location }}
        </p>
      </div>
      <div class="mt-4 md:mt-0 md:text-right space-y-2">
        <span 
          v-if="experience.isDeveloper"
          class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
        >
          Desarrollo Web
        </span>
        <span class="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg font-semibold">
          {{ experience.startDate }} - {{ experience.endDate }}
        </span>
      </div>
    </div>

    <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
      {{ experience.description }}
    </p>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="tech in experience.technologies"
        :key="tech"
        class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  experience: {
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

