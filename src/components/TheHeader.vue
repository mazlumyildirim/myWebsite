<template>
  <div class="header">
    <div class="the-container">
      <div class="header-wrapper">
        <img src="@/assets/images/logo.svg" class="logo" />
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 45px;
}

.logo {
  width: 90px;
}

@media screen and (max-width: 1500px) {
  .logo {
    width: 65px;
  }

  .header-wrapper {
    margin-top: 36px;
  }
}

@media screen and (max-width: 1200px) {
  .logo {
    width: 52px;
  }

  .header-wrapper {
    margin-top: 32px;
  }
}
</style>