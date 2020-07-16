<template>
  <section class="bg-blue-9 text-white">
    <Container>
      <h2 class="mb-12">Vad vi kan hjälpa dig med</h2>
      <div class="flex justify-between mt-8">
        <Block third>
          <Placeholder class="w-12" />
          <p>
            <b>Skräddarsytt</b>
            Tycker du att de vanliga versionerna har nästan allt – men ändå inte
            riktigt? Då kan vi skräddarsy verktyget till att passa just dig och
            dina behov. Vi utformar helt enkelt dina enkäter så att de ser ut
            och fungerar precis som du vill.
          </p>
        </Block>
        <Block third>
          <Placeholder class="w-12" />
          <p>
            <b>Konsulthjälp</b>
            Har du inte tid eller möjlighet att genomföra hela eller delar av
            undersökningen själv kan vi hjälpa dig. Vi kan också ge dig råd
            kring alternativa användningsområden av enkätverktyget för att kunna
            nyttja det maximalt.
          </p>
        </Block>
        <Block third>
          <Placeholder class="w-12" />
          <p>
            <b>Mjukvaruutveckling</b>
            Ibland krävs det lite mer. Du kanske behöver en unik lösning för
            just din verksamhet som helt enkelt inte finns ännu. Då kan vi
            hjälpa dig med att utveckla helt ny mjukvara för just dina behov. Vi
            arbetar främst i Microsoftmiljö.
          </p>
        </Block>
      </div>

      <div class="flex">
        <Block half>
          <p>
            Vi är experter på webbundersökningar och bjuder gärna på vår
            kunskap. Vårt enkätverktyg SurveyGenerator är känt för att vara
            användarvänligt. Men, om du har ont om tid eller har specifika krav
            kan vi ge dig allt stöd som du behöver beträffande både teknik och
            kompetens.
          </p>
        </Block>
        <Block half>
          <Placeholder class="w-20" />
        </Block>
      </div>

      <div class="flex">
        <Block half>
          <Placeholder class="w-20" />
        </Block>
        <Block half>
          <p>
            Stärk dina kunskaper kring webbundersökningar med våra utbildningar.
            Du kanske behöver en grundlig genomgång så att du kan använda det på
            absolut bästa sätt? Om inte tiden räcker till kan vi göra hela eller
            delar av jobbet med själva genomförandet av en undersökning, och har
            du speciella behov kan vi ta fram speciella lösningar.
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
