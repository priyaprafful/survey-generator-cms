<template>
  <Wrapper>
    <Container>
      <div class="text-center leading-loose mb-16">
        <prismic-rich-text :field="data.groups_title" class="mb-6" />
        <prismic-rich-text
          :field="data.groups_description"
          class="w-2/3 m-auto"
        />
      </div>

      <div class="grid grid-cols-2 gap-12 font-body">
        <div
          v-for="(card, index) in data.intro_group"
          :key="index"
          class="inline-flex"
        >
          <div>
            <Placeholder class="w-12 h-12 mr-4" />
          </div>

          <div class="leading-loose">
            <prismic-rich-text :field="card.group_title" class="mb-2 text-lg" />
            <prismic-rich-text :field="card.group_content" />
          </div>
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
