<template>
  <div class="w-full max-w-full overflow-x-hidden">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <SpotifyPlayer embedUrl="https://open.spotify.com/intl-es/track/250sY8lvu1PKwvmUhHxLdf?si=f49324e0fb4643cb" />
    <ContactSection />
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import SpotifyPlayer from '@/components/SpotifyPlayer.vue'
</script>

