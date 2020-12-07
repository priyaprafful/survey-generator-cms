<template>
  <section class="bg-blue-9 text-white">
    <Container>
      <prismic-rich-text
        :field="data.features_title"
        class="text-center mb-16"
      />

      <div class="flex leading-relaxed justify-between mt-8">
        <Block onethird>
          <Placeholder class="w-12 h-12 mb-6" />
          <h3 class="mb-2 text-blue-1">Matematiska formler</h3>
          <p>
            Med SurveyGenerator kan du skapa dynamiska frågeformulär. Du kan
            ange formler på en, flera eller alla respondenter och med hjälp av
            de fyra räknesätten räkna fram ett värde utifrån respondentens svar,
            andra värden på respondenten och/eller konstanter.
          </p>
        </Block>
        <Block onethird>
          <Placeholder class="w-12 h-12 mb-6" />
          <h3 class="mb-2 text-blue-1">Multirapporter</h3>
          <p>
            Multirapporter används bland annat i medarbetarundersökningar där
            varje chef behöver en egen rapport med svar från sina närmaste
            medarbetare. Med multirapporter kan du skapa en mall för hur svaren
            ska visas, gruppera resultatet på egenskaper och generera en rapport
            för varje grupp.
          </p>
        </Block>
        <Block onethird>
          <Placeholder class="w-12 h-12 mb-6" />
          <h3 class="mb-2 text-blue-1">50 olika språk</h3>
          <p>
            Med 50 tillgängliga språk i verktyget kan du få både enkäter och
            rapporter på det språk du önskar. Du kan skapa frågeformuläret på
            ett huvudspråk och sedan enkelt översätta det till fler. Dessutom
            kan respondenten själv bestämma vilket språk enkäten ska fyllas i
            på.
          </p>
        </Block>
      </div>
    </Container>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>
