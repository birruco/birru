<script setup lang="ts">
  const { data: page } = await useAsyncData('kasus', () => queryContent('/kasus').findOne())

  defineOgImageComponent('NuxtSeo', {
    title: 'Kasus',
    description: 'Kami membantu orang tua memahami dan mengatasi masalah komunikasi untuk membantu anak mereka menguasai bahasa pertama.',
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

    <ul class="grid grid-rows-6 grid-flow-col gap-4">
      <li v-for="talent in page?.cases">
        <NuxtLink :to="talent.url">
          <div>{{ talent.title }}</div>
          <div>{{ talent.description }}</div>
        </NuxtLink>
      </li>
    </ul>
  </el-main>
</template>
