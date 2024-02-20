<script setup lang="ts">
  const { data: page } = await useAsyncData('cabang', () => queryContent('/cabang').findOne())
</script>

<template>
  <el-main>
    <h1>{{ page?.title }}</h1>
    <div>{{ page?.description }}</div>
    
    <ul class="grid grid-cols-3 grid-flow-col gap-4 mt-6">
      <li v-for="branch in page?.branches">
        <div>{{ branch.title }}</div>
        <div>{{ branch.address }}</div>
        <div class="mt-6">
          <a 
            v-for="cta in branch.cta"
            :href="cta.url" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <el-button 
              size="large"
              :type="cta.title === 'Whatsapp' ? 'primary' : 'default'"
              :class="{
                'ml-3': cta.title === 'Whatsapp'
              }"
            >
              {{ cta.title }}
            </el-button>
          </a>
        </div>
      </li>
    </ul>
  </el-main>
</template>
