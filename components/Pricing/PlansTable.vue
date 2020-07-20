<template>
  <Wrapper>
    <Container>
      <table class="table w-full">
        <thead>
          <tr>
            <th class="visuallyhidden">Features</th>
            <th v-for="(card, index) in data.cards.slice(0, 3)" :key="index">
              <prismic-rich-text :field="card.plan" />
            </th>
          </tr>
        </thead>

        <tbody v-for="(feature, index) in data.features" :key="index">
          <tr
            v-if="feature.group_title.length > 0"
            class="bg-blue-5 text-white"
          >
            <th class="p-4 text-left font-normal text-sm">
              <prismic-rich-text :field="feature.group_title" />
            </th>
            <td v-for="(card, i) in data.cards.slice(0, 3)" :key="i">
              <prismic-rich-text :field="card.plan" />
            </td>
          </tr>

          <tr>
            <th class="p-4 text-left font-normal text-sm">
              <prismic-rich-text :field="feature.title" />
            </th>
            <td v-if="feature.small_text.length < 1" class="p-4">
              <CheckMarkRound
                v-if="feature.small_check"
                class="w-4 h-4 text-green-400"
              />
              <CloseCircleIcon v-else class="w-4 h-4 text-red-400" />
            </td>
            <td v-if="feature.small_text.length > 0" class="p-4">
              <prismic-rich-text :field="feature.small_text" />
            </td>

            <td v-if="feature.medium_text.length < 1" class="p-4">
              <CheckMarkRound
                v-if="feature.medium_check"
                class="w-4 h-4 text-green-400"
              />
              <CloseCircleIcon v-else class="w-4 h-4 text-red-400" />
            </td>
            <td v-if="feature.medium_text.length > 0" class="p-4">
              <prismic-rich-text :field="feature.medium_text" />
            </td>

            <td v-if="feature.large_text.length < 1" class="p-4">
              <CheckMarkRound
                v-if="feature.large_check"
                class="w-4 h-4 text-green-400"
              />
              <CloseCircleIcon v-else class="w-4 h-4 text-red-400" />
            </td>
            <td v-if="feature.large_text.length > 0" class="p-4">
              <prismic-rich-text :field="feature.large_text" />
            </td>
          </tr>
        </tbody>
      </table>
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

<style>
table td {
  text-align: center;
}

table td svg {
  margin: auto;
}
</style>
