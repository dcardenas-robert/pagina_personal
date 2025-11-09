<template>
  <section 
    id="experiencia" 
    class="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 w-full relative"
    ref="experienceSection"
  >
    <div class="mx-auto">
      <div 
        class="text-center mb-16 opacity-0 translate-y-10 transition-all duration-1000"
        :class="{ 'opacity-100 translate-y-0': isVisible }"
      >
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Experiencia
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          Mi trayectoria profesional en desarrollo web
        </p>
      </div>

      <div class="space-y-8">
        <ExperienceCard
          v-for="(exp, index) in sortedExperience"
          :key="exp.id"
          :experience="exp"
          :index="index"
          :is-visible="isVisible"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { experience } from '@/data/experience'
import ExperienceCard from './ExperienceCard.vue'

const experienceSection = ref(null)
const isVisible = ref(false)

const monthIndex = {
  ene: 0, feb: 1, mar: 2, abr: 3, may: 4, jun: 5,
  jul: 6, ago: 7, sep: 8, oct: 9, nov: 10, dic: 11
}

function parseMonthYear(value) {
  if (!value) return new Date(0, 0, 1)
  if (/presente/i.test(value)) return new Date(9999, 11, 31)
  const parts = String(value).trim().split(/\s+/)
  const monthKey = (parts[0] || '').slice(0, 3).toLowerCase()
  const year = parseInt(parts[1], 10) || 0
  const month = monthIndex[monthKey] ?? 0
  return new Date(year, month, 1)
}

const sortedExperience = computed(() => {
  return [...experience].sort((a, b) => {
    const endB = parseMonthYear(b.endDate)
    const endA = parseMonthYear(a.endDate)
    if (endB.getTime() !== endA.getTime()) {
      return endB - endA
    }
    const startB = parseMonthYear(b.startDate)
    const startA = parseMonthYear(a.startDate)
    return startB - startA
  })
})

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

  if (experienceSection.value) {
    observer.observe(experienceSection.value)
  }
})
</script>

