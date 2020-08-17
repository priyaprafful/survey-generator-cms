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
          class="flex"
        >
          <!-- <div>
            <Placeholder class="w-12 h-12 mr-4" />
          </div> -->
          <IconWrapper square class="mr-4" />

          <div class="flex flex-col leading-loose">
            <prismic-rich-text :field="card.group_title" class="mb-2 text-lg" />
            <p>{{ $prismic.asText(card.group_content) }}</p>
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
