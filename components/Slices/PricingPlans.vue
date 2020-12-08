<template>
  <BaseSection gradient border flex-col>
    <prismic-rich-text :field="slice.primary.title" class="text-center mb-16" />

    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="(card, index) in slice.items"
        :key="index"
        class="flex flex-col p-4 shadow-card rounded bg-white border-2 border-lightblue-5"
      >
        <prismic-rich-text :field="card.card_title" class="text-center mb-4" />

        <prismic-rich-text
          :field="card.card_description"
          class="mb-4 p-4 -ml-4 -mr-4 bg-lightblue-2 text-sm leading-relaxed"
        />

        <prismic-rich-text
          :field="card.card_list"
          class="pricing-plans__list mt-auto text-sm leading-loose"
        />
      </div>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '@/components/Library/BaseSection.vue';

export default {
  name: 'PricingPlans',
  components: {
    BaseSection
  },
  props: {
    slice: {
      type: [Array, Object],
      default: null
    }
  }
};
</script>

<style lang="scss">
.pricing-plans__list li {
  display: flex;
  align-items: center;

  &:before {
    display: block;
    content: '';
    background-image: url('../../assets/svg/check.svg');
    background-size: 0.75rem 0.75rem;
    height: 0.75rem;
    width: 0.75rem;
    margin-right: 0.75rem;
    fill: currentColor;
    color: red;
  }
}
</style>
