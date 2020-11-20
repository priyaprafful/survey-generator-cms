<template>
  <SGPage>
    <SGSection>
      <SGBlockWrapper>
        <SGBlock size="1/2">
          <div>
            <nuxt-link :to="localePath('help-articles')">Artiklar</nuxt-link>
          </div>
        </SGBlock>

        <SGBlock size="1/2">
          <div>
            <nuxt-link :to="localePath('help-faq')">Vanliga frågor</nuxt-link>
          </div>
        </SGBlock>
      </SGBlockWrapper>
    </SGSection>
  </SGPage>
</template>

<script>
export default {};
</script>
