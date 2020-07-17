<template>
  <Container>
    <prismic-rich-text :field="data.pricing_plans_title" />

    <table>
      <thead>
        <tr>
          <th>Features</th>
          <th v-for="(plan, index) in data.plans" :key="index">
            <prismic-rich-text :field="plan.name" />
          </th>
        </tr>
        <tr>
          <td>
            -
          </td>
          <td v-for="(plan, index) in data.plans" :key="index">
            <prismic-rich-text :field="plan.description" />
          </td>
        </tr>
      </thead>
      <tbody v-for="(feature, index) in data.features" :key="index">
        <tr v-if="feature.group_title.length > 0" class="bg-blue-5">
          <th><prismic-rich-text :field="feature.group_title" /></th>
          <td v-for="(plan, i) in data.plans" :key="i">
            <prismic-rich-text :field="plan.name" />
          </td>
        </tr>

        <tr>
          <th><prismic-rich-text :field="feature.title" /></th>
          <td v-if="feature.small_text.length < 1">
            <span v-if="feature.small_check">L</span>
            <span v-else>X</span>
          </td>
          <td v-if="feature.small_text.length > 0">
            <prismic-rich-text :field="feature.small_text" />
          </td>
          <td v-if="feature.medium_text.length < 1">
            <span v-if="feature.medium_check">L</span>
            <span v-else>X</span>
          </td>
          <td v-if="feature.medium_text.length > 0">
            <prismic-rich-text :field="feature.medium_text" />
          </td>
          <td v-if="feature.large_text.length < 1">
            <span v-if="feature.large_check">L</span>
            <span v-else>X</span>
          </td>
          <td v-if="feature.large_text.length > 0">
            <prismic-rich-text :field="feature.large_text" />
          </td>
        </tr>
      </tbody>
    </table>
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
