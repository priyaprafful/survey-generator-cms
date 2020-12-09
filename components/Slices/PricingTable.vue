<template>
  <BaseSection white border>
    <table class="table w-full text-sm">
      <thead>
        <tr>
          <th class="visuallyhidden">{{ slice.primary.title }}</th>
          <th
            v-for="(plan, index) in slice.primary.plans"
            :key="index"
            class="font-medium p-6"
          >
            <h3>{{ plan.text }}</h3>
          </th>
        </tr>
      </thead>

      <tbody
        v-for="(feature, index) in slice.items"
        :key="index"
        class="even:bg-bluegray-1 odd:bg-white text-center"
      >
        <tr v-if="feature.group_title[0]" class="bg-blue-9 text-white">
          <th class="p-4 text-left font-medium">
            <prismic-rich-text :field="feature.group_title" />
          </th>
          <td v-for="(plan, i) in slice.primary.plans" :key="i">
            <p>{{ plan.text }}</p>
          </td>
        </tr>

        <tr class="hover:bg-lightblue-1 transition duration-150 ease-in-out">
          <th class="p-4 text-left font-normal">
            <prismic-rich-text :field="feature.row_title" />
          </th>

          <td class="p-4">
            <img
              v-if="feature.first"
              src="@/assets/svg/checkcircle.svg"
              alt=""
              class="w-4 h-4 m-auto"
            />
            <img
              v-if="!feature.first && !feature.first_text"
              src="@/assets/svg/minus.svg"
              alt=""
              class="w-4 h-4 m-auto"
            />
            {{ feature.first_text }}
          </td>

          <td class="p-4">
            <img
              v-if="feature.second"
              src="@/assets/svg/checkcircle.svg"
              alt=""
              class="w-4 h-4 m-auto"
            />
            <img
              v-if="!feature.second && !feature.second_text"
              src="@/assets/svg/minus.svg"
              alt=""
              class="w-4 h-4 m-auto"
            />
            {{ feature.second_text }}
          </td>

          <td class="p-4">
            <img
              v-if="feature.third"
              src="@/assets/svg/checkcircle.svg"
              alt=""
              class="w-4 h-4 m-auto"
            />
            <img
              v-if="!feature.third && !feature.third_text"
              src="@/assets/svg/minus.svg"
              alt=""
              class="w-4 h-4 m-auto"
            />
            {{ feature.third_text }}
          </td>
        </tr>
      </tbody>
    </table>
  </BaseSection>
</template>

<script>
import BaseSection from '@/components/Library/BaseSection.vue';

export default {
  name: 'PricingTable',
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
