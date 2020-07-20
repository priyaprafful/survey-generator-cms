<template>
  <Wrapper>
    <Container>
      <div class="grid grid-cols-3 gap-6">
        <div
          v-for="(card, index) in data.cards"
          :key="index"
          class="flex flex-col bg-green-400 p-6 rounded last:col-start-1 last:col-end-4 last:flex-row"
        >
          <h3 class="text-center mb-6">{{ $prismic.asText(card.plan) }}</h3>
          <prismic-rich-text :field="card.description" class="text-sm mb-6" />
          <prismic-rich-text :field="card.list" class="text-sm" />
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
