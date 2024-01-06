<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
</script>

<template>
  <div class="p-20">
    <section class="text-center">
        <h1 class=" text-7xl font-birru">
            {{ page.hero.title }}
        </h1>
        <h2 class="text-lg font-nunito my-6">
            {{ page.hero.description }}
        </h2>
        <div>
            <button class="py-2 px-4 bg-gray-300 rounded mr-4">
                {{ page.hero.cta.partnership }}
            </button>
            <button class="py-2 px-4 bg-gray-300 rounded">
                {{ page.hero.cta.reservation }}
            </button>
        </div>
    </section>
    <hr class="my-20">
    <section class="text-center">
        <h3 class=" text-base mb-6 font-nunito">
            {{ page.service.headline }}
        </h3>
        <h1 class=" text-5xl font-birru">
            {{ page.service.title }}
        </h1>
        <h2 class="text-lg font-nunito my-6">
            {{ page.service.description }}
        </h2>

        <div class="grid grid-cols-3 gap-4">
            <div v-for="item in page.service.items">
                <h4>
                    {{ item.title }}
                </h4>
                <div>
                    {{ item.description }}
                </div>
            </div>
        </div>
    </section>
    <hr class="my-20">
    <section class="text-center">
        <h3 class=" text-base  mb-6 font-nunito">
            {{ page.program.headline }}
        </h3>
        <h1 class=" text-5xl font-birru">
            {{ page.program.title }}
        </h1>
        <h2 class="text-lg font-nunito my-6">
            {{ page.program.description }}
        </h2>

        <div 
            v-for="step in page.program.steps"
            class="mb-6"
        >
            <h4>
                {{ step.title }}
            </h4>
            <ol>
                <li v-for="item in step.step">
                    {{ item.title }}
                </li>
            </ol>
        </div>

        <div class="columns-3">
            <div v-for="photo in page.program.gallery">
                <img 
                    :src="photo.img" 
                    :placeholder="page.program.title" 
                    class="rounded"
                />
            </div>
        </div>
    </section>
    <hr class="my-20">
    <section class="text-center">
        <h3 class=" text-base  mb-6 font-nunito">
            {{ page.talent.headline }}
        </h3>
        <h1 class=" text-5xl font-birru">
            {{ page.talent.title }}
        </h1>
        <h2 class="text-lg font-nunito my-6">
            {{ page.talent.description }}
        </h2>

        <button class="py-2 px-4 bg-gray-300 rounded mr-4">
            {{ page.talent.cta }}
        </button>
    </section>
    <hr class="my-20">
    <section class="text-center">
        <h3 class=" text-base  mb-6 font-nunito">
            {{ page.growth.headline }}
        </h3>
        <h1 class=" text-5xl font-birru">
            {{ page.growth.title }}
        </h1>
        <h2 class="text-lg font-nunito my-6">
            {{ page.growth.description }}
        </h2>
        <img 
            :src="page.growth.img" 
            :placeholder="page.growth.title" 
            class="mx-auto rounded"
        />
        <div class="grid grid-cols-3 mt-6">
            <div>
                <div class="text-7xl">
                    {{ page.growth.data.clinic.number }}
                </div>
                {{ page.growth.data.clinic.description }}
            </div>
            <div>
                <div class="text-7xl">
                    {{ page.growth.data.therapist.number }}
                </div>
                {{ page.growth.data.therapist.description }}
            </div>
            <div>
                <div class="text-7xl">
                    {{ page.growth.data.patient.number }}
                </div>
                {{ page.growth.data.patient.description }}
            </div>
        </div>
    </section>
    <hr class="my-20">
    <section class="text-center">
        <h3 class=" text-base  mb-6 font-nunito">
            {{ page.testimonial.headline }}
        </h3>
        <h1 class=" text-5xl font-birru">
            {{ page.testimonial.title }}
        </h1>
        <h2 class="text-lg font-nunito my-6">
            {{ page.testimonial.description }}
        </h2>
        <iframe 
            :src="page.testimonial.youtube"
            class="mx-auto"
            width="800" 
            height="400"
        >
        </iframe>
        <div class="grid grid-cols-3 gap-4 mt-6">
            <div v-for="item in page.testimonial.items">
                <div>
                    {{ item.comment }}
                </div>
                <h4>
                    {{ item.author }}
                </h4>
            </div>
        </div>
    </section>
    <hr class="my-20">
    <section class="text-center">
        <h3 class=" text-base  mb-6 font-nunito">
            {{ page.stimulus.headline }}
        </h3>
        <h1 class=" text-5xl font-birru">
            {{ page.stimulus.title }}
        </h1>
        <h2 class="text-lg font-nunito my-6">
            {{ page.stimulus.description }}
        </h2>

        <button class="py-2 px-4 bg-gray-300 rounded mr-4">
            {{ page.stimulus.cta }}
        </button>
    </section>
    <hr class="my-20">
    <section class="text-center">
        <h3 class=" text-base  mb-6 font-nunito">
            {{ page.faq.headline }}
        </h3>
        <h1 class=" text-5xl font-birru">
            {{ page.faq.title }}
        </h1>
        <h2 class="text-lg font-nunito my-6">
            {{ page.faq.description }}
        </h2>

        <div class="grid grid-row-6 gap-4 mt-6">
            <div v-for="item in page.faq.items">
                <div>
                    {{ item.question }}
                </div>
                <h4>
                    {{ item.answer }}
                </h4>
            </div>
        </div>
    </section>
    <hr class="my-20">
    <section class="text-center">
        <h3 class=" text-base  mb-6 font-nunito">
            {{ page.partnership.headline }}
        </h3>
        <h1 class=" text-5xl font-birru">
            {{ page.partnership.title }}
        </h1>
        <h2 class="text-lg font-nunito my-6">
            {{ page.partnership.description }}
        </h2>

        <div>
            <button class="py-2 px-4 bg-gray-300 rounded mr-4">
                {{ page.partnership.cta.download }}
            </button>
            <button class="py-2 px-4 bg-gray-300 rounded">
                {{ page.partnership.cta.join }}
            </button>
        </div>
    </section>
  </div>
</template>