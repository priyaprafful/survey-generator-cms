<template>
  <SGSection>
    <SGBlockWrapper>
      <SGBlock size="1/2" class="help-box bg-lightblue-4 text-blue-9">
        <p>Artiklar</p>
        <p>Lorem ipsum dolor sit amet, consectetur elit.</p>

        <SGButton size="medium" label="Läs mer" to="help-articles" />
      </SGBlock>

      <SGBlock size="1/2" class="help-box bg-yellow-1 text-yellow-4">
        <p>Vanliga frågor</p>
        <p>Lorem ipsum dolor sit amet, consectetur elit.</p>

        <SGButton
          color="yellow-dark"
          size="medium"
          label="Läs mer"
          to="help-faq"
        />
      </SGBlock>
    </SGBlockWrapper>
  </SGSection>
</template>

<script>
export default {};
</script>

<style scoped>
.help-box {
  @apply p-6;
}
</style>
