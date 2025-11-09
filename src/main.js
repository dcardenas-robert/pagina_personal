import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// Inicializar tema antes de montar la app
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const html = document.documentElement
  
  if (savedTheme) {
    if (savedTheme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  } else if (prefersDark) {
    html.classList.add('dark')
  }
}

createApp(App)
  .use(router)
  .mount('#app')
