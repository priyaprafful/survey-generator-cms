<template>
  <Container>
    <div class="flex justify-between">
      <div v-for="(card, index) in data.cards" :key="index">
        <prismic-rich-text :field="card.plan" />
        <prismic-rich-text :field="card.description" />
        <prismic-rich-text :field="card.list" />
      </div>
    </div>
  </Container>
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
