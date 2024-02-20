<script setup lang="ts">
  const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

  useSchemaOrg([
    defineOrganization({
      name: 'Birru - Terapi Wicara dan Tumbuh Kembang Anak',
      url: 'https://birru.co',
      logo: '/images/logo.webp',
      sameAs: ['https://www.linkedin.com/company/birruco']
    })
  ])
</script>

<template>
  <el-main>
    <section class="text-center">
      <h1 class=" text-7xl font-birru">
        {{ page?.hero.title }}
      </h1>
      <h2 class="text-lg font-nunito my-6">
        {{ page?.hero.description }}
      </h2>
      <div>
        <el-button 
          size="large"
          class="mr-3"
        >
          {{ page?.hero.cta.partnership }}
        </el-button>
        <NuxtLink to="/cabang/">
          <el-button 
            size="large" 
            type="primary"
          >
            {{ page?.hero.cta.reservation }}
          </el-button>
        </NuxtLink>
      </div>
    </section>
    <el-divider />
    <section class="text-center">
      <div class=" text-base mb-6 font-nunito">
        {{ page?.service.headline }}
      </div>
      <h2 class=" text-5xl font-birru">
        {{ page?.service.title }}
      </h2>
      <h3 class="text-lg font-nunito my-6">
        {{ page?.service.description }}
      </h3>

      <div class="grid grid-cols-2 gap-4 mb-6">
        <div v-for="item in page?.service.items">
          <div>
            {{ item.title }}
          </div>
          <div>
            {{ item.description }}
          </div>
        </div>
      </div>

      <NuxtLink to="/kasus/">
        <el-button size="large" type="primary">
          {{ page?.service.cta }}
        </el-button>
      </NuxtLink>
    </section>
    <el-divider />
    <section class="text-center">
      <div class=" text-base  mb-6 font-nunito">
        {{ page?.program.headline }}
      </div>
      <h2 class=" text-5xl font-birru">
        {{ page?.program.title }}
      </h2>
      <h3 class="text-lg font-nunito my-6">
        {{ page?.program.description }}
      </h3>

      <div 
        v-for="item in page?.program.items"
        class="mb-6"
      >
        <div>
          {{ item.title }}
        </div>
        <ol>
          <li v-for="step in item.steps">
            {{ step.title }}
          </li>
        </ol>
      </div>

      <div class="columns-3">
        <div v-for="photo in page?.program.gallery">
          <NuxtPicture 
            format="webp" 
            :src="photo.img"
            :imgAttrs="{
              alt: page?.program.title
            }"
          />
        </div>
      </div>
    </section>
    <el-divider />
    <section class="text-center">
      <div class=" text-base  mb-6 font-nunito">
        {{ page?.talent.headline }}
      </div>
      <h2 class=" text-5xl font-birru">
        {{ page?.talent.title }}
      </h2>
      <h3 class="text-lg font-nunito my-6">
        {{ page?.talent.description }}
      </h3>

      <NuxtLink to="/bakat/">
        <el-button size="large" type="primary">
          {{ page?.talent.cta }}
        </el-button>
      </NuxtLink>
    </section>
    <el-divider />
    <section class="text-center">
      <div class=" text-base  mb-6 font-nunito">
        {{ page?.growth.headline }}
      </div>
      <h2 class=" text-5xl font-birru">
        {{ page?.growth.title }}
      </h2>
      <h3 class="text-lg font-nunito my-6">
        {{ page?.growth.description }}
      </h3>
      
      <NuxtPicture 
        format="webp" 
        :src="page?.growth.img"
        :imgAttrs="{ 
          class: 'mx-auto',
          alt: page?.growth.title
        }"
      />

      <div class="grid grid-cols-3 mt-6">
        <div>
          <div class="text-7xl">
            {{ page?.growth.data.clinic.number }}
          </div>
          {{ page?.growth.data.clinic.description }}
        </div>
        <div>
          <div class="text-7xl">
            {{ page?.growth.data.therapist.number }}
          </div>
          {{ page?.growth.data.therapist.description }}
        </div>
        <div>
          <div class="text-7xl">
            {{ page?.growth.data.patient.number }}
          </div>
          {{ page?.growth.data.patient.description }}
        </div>
      </div>
    </section>
    <el-divider />
    <section class="text-center">
      <div class=" text-base  mb-6 font-nunito">
        {{ page?.testimonial.headline }}
      </div>
      <h2 class=" text-5xl font-birru">
        {{ page?.testimonial.title }}
      </h2>
      <h3 class="text-lg font-nunito my-6">
        {{ page?.testimonial.description }}
      </h3>
      <iframe 
          :src="page?.testimonial.youtube"
          :title="page?.testimonial.title"
          class="mx-auto"
          width="800" 
          height="400"
      >
      </iframe>
      <div class="grid grid-cols-3 gap-4 mt-6">
        <div v-for="item in page?.testimonial.items">
          <div>
            {{ item.comment }}
          </div>
          <div>
            {{ item.author }}
          </div>
        </div>
      </div>
    </section>
    <el-divider />
    <section class="text-center">
      <div class=" text-base  mb-6 font-nunito">
        {{ page?.stimulus.headline }}
      </div>
      <h2 class=" text-5xl font-birru">
        {{ page?.stimulus.title }}
      </h2>
      <h3 class="text-lg font-nunito my-6">
        {{ page?.stimulus.description }}
      </h3>

      <NuxtLink to="/cabang/">
        <el-button 
          size="large" 
          type="primary"
        >
          {{ page?.stimulus.cta }}
        </el-button>
      </NuxtLink>
    </section>
    <el-divider />
    <section class="text-center">
      <div class=" text-base  mb-6 font-nunito">
        {{ page?.faq.headline }}
      </div>
      <h2 class=" text-5xl font-birru">
        {{ page?.faq.title }}
      </h2>
      <h3 class="text-lg font-nunito my-6">
        {{ page?.faq.description }}
      </h3>

      <div class="grid grid-row-6 gap-4 mt-6">
        <div v-for="item in page?.faq.items">
          <div>
            {{ item.question }}
          </div>
          <div>
            {{ item.answer }}
          </div>
        </div>
      </div>
    </section>
    <el-divider />
    <section class="text-center">
      <div class=" text-base  mb-6 font-nunito">
        {{ page?.partnership.headline }}
      </div>
      <h2 class=" text-5xl font-birru">
        {{ page?.partnership.title }}
      </h2>
      <h3 class="text-lg font-nunito my-6">
        {{ page?.partnership.description }}
      </h3>

      <div>
        <el-button size="large">
          {{ page?.partnership.cta.download }}
        </el-button>
        <el-button size="large" type="primary">
          {{ page?.partnership.cta.join }}
        </el-button>
      </div>
    </section>
  </el-main>
</template>
