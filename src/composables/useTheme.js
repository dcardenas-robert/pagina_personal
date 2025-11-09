import { ref, onMounted } from 'vue'

// Estado compartido globalmente
const isDark = ref(false)
let initialized = false

const updateTheme = () => {
  if (typeof document === 'undefined') return
  
  const html = document.documentElement
  const body = document.body
  
  if (isDark.value) {
    html.classList.add('dark')
    if (body) body.classList.add('dark')
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', 'dark')
    }
  } else {
    html.classList.remove('dark')
    if (body) body.classList.remove('dark')
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', 'light')
    }
  }
}

const initTheme = () => {
  if (initialized || typeof window === 'undefined') return
  
  try {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      isDark.value = prefersDark
    }
    
    updateTheme()
    initialized = true
  } catch (error) {
    console.error('Error initializing theme:', error)
  }
}

export function useTheme() {
  const toggleTheme = () => {
    if (typeof document !== 'undefined') {
      const html = document.documentElement
      const nextIsDark = !html.classList.contains('dark')
      isDark.value = nextIsDark
    } else {
      isDark.value = !isDark.value
    }
    updateTheme()
  }

  onMounted(() => {
    if (!initialized) {
      initTheme()
    }
  })

  // Inicializar inmediatamente si estamos en el cliente
  if (typeof window !== 'undefined' && !initialized) {
    // Usar nextTick para asegurar que el DOM esté listo
    setTimeout(() => {
      initTheme()
    }, 0)
  }

  return {
    isDark,
    toggleTheme
  }
}

