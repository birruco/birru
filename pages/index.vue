<script setup lang="ts">
  const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

  useSchemaOrg([
    defineOrganization({
      name: 'Birru - Child\'s Communication Development',
      url: 'https://birru.co',
      logo: '/images/logo.webp',
      sameAs: ['https://www.linkedin.com/company/birruco']
    })
  ])

  defineOgImageComponent('NuxtSeo', {
    title: 'Birru',
    description: 'Kami membantu orang tua memahami dan mengatasi masalah komunikasi untuk membantu anak mereka menguasai bahasa pertama.',
    siteName: 'birru.co',
    theme: '#49A6CB',
  })
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

        <a href="https://wa.me/6282281035944" target="_blank" rel="noopener noreferrer">
          <el-button size="large" class="mr-3">
            {{ page?.hero.cta.partnership }}
          </el-button>
        </a>
        <NuxtLink to="/cabang/">
          <el-button size="large" type="primary">
            {{ page?.hero.cta.reservation }}
          </el-button>
        </NuxtLink>
      </div>
    </section>
    <el-divider />
    <section class="text-center">
      <h2 class=" text-5xl font-birru">
        {{ page?.communication?.title }}
      </h2>
    </section>
    <el-divider />
    <section class="text-center">
      <div class=" text-base mb-6 font-nunito">
        {{ page?.express.headline }}
      </div>
      <h2 class=" text-5xl font-birru" v-html="page?.express?.title" />
    </section>
    <el-divider />
    <section class="text-center">
      <div class=" text-base mb-6 font-nunito">
        {{ page?.program.headline }}
      </div>
      <h2 class=" text-5xl font-birru mb-6" v-html="page?.program.title">
      </h2>

      <div class="grid grid-cols-2 gap-4 mb-6">
        <div v-for="item in page?.program.items">
          <div>
            {{ item.title }}
          </div>
          <ol>
            <li v-for="step in item.steps">
              {{ step.title }}
            </li>
          </ol>
        </div>
      </div>
    </section>
    <el-divider />
    <section class="text-center">
      <h2 class=" text-5xl font-birru mb-6" v-html="page?.research.title">
      </h2>

      <div class="grid grid-cols-2 gap-4 mb-6">
        <div v-for="item in page?.research.items">
          <div>
            {{ item.title }}
          </div>
          <div class="font-bold mb-6">
            {{ item.description }}
          </div>
          <a :href="item.url" target="_blank" rel="noopener noreferrer">
            <el-button size="large" type="primary">
              Jurnal
            </el-button>
          </a>
        </div>
      </div>
    </section>
    <el-divider />
    <section class="text-center">
      <div class=" text-base font-nunito">
        {{ page?.service.headline }}
      </div>
      <h2 class=" text-5xl font-birru my-6" v-html="page?.service.title" />

      <NuxtLink to="/kasus/">
        <el-button size="large" type="primary">
          {{ page?.service.cta }}
        </el-button>
      </NuxtLink>
    </section>
    <el-divider />
    <section class="text-center">
      <h2 class=" text-5xl font-birru" v-html="page?.talent.title" />
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
      <h2 class=" text-5xl font-birru" v-html="page?.growth.title" />
      <h3 class="text-lg font-nunito my-6">
        {{ page?.growth.description }}
      </h3>

      <NuxtPicture format="webp" :src="page?.growth.img" :imgAttrs="{ 
          class: 'mx-auto',
          alt: page?.growth.title
        }" />

      <div class="grid grid-cols-3 mt-6">
        <div>
          <div class="text-7xl">
            {{ page?.growth.data.clinic.number }}
          </div>
          {{ page?.growth.data.clinic.description }}
        </div>
        <div>
          <div class="text-7xl">
            {{ page?.growth.data.patient.number }}
          </div>
          {{ page?.growth.data.patient.description }}
        </div>
        <div>
          <div class="text-7xl">
            {{ page?.growth.data.meet.number }}
          </div>
          {{ page?.growth.data.meet.description }}
        </div>
      </div>
    </section>
    <el-divider />
    <section class="text-center">
      <div class=" text-base font-nunito">
        {{ page?.testimonial.headline }}
      </div>
      <h2 class=" text-5xl font-birru my-6" v-html="page?.testimonial.title" />

      <iframe :src="page?.testimonial.youtube" :title="page?.testimonial.title" class="mx-auto" width="800"
        height="400">
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
        {{ page?.faq.headline }}
      </div>
      <h2 class=" text-5xl font-birru" v-html="page?.faq.title" />

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
      <div class=" text-base font-nunito">
        {{ page?.partnership.headline }}
      </div>
      <h2 class=" text-5xl font-birru my-6" v-html="page?.partnership.title" />

      <div>
        <el-button size="large" class="mr-3">
          {{ page?.partnership.cta.download }}
        </el-button>

        <a href="https://wa.me/6282281035944" target="_blank" rel="noopener noreferrer">
          <el-button size="large" type="primary">
            {{ page?.partnership.cta.join }}
          </el-button>
        </a>
      </div>
    </section>
  </el-main>
</template>
