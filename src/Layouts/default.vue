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
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import Background from "@/components/Background.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    Background,
  },
};
</script>

<style lang="scss" scoped>
</style>