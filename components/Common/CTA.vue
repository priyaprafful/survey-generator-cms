<template>
  <section class="bg-bgMain cta-bg">
    <Container>
      <div class="flex">
        <Block half>
          <h2 class="mb-2">
            Redo att sätta igång?
          </h2>
          <p class="mb-6 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div class="flex items-center">
            <CTABtn />

            <FunnelBtn
              :text="$t('common.get_quote')"
              :to="'boka-demo'"
              class="py-2 px-4"
            />
          </div>
        </Block>

        <Block half class="flex">
          <div class="flex flex-col mr-4">
            <h3 class="mb-6 leading-normal">Prisplan eller skräddarsytt</h3>

            <p class="leading-relaxed mb-4">
              Du kan lätt administrera din undersökning från ax till limpa, och
              väljer hur avancerade rapporter du vill ha. Vi tillhandahåller tre
              olika modeller av verktyget, och passar de inte dina behov kan vi
              skräddarsy både enkäter, mjukvara och tjänster.
            </p>

            <FunnelBtn text="Priser" to="priser" class="mt-auto" />
          </div>

          <div class="flex flex-col ml-4">
            <h3 class="mb-6 leading-normal">Enkelt och effektivt</h3>

            <p class="leading-relaxed mb-4">
              Vårt verktyg är erkänt enkelt och effektivt att arbeta med. Det är
              webbaserat och hjälper dig att snabbt och kostnadseffektivt
              genomföra olika former av undersökningar bland medarbetare,
              paneler, kunder eller ”svenska folket”.
            </p>

            <FunnelBtn text="Verktyget" to="verktyget" class="mt-auto" />
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
  background-position: center center;
}
</style>
