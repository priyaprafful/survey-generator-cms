<template>
  <SGSection>
    <SGBlockWrapper>
      <SGBlock size="1/2" class="help-box bg-lightblue-4 text-blue-9">
        <div class="help-box__left">
          <h3 class="help-box__title">Artiklar</h3>
          <p class="help-box__desc">
            Lorem ipsum dolor sit amet, consectetur elit.
          </p>
          <div class="help-box__btn">
            <SGButton size="medium" label="Se artiklar" to="help-articles" />
          </div>
        </div>

        <div class="circle bg-blue-9" />
      </SGBlock>

      <SGBlock size="1/2" class="help-box bg-yellow-1 text-yellow-4">
        <div class="help-box__left">
          <h3 class="help-box__title">Vanliga frågor</h3>
          <p class="help-box__desc">
            Lorem ipsum dolor sit amet, consectetur elit.
          </p>

          <div class="help-box__btn">
            <SGButton
              color="yellow-dark"
              size="medium"
              label="Finn dina svar"
              to="help-faq"
            />
          </div>
        </div>

        <div class="circle bg-yellow-4" />
      </SGBlock>
    </SGBlockWrapper>
  </SGSection>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.help-box {
  @apply flex;
  @apply items-center;
  @apply p-6;

  .help-box__left {
    @apply flex;
    @apply flex-col;
    @apply h-full;
    @apply mr-4;

    .help-box__title {
      @apply mb-2;
    }

    .help-box__desc {
      @apply mb-6;
      @apply leading-normal;
    }

    .help-box__btn {
      @apply mt-auto;
    }
  }

  .circle {
    width: 100px;
    height: 100px;
    border-radius: 9999px;
    flex-shrink: 0;
    margin-left: auto;
  }
}
</style>
