<template>
  <section class="bg-bgMain cta-bg">
    <Container>
      <div class="flex">
        <Block half>
          <h2 class="mb-4">
            Redo att sätta igång?
          </h2>
          <p class="mb-10 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div class="flex items-center">
            <CTABtn />

            <MainBtn
              :text="$t('common.get_quote')"
              :to="'kontakt'"
              class="py-2 px-4"
              funnel
            />
          </div>
        </Block>

        <Block half class="flex">
          <div class="flex flex-col mr-4">
            <h3 class="mb-6 leading-normal">Prisplan eller skräddarsytt</h3>

            <p class="leading-relaxed mb-4">
              Vi tillhandahåller tre olika modeller av verktyget, och passar de
              inte dina behov kan vi skräddarsy både enkäter, mjukvara och
              tjänster.
            </p>

            <MainBtn
              text="Priser"
              to="priser"
              class="mt-auto"
              funnel
              left-aligned
            />
          </div>

          <div class="flex flex-col ml-4">
            <h3 class="mb-6 leading-normal">Enkelt och effektivt</h3>

            <p class="leading-relaxed mb-4">
              Vårt verktyg är webbaserat och hjälper dig att snabbt och
              kostnadseffektivt genomföra olika former av undersökningar bland
              medarbetare, paneler, kunder eller ”svenska folket”.
            </p>

            <MainBtn
              text="Verktyget"
              to="verktyget"
              class="mt-auto"
              funnel
              left-aligned
            />
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
  background-image: url('../../assets/svgs/cta_bg.svg');
  background-size: cover;
  background-position: center;
}
</style>
