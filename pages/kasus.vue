<script setup lang="ts">
  const { data: page } = await useAsyncData('kasus', () => queryContent('/kasus').findOne())
</script>

<template>
  <el-main>
    <h1>{{ page?.title }}</h1>
    <div class="mb-6">
      {{ page?.description }}
    </div>
    <ul class="grid grid-rows-5 grid-flow-col gap-4">
      <li v-for="talent in page?.talents">
        <NuxtLink :to="talent.url">
          <div>{{ talent.title }}</div>
          <div>{{ talent.description }}</div>
        </NuxtLink>
      </li>
    </ul>
  </el-main>
</template>
