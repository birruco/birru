<script setup lang="ts">
  import BNavbar from '@/components/organisms/bnavbar.vue'
  import BFooter from '@/components/organisms/bfooter.vue'
</script>

<template>
  <BNavbar />
  <NuxtPage />
  <BFooter />
</template>

<style lang="scss">
@font-face {
  font-family: 'Birru Sans';
  font-display: swap;
  font-weight: 700;
  src: url('/fonts/birruSans-Bold.woff2') format('woff2'),
       url('/fonts/birruSans-Bold.woff') format('woff');
}
</style>
