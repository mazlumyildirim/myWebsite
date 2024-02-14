<template>
  <div class="page default-layout">
    <Background />
    <TheHeader />
    <div class="the-container">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import { TheHeader } from "#components";
import { TheFooter } from "#components";
</script>

<style lang="scss" scoped>
</style>