<template>
  <SGPage>
    <SGSection>
      <SGBlockWrapper>
        <SGBlock size="1/2">
          <p>Artiklar</p>
          <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
          <div>
            <nuxt-link :to="localePath('help-articles')">Läs mer</nuxt-link>
          </div>
        </SGBlock>

        <SGBlock size="1/2">
          <div>
            <p>Vanliga frågor</p>
            <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            <nuxt-link :to="localePath('help-faq')">Läs mer</nuxt-link>
          </div>
        </SGBlock>
      </SGBlockWrapper>
    </SGSection>
  </SGPage>
</template>

<script>
export default {};
</script>
