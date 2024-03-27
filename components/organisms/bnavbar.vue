<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
</script>

<template>
  <el-header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
    >
      <el-menu-item index="0">
        <NuxtLink to="/">
          <NuxtPicture 
            format="webp" 
            src="/images/logo-horizontal.webp"
            :imgAttrs="{
              alt: 'Birru'
            }"
          />
        </NuxtLink>
      </el-menu-item>
      <div class="flex-grow" />
      <el-sub-menu index="2">
        <template #title>Layanan</template>
        <el-menu-item index="2-1">
          <NuxtLink to="/layanan/terapi-wicara/">
            Terapi Wicara   
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="2-2">
          <NuxtLink to="/layanan/okupasi-terapi/">
            Okupasi Terapi   
          </NuxtLink>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">
        <NuxtLink to="/cabang/">
          Cabang
        </NuxtLink>
      </el-menu-item>
      <el-sub-menu index="4">
        <template #title>
          <NuxtLink to="/kasus/">
            Kasus
          </NuxtLink>
        </template>
        <el-menu-item index="4-1">
          <NuxtLink to="/kasus/speech-delay/">
            Speech Delay
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-2">
          <NuxtLink to="/kasus/autism/">
            Autism
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-3">
          <NuxtLink to="/kasus/gangguan-fonologi/">
            Gangguan Fonologi
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-4">
          <NuxtLink to="/kasus/gangguan-apraxia/">
            Gangguan Apraxia
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-5">
          <NuxtLink to="/kasus/gangguan-artikulasi/">
            Gangguan Artikulasi
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-6">
          <NuxtLink to="/kasus/adhd/">
            ADHD
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-7">
          <NuxtLink to="/kasus/gangguan-bahasa/">
            Gangguan Bahasa
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-8">
          <NuxtLink to="/kasus/gangguan-pendengaran/">
            Gangguan Pendengaran
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-9">
          <NuxtLink to="/kasus/gangguan-membaca/">
            Gangguan Membaca
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-10">
          <NuxtLink to="/kasus/down-syndrome/">
            Down Syndrome
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-11">
          <NuxtLink to="/kasus/celah-bibir-dan-langit-langit/">
            Celah Bibir dan Langit-langit
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-12">
          <NuxtLink to="/kasus/gagap/">
            Gagap
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-13">
          <NuxtLink to="/kasus/gangguan-makan-dan-menelan/">
            Gangguan Makan dan Menelan
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-14">
          <NuxtLink to="/kasus/selective-mutism/">
            Selective Mutism
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-15">
          <NuxtLink to="/kasus/developmental-delay/">
            Developmental Delay
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-16">
          <NuxtLink to="/kasus/gangguan-sensorik/">
            Gangguan Sensorik
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4-17">
          <NuxtLink to="/kasus/cerebral-palsy/">
            Cerebral Palsy
          </NuxtLink>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>
          <NuxtLink to="/bakat/">
            Bakat
          </NuxtLink>
        </template>
        <el-menu-item index="5-1">
          <NuxtLink to="/bakat/sensing-introvert/">
            Sensing Introvert
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="5-2">
          <NuxtLink to="/bakat/sensing-extrovert/">
            Sensing Extrovert
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="5-3">
          <NuxtLink to="/bakat/thinking-introvert/">
            Thinking Introvert
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="5-4">
          <NuxtLink to="/bakat/thinking-extrovert/">
            Thinking Extrovert
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="5-5">
          <NuxtLink to="/bakat/insting/">
            Insting
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="5-6">
          <NuxtLink to="/bakat/intuiting-introvert/">
            Intuiting Introvert
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="5-7">
          <NuxtLink to="/bakat/intuiting-extrovert/">
            Intuiting Extrovert
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="5-8">
          <NuxtLink to="/bakat/feeling-introvert/">
            Feeling Introvert
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="5-9">
          <NuxtLink to="/bakat/feeling-extrovert/">
            Feeling Extrovert
          </NuxtLink>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="6">
        <NuxtLink to="/tentang/">
          Tentang
        </NuxtLink>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>
