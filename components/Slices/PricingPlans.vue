<template>
  <BaseSection gradient border flex-col>
    <prismic-rich-text :field="slice.primary.title" class="text-center mb-16" />

    <div
      class="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4"
    >
      <div
        v-for="(card, index) in slice.items"
        :key="index"
        class="border border-bluegray-3 rounded-lg shadow-sm divide-y divide-gray-200"
        :class="{ 'bg-blue-9 text-white': index + 1 === slice.items.length }"
      >
        <div
          class="flex flex-col p-6"
          :class="{ 'h-full': index + 1 === slice.items.length }"
        >
          <prismic-rich-text :field="card.card_title" />

          <prismic-rich-text
            :field="card.card_description"
            class="mt-4 text-sm rich-text"
            :class="{
              'text-blue-4': index + 1 !== slice.items.length,
              'text-blue-1': index + 1 === slice.items.length
            }"
          />

          <p class="flex items-baseline mt-8">
            <span class="text-base font-medium text-blue-4 mr-2">
              {{ $prismic.asText(card.card_from) }}
            </span>
            <span class="text-4xl font-extrabold">
              {{ $prismic.asText(card.card_price) }}
            </span>
            <span class="text-base font-medium text-blue-4 ml-1">
              {{ $prismic.asText(card.card_price_date) }}
            </span>
          </p>

          <BaseButton
            :label="card.card_cta"
            :to="card.card_link"
            :color="
              index + 1 !== slice.items.length ? 'blue-dark' : 'blue-light'
            "
            :chevron="false"
            class="mt-8 w-full"
            :class="{ 'mt-auto': index + 1 === slice.items.length }"
          />
        </div>

        <div v-if="index + 1 !== slice.items.length" class="pt-6 pb-8 px-6">
          <h4 class="text-xs font-medium tracking-wide uppercase">
            {{ $prismic.asText(card.card_included) }}
          </h4>

          <prismic-rich-text
            :field="card.card_list"
            class="pricing-plans__list mt-6 text-sm"
          />
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '@/components/Library/BaseSection.vue';
import BaseButton from '@/components/Library/BaseButton.vue';

export default {
  name: 'PricingPlans',
  components: {
    BaseSection,
    BaseButton
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
  margin-bottom: 0.75rem;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    display: block;
    content: '';
    background-image: url('../../assets/svg/check.svg');
    background-size: 0.75rem 0.75rem;
    height: 0.75rem;
    width: 0.75rem;
    margin-right: 0.75rem;
    flex-shrink: 0;
  }
}
</style>
