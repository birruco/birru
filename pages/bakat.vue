<script setup lang="ts">
  const { data: page } = await useAsyncData('bakat', () => queryContent('/bakat').findOne())

  defineOgImageComponent('NuxtSeo', {
    title: 'Bakat',
    description: 'Kami membantu anak-anak dengan masalah komunikasi dan belajar menguasai bahasa pertama mereka.',
    siteName: 'birru.co',
    theme: '#49A6CB',
  })
</script>

<template>
  <el-main>
    <h1>{{ page?.hero.title }}</h1>
    <div class="mb-6">
      {{ page?.hero.description }}
    </div>

    <h2>{{ page?.stifin.title }}</h2>
    <div class="mb-6">
      {{ page?.stifin.description }}
    </div>
    
    <ul class="grid grid-rows-3 grid-flow-col gap-4">
      <li v-for="talent in page?.talents">
        <NuxtLink :to="talent.url">
          <div>{{ talent.title }}</div>
          <div>{{ talent.description }}</div>
        </NuxtLink>
      </li>
    </ul>
  </el-main>
</template>
