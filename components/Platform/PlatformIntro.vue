<template>
  <Wrapper>
    <Container>
      <div class="text-center leading-loose mb-16">
        <h2>Inget är omöjligt i vårt enkätverktyg</h2>
      </div>

      <div class="flex leading-relaxed mb-16">
        <Block half>
          <h3 class="mb-4 text-blue-4">
            Användarvänligt, kraftfullt och flexibelt enkätverktyg
          </h3>
          <p>
            Vårt verktyg är erkänt enkelt och effektivt att arbeta med, och
            bland våra kunder finns exempelvis Demoskop och SACO. Du kan lätt
            administrera din undersökning från ax till limpa, och väljer hur
            avancerade rapporter du vill ha. Oavsett om det är några få eller
            hundratusentals respondenter du behöver hantera är det enkelt med
            verktyget.
          </p>
          <br />
          <p>
            SurveyGenerator utvecklas självklart hela tiden. Du kommer alltid
            att ha den senaste tekniken och funktionaliteten. Dina idéer,
            förslag och behov är viktiga för oss när vi utvecklar
            enkätverktyget.
          </p>
        </Block>

        <Block half class="flex items-center relative">
          <div class="dots" />
          <img src="./SG4_Platform1.svg" class="w-full h-full z-10 jaja" />
        </Block>
      </div>

      <div class="flex leading-relaxed">
        <Block half>
          <div class="bg-blue-2 w-full h-full" />
        </Block>
        <Block half>
          <h3 class="mb-4 text-blue-4">Hjälp och självhjälp</h3>
          <p>
            Vårt enkätverktyg är enkelt att förstå, men det finns också allt
            möjligt stöd för att snabbt komma igång. Skulle du behöva hjälp
            finns vår snabba och personliga support till hands.
          </p>
          <br />
          <p>
            Vi kan också avlasta dig helt och hållet med allt ifrån upplägg och
            utformning av din undersökning till att hantera administration och
            rapporter.
          </p>
        </Block>
      </div>

      <div class="flex">
        <p>Demoenkät</p>
        <p>
          För att visa hur en enkät kan se ut och vilka funktioner det finns i
          verktyget har vi skapat en demoenkät som visar de olika frågetyperna i
          verktyget. Givetvis går det att förändra utseende och layout efter
          dina egna önskemål.
        </p>
        <MainBtn
          global
          text="Till demoenkäten"
          to="https://reply.surveygenerator.com/InSurvey.aspx?xzy=dlAap9vr0UlyTXKa4vu%2fBcrbSuQRDygQ"
        />
      </div>
    </Container>
  </Wrapper>
</template>

<script>
export default {};
</script>

<style scoped>
.dots {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(#aad7ed 1px, transparent 2px);
  background-size: calc(10 * 1px) calc(10 * 1px);
  margin-right: 40px;
  margin-top: 40px;
}

.jaja {
  margin-left: 40px;
  margin-bottom: 40px;
}
</style>
