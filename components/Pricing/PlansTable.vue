<template>
  <div class="bg-white border-b border-bluegray-2">
    <Container>
      <prismic-rich-text :field="data.title" class="text-center mb-16" />

      <table class="table w-full text-sm">
        <thead class="bg-lightblue-4">
          <tr>
            <th class="visuallyhidden">Features</th>
            <th
              v-for="(card, index) in data.cards.slice(0, 3)"
              :key="index"
              class="text-lg font-medium p-6"
            >
              <prismic-rich-text :field="card.plan" />
            </th>
          </tr>
        </thead>

        <tbody
          v-for="(feature, index) in data.features"
          :key="index"
          class="even:bg-lightblue-1 odd:bg-bluegray-1"
        >
          <tr
            v-if="feature.group_title.length > 0"
            class="bg-blue-9 text-white"
          >
            <th class="p-4 text-left font-medium">
              <prismic-rich-text :field="feature.group_title" />
            </th>
            <td v-for="(card, i) in data.cards.slice(0, 3)" :key="i">
              <prismic-rich-text :field="card.plan" />
            </td>
          </tr>

          <tr class="hover:bg-white transition duration-150 ease-in-out">
            <th class="p-4 text-left font-normal">
              <prismic-rich-text :field="feature.title" />
            </th>
            <td v-if="feature.small_text.length < 1" class="p-4">
              <CheckCircleIcon v-if="feature.small_check" />
              <MinusIcon v-else class="w-4 h-4" />
            </td>
            <td v-if="feature.small_text.length > 0" class="p-4">
              <prismic-rich-text :field="feature.small_text" />
            </td>

            <td v-if="feature.medium_text.length < 1" class="p-4">
              <CheckCircleIcon v-if="feature.medium_check" />
              <MinusIcon v-else class="w-4 h-4" />
            </td>
            <td v-if="feature.medium_text.length > 0" class="p-4">
              <prismic-rich-text :field="feature.medium_text" />
            </td>

            <td v-if="feature.large_text.length < 1" class="p-4">
              <CheckCircleIcon v-if="feature.large_check" />
              <MinusIcon v-else class="w-4 h-4" />
            </td>
            <td v-if="feature.large_text.length > 0" class="p-4">
              <prismic-rich-text :field="feature.large_text" />
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  </div>
</template>

<script>
import MinusIcon from './SVG/MinusIcon.vue';
import CheckCircleIcon from './SVG/CheckCircleIcon.vue';

export default {
  components: {
    MinusIcon,
    CheckCircleIcon,
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>
table td {
  text-align: center;
}

table td svg {
  margin: auto;
}
</style>
