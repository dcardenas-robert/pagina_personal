<template>
  <div 
    class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-3 sm:p-6 md:p-8 border-l-4 opacity-0 translate-y-10 transition-all duration-1000 overflow-hidden"
    :class="{ 
      'border-emerald-600 dark:border-emerald-400': experience.isDeveloper,
      'border-blue-600 dark:border-blue-400': !experience.isDeveloper,
      'opacity-100 translate-y-0': isVisible,
      'delay-200': index === 0,
      'delay-400': index === 1,
      'delay-600': index === 2
    }"
  >
    <div class="flex flex-col mb-3 sm:mb-4 gap-2 sm:gap-3">
      <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
        <div class="flex-1 min-w-0 pr-0 sm:pr-2">
          <h3 class="text-base sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 break-words leading-tight">
            {{ experience.title }}
          </h3>
          <p class="text-sm sm:text-lg md:text-xl text-blue-600 dark:text-blue-400 font-semibold mb-1 sm:mb-2 break-words">
            {{ experience.company }}
          </p>
        </div>
        <div class="flex flex-col sm:flex-col gap-1.5 sm:gap-2 shrink-0 sm:items-end">
          <span 
            v-if="experience.isDeveloper"
            class="inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 w-fit self-start sm:self-end"
          >
            Desarrollo Web
          </span>
          <span class="inline-block px-2 sm:px-4 py-1 sm:py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg font-semibold text-[10px] sm:text-sm whitespace-nowrap w-fit self-start sm:self-end">
            {{ experience.startDate }} - {{ experience.endDate }}
          </span>
        </div>
      </div>
      <p class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 break-words leading-relaxed">
        📍 {{ experience.location }}
      </p>
    </div>

    <p class="text-xs sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-6 leading-relaxed break-words">
      {{ experience.description }}
    </p>

    <div class="flex flex-wrap gap-1 sm:gap-2">
      <span
        v-for="tech in experience.technologies"
        :key="tech"
        class="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-[10px] sm:text-sm font-medium break-words"
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

