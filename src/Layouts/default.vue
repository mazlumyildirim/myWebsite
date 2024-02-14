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
export default {
  name: "default",
};
</script>

<style lang="scss" scoped>
</style>