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
        class="leading-relaxed"
      >
        <Block half :index="index">
          <prismic-rich-text
            :field="section.title"
            class="text-lg text-blue-4 mb-6"
          />
          <prismic-rich-text :field="section.content" class="rich-text" />
        </Block>

        <Block half :index="index">
          <Dots :index="index">
            <prismic-image v-if="section.image" :field="section.image" />
          </Dots>
        </Block>
      </BlockWrapper>

      <div
        class="flex bg-blue-9 text-white p-6 shadow-card rounded-md leading-relaxed relative"
      >
        <div class="abstract" />

        <div class="flex items-center justify-evenly z-10">
          <prismic-rich-text
            :field="data.demo_title"
            class="text-blue-1 text-lg"
          />
          <prismic-rich-text
            :field="data.demo_content"
            class="rich-text text-sm w-1/2 mx-6"
          />
          <MainBtn
            global
            :text="$prismic.asText(data.demo_button)"
            :to="data.demo_url.url"
            class="bg-blue-4 hover:bg-blue-3 text-white"
          />
        </div>
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
