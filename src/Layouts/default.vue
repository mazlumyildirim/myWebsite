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

<script>
import { Background } from "../components/Background.vue";
export default {
  name: "default",
  components: {
    Background,
  },
};
</script>

<style lang="scss" scoped>
</style>