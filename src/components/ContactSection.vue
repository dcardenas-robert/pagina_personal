<template>
  <section 
    id="contacto" 
    class="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 w-full relative"
    ref="contactSection"
  >
    <div class="max-w-7xl mx-auto">
      <div 
        class="text-center mb-16 opacity-0 translate-y-10 transition-all duration-1000"
        :class="{ 'opacity-100 translate-y-0': isVisible }"
      >
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Contacto
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400">
          ¿Tienes un proyecto en mente? Hablemos
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Info de contacto -->
        <div 
          class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 md:p-12 opacity-0 translate-y-10 transition-all duration-1000 delay-200"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
        >
          <h3 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Contacto directo</h3>
          <div class="space-y-5">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xl">✉️</div>
              <div class="text-gray-700 dark:text-gray-300">
                <a href="mailto:drcpcardenas@gmail.com" class="font-medium hover:underline">drcpcardenas@gmail.com</a>
                <div>
                  <a href="mailto:drcp_cardenas@hotmail.com" class="text-sm hover:underline">drcp_cardenas@hotmail.com</a>
                </div>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xl">📞</div>
              <div class="text-gray-700 dark:text-gray-300">
                <a href="tel:+525621080754" class="font-medium hover:underline">+52 56 2108 0754</a>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xl">📍</div>
              <div class="text-gray-700 dark:text-gray-300">
                <p class="font-medium">Calle Michoacán #103</p>
                <p class="text-sm">Col. Miguel Hidalgo 1era sección, Interior 6</p>
                <p class="text-sm">Ciudad de México, CDMX</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xl">💼</div>
              <div class="text-gray-700 dark:text-gray-300">
                <a href="https://www.linkedin.com/in/david-roberto-cardenas-porras" target="_blank" rel="noopener" class="font-medium hover:underline">LinkedIn</a>
                <p class="text-sm break-all">linkedin.com/in/david-roberto-cardenas-porras</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xl">🐙</div>
              <div class="text-gray-700 dark:text-gray-300">
                <a href="https://github.com/DRCPCARDENAS" target="_blank" rel="noopener" class="font-medium hover:underline">GitHub</a>
                <p class="text-sm break-all">github.com/DRCPCARDENAS</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulario -->
        <div 
          class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 md:p-12 opacity-0 translate-y-10 transition-all duration-1000 delay-300"
          :class="{ 'opacity-100 translate-y-0': isVisible }"
        >
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nombre
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Asunto
              </label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Asunto del mensaje"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                placeholder="Tu mensaje..."
              ></textarea>
            </div>

            <div v-if="message" class="p-4 rounded-lg" :class="messageType === 'success' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'">
              {{ message }}
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="loading">Enviando...</span>
              <span v-else>Enviar Mensaje</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import emailjs from '@emailjs/browser'

const contactSection = ref(null)
const isVisible = ref(false)
const loading = ref(false)
const message = ref('')
const messageType = ref('')

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
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

  if (contactSection.value) {
    observer.observe(contactSection.value)
  }

  // Inicializar EmailJS (necesitarás configurar tus credenciales)
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY')
})

const handleSubmit = async () => {
  loading.value = true
  message.value = ''

  try {
    // Configura estos valores con tus credenciales de EmailJS
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'

    await emailjs.send(serviceId, templateId, {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message
    })

    message.value = '¡Mensaje enviado con éxito! Te responderé pronto.'
    messageType.value = 'success'
    
    // Limpiar formulario
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (error) {
    console.error('Error sending email:', error)
    message.value = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente o contáctame directamente por email.'
    messageType.value = 'error'
  } finally {
    loading.value = false
  }
}
</script>

