<template>
  <div class="content">
    <div class="message">
      <div class="message-top">Hi There,</div>
      <div class="message-inner">
        I'm
        <span class="highlight">
          Mazlum <br />
          Yıldırım
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  height: calc(100vh - 230px);
}

.message {
  margin-top: -10vh;
}

.message-top {
  font-size: 78px;
  color: #fff;
  font-weight: normal;
}

.message-inner {
  font-size: 96px;
  color: #fff;
  font-weight: bold;

  .highlight {
    color: #bb0000;
  }
}

@media screen and (max-width: 1500px) {
  .content {
    height: calc(100vh - 170px);
  }

  .message-top {
    font-size: 54px;
  }
  .message-inner {
    font-size: 72px;
  }
}

@media screen and (max-width: 1200px) {
  .content {
    height: calc(100vh - 146px);
  }

  .message-top {
    font-size: 50px;
  }
  .message-inner {
    font-size: 64px;
  }
}
@media screen and (max-width: 968px) {
  .content {
    justify-content: center;
  }

  .message {
    text-align: center;
  }

  .message-top {
    font-size: 62px;
  }
  .message-inner {
    font-size: 78px;
  }
}
@media screen and (max-width: 576px) {
  .content {
    justify-content: center;
  }

  .message-top {
    font-size: 38px;
  }
  .message-inner {
    font-size: 46px;
  }
}
</style>
