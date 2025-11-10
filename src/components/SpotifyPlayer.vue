<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 w-full">
    <div class="max-w-4xl mx-auto">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
          Música
        </h3>
        <span class="text-sm text-gray-500 dark:text-gray-400">
          Intentando reproducción automática
        </span>
      </div>
      <p class="mb-4 text-gray-600 dark:text-gray-400">
        Les recomiendo la canción de jazz que más me gusta:
      </p>
      <div class="rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-200 dark:ring-gray-800 bg-black">
        <iframe
          ref="iframeRef"
          :src="computedSrc"
          width="100%"
          height="352"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">
        Nota: Los navegadores pueden bloquear la reproducción automática. Interactúa con la página para iniciar el audio.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps({
  embedUrl: {
    type: String,
    default: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4WgZiuR77Ef'
  },
  theme: {
    type: String,
    default: '0' // 0 dark, 1 light (según soporte del embed)
  }
})

const iframeRef = ref(null)
const userInteracted = ref(false)

const computedSrc = computed(() => {
  // Normalizar URL para evitar 404 cuando viene con prefijo de idioma (p. ej. /intl-es/track/...)
  const input = new URL(props.embedUrl)

  // Si ya es un embed, solo ajustamos params
  if (input.pathname.startsWith('/embed/')) {
    input.searchParams.set('theme', props.theme)
    input.searchParams.set('autoplay', '1')
    input.searchParams.set('utm_source', 'generator')
    return input.toString()
  }

  const segments = input.pathname.split('/').filter(Boolean)
  // Quitar prefijo de idioma tipo intl-es
  if (segments[0] && segments[0].startsWith('intl-')) {
    segments.shift()
  }
  // Esperado: [type, id]
  const type = segments[0] || 'track'
  const id = segments[1] || ''
  const normalized = new URL('https://open.spotify.com')
  normalized.pathname = `/embed/${type}/${id}`
  normalized.searchParams.set('theme', props.theme)
  normalized.searchParams.set('autoplay', '1')
  normalized.searchParams.set('utm_source', 'generator')
  return normalized.toString()
})

function tryAutoplayAfterInteraction() {
  if (userInteracted.value) return
  userInteracted.value = true
  // Reasignar src para reintentar autoplay tras la primera interacción del usuario
  if (iframeRef.value) {
    const current = iframeRef.value.src
    iframeRef.value.src = current
  }
}

onMounted(() => {
  // Cualquier interacción del usuario permitirá reintentar autoplay
  window.addEventListener('click', tryAutoplayAfterInteraction, { once: true, capture: true })
  window.addEventListener('keydown', tryAutoplayAfterInteraction, { once: true, capture: true })
  window.addEventListener('touchstart', tryAutoplayAfterInteraction, { once: true, capture: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('click', tryAutoplayAfterInteraction, { capture: true })
  window.removeEventListener('keydown', tryAutoplayAfterInteraction, { capture: true })
  window.removeEventListener('touchstart', tryAutoplayAfterInteraction, { capture: true })
})
</script>


