<template>
  <div class="min-h-screen w-full max-w-full overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
    <Navbar />
    <main class="flex-1 w-full max-w-full overflow-x-hidden">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
</script>

