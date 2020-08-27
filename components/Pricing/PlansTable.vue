<template>
  <div class="bg-white border-b border-bluegray-2">
    <Container>
      <table class="table w-full text-sm">
        <thead>
          <tr>
            <th class="visuallyhidden">Features</th>
            <th
              v-for="(card, index) in data.cards.slice(0, 3)"
              :key="index"
              class="text-lg font-medium p-6"
            >
              <h3>{{ $prismic.asText(card.plan) }}</h3>
            </th>
          </tr>
        </thead>

        <tbody
          v-for="(feature, index) in data.features"
          :key="index"
          class="even:bg-bluegray-1 odd:bg-white"
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

          <tr class="hover:bg-lightblue-1 transition duration-150 ease-in-out">
            <th class="p-4 text-left font-normal">
              <prismic-rich-text :field="feature.title" />
            </th>
            <td v-if="feature.small_text.length < 1" class="p-4">
              <img
                v-if="feature.small_check"
                src="@/assets/svgs/checkcircle.svg"
                alt=""
                class="w-4 h-4 m-auto"
              />
              <svg-icon v-else icon="minus" lg class="text-bluegray-6" />
            </td>
            <td v-if="feature.small_text.length > 0" class="p-4">
              <prismic-rich-text :field="feature.small_text" />
            </td>

            <td v-if="feature.medium_text.length < 1" class="p-4">
              <img
                v-if="feature.medium_check"
                src="@/assets/svgs/checkcircle.svg"
                alt=""
                class="w-4 h-4 m-auto"
              />
              <svg-icon v-else icon="minus" lg class="text-bluegray-6" />
            </td>
            <td v-if="feature.medium_text.length > 0" class="p-4">
              <prismic-rich-text :field="feature.medium_text" />
            </td>

            <td v-if="feature.large_text.length < 1" class="p-4">
              <img
                v-if="feature.large_check"
                src="@/assets/svgs/checkcircle.svg"
                alt=""
                class="w-4 h-4 m-auto"
              />
              <svg-icon v-else icon="minus" lg class="text-bluegray-6" />
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
export default {
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
