<template>
  <Wrapper>
    <Container>
      <div class="text-center leading-loose mb-16">
        <prismic-rich-text :field="data.intro_title" />
      </div>

      <BlockWrapper
        v-for="(section, index) in data.intro_sections"
        :key="index"
        :index="index"
      >
        <Block half :index="index">
          <prismic-rich-text :field="section.title" class="mb-4 text-blue-4" />
          <prismic-rich-text :field="section.content" class="rich-text" />
        </Block>

        <Block half :index="index">
          <Dots :index="index">
            <prismic-image v-if="section.image" :field="section.image" />
          </Dots>
        </Block>
      </BlockWrapper>

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
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>
