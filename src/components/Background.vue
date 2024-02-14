<template>
  <div class="background">
    <div class="background-gradient"></div>
    <div class="background-lines">
      <div class="background-line" v-for="item in 11" :key="item"></div>
    </div>
  </div>
</template>

<script setup>
// import { ref, onMounted } from "vue";

// const rocks = ref([]);

// onMounted(() => {
//   for (let i = 0; i < 100; i++) {
//     const x = Math.random() * window.innerWidth;
//     const duration = 8 + Math.random() * 5;
//     const c = (Math.random() * 0xfffff * 1000000).toString(16);
//     const color = `#${c.slice(0, 6)}`;
//     rocks.value.push({ x, duration, color });
//   }
//   setInterval(() => {
//     i = i + 1;
//   }, 1000);
// });
</script>

<style scoped lang="scss">
.background {
  position: relative;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #181818;
  top: 0;
  left: 0;
  z-index: -1;
}

.background-gradient {
  position: absolute;
  width: 100%;
  height: 100vh;
  right: 0;
  top: 0;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0) 50%,
    rgba(187, 0, 0, 0.5) 100%
  );
}

.background-lines {
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  width: 100%;
  height: 100vh;
}

.background-line {
  width: 1px;
  height: 100%;
  background: rgba(255, 255, 255, 0.04);
}
</style>
