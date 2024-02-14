<template>
    <div class="footer">
        <div class="the-container">
            <div class="footer-wrapper">
                <a href="mailTo:ia.mazlumyildirim@gmail.com" class="button-contact">
                    Keep in Touch
                </a>

                <div class="copyright">
                    Build with &#9829 in Zagreb. 2024
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 45px;
  left: 0;
  width: 100%;
}

.footer-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button-contact {
  background: #fff;
  padding: 14px 36px;
  color: #181818;
  font-size: 18px;
  font-weight: bold;
  border-radius: 3px;
  box-shadow: 0 4px 12px rgba(234, 36, 39, 0.32);
}

.copyright {
  color: #fff;
  font-size: 18px;
  opacity: 0.8;
}

@media screen and (max-width: 1500px) {
  .footer {
    bottom: 36px;
  }

  .button-contact {
    padding: 11px 30px;
    font-size: 16px;
  }

  .copyright {
    font-size: 16px;
  }
}
@media screen and (max-width: 1200px) {
  .footer {
    bottom: 32px;
  }

  .button-contact {
    padding: 10px 24px;
    font-size: 14px;
  }

  .copyright {
    font-size: 14px;
  }
}
@media screen and (max-width: 576px) {
  .footer {
    bottom: 32px;
  }

  .footer-wrapper {
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
  }

  .button-contact {
    padding: 10px 24px;
    font-size: 14px;
  }

  .copyright {
    margin-top: 16px;
    font-size: 12px;
  }
}
</style>