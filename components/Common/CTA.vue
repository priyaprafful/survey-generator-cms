<template>
  <section class="bg-bgMain cta-bg">
    <Container>
      <div class="flex">
        <Block half>
          <h2 class="mb-6">
            Redo att sätta igång?
          </h2>
          <p class="mb-6 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div class="flex items-center">
            <CTABtn :text="$t('menu.book_demo')" />
            <nuxt-link
              :to="localePath('kontakt')"
              class="flex items-center py-2 px-4"
            >
              {{ $t('common.contact_us') }}
              <ChevronRight class="ml-3 h-3 w-3" />
            </nuxt-link>
          </div>
        </Block>

        <Block half class="flex">
          <div class="mr-4">
            <h3 class="mb-6 leading-normal">Prisplan eller skräddarsytt</h3>

            <p class="mb-4 leading-relaxed">
              Du kan lätt administrera din undersökning från ax till limpa, och
              väljer hur avancerade rapporter du vill ha. Vi tillhandahåller tre
              olika modeller av verktyget, och passar de inte dina behov kan vi
              skräddarsy både enkäter, mjukvara och tjänster.
            </p>

            <FunnelBtn text="Priser" navigate-to="priser" />
          </div>

          <div class="ml-4">
            <h3 class="mb-6 leading-normal">Enkelt och effektivt</h3>

            <p class="mb-4 leading-relaxed">
              Vårt verktyg är erkänt enkelt och effektivt att arbeta med. Det är
              webbaserat och hjälper dig att snabbt och kostnadseffektivt
              genomföra olika former av undersökningar bland medarbetare,
              paneler, kunder eller ”svenska folket”.
            </p>

            <FunnelBtn text="Verktyget" navigate-to="verktyget" />
          </div>
        </Block>
      </div>
    </Container>
  </section>
</template>

<script>
export default {};
</script>

<style>
.cta-bg {
  background-image: url('./SVG/cta_bg.svg');
  background-size: cover;
  /* background-position: center center; */
}
</style>
