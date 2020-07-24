<template>
  <section class="bg-blue-9 text-white">
    <Container>
      <h2 class="text-center mb-16">Vad vi kan hjälpa dig med</h2>
      <div class="flex leading-relaxed justify-between mt-8">
        <Block third>
          <Placeholder class="w-12 h-12 mb-6" />
          <h3 class="mb-2">Skräddarsytt</h3>
          <p>
            Tycker du att de vanliga versionerna har nästan allt – men ändå inte
            riktigt? Då kan vi skräddarsy verktyget till att passa just dig och
            dina behov. Vi utformar helt enkelt dina enkäter så att de ser ut
            och fungerar precis som du vill.
          </p>
        </Block>
        <Block third>
          <Placeholder class="w-12 h-12 mb-6" />
          <h3 class="mb-2">Konsulthjälp</h3>
          <p>
            Har du behov av extra hjälp med själva genomförandet av en
            undersökning kan vi göra hela eller delar av jobbet. Vi erbjuder
            konsulttjänster inom bland annat:
          </p>
          <ul>
            <li>
              Projektledning Rådgivning kring genomförande Formulering av frågor
              Programmering av enkät Formgivning av enkät Kvalitetssäkring
              Utskick och uppföljning Avancerade rapporter Presentationer
            </li>
          </ul>
        </Block>
        <Block third>
          <Placeholder class="w-12 h-12 mb-6" />
          <h3 class="mb-2">Duis tempus</h3>
          <p>
            In vitae mattis risus. Curabitur mattis, risus vel rhoncus
            hendrerit, nunc nisl finibus erat, vitae tempor ex erat in leo. Cras
            eget mi urna. Duis eget gravida ipsum, a tristique nulla.
          </p>
        </Block>
      </div>
    </Container>
  </section>
</template>

<script>
export default {
  name: 'Features',
};
</script>

<style lang="scss">
.features a {
  color: red !important;
  font-weight: 500 !important;
}
</style>
