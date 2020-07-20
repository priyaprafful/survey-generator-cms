<template>
  <Wrapper>
    <Container>
      <div class="flex justify-between">
        <div
          v-for="(card, index) in data.cards"
          :key="index"
          class="bg-green-400 w-1/4 p-6 mr-6 last:mr-0 rounded"
        >
          <h3 class="text-center mb-6">{{ $prismic.asText(card.plan) }}</h3>
          <prismic-rich-text :field="card.description" class="text-sm mb-6" />
          <prismic-rich-text :field="card.list" />
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
