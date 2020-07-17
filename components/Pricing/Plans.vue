<template>
  <Container>
    <h2>Våra prisplaner</h2>

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
            {{ feature.small_check }}
          </td>
          <td v-if="!feature.small_check">
            <prismic-rich-text :field="feature.small_text" />
          </td>
          <td v-if="feature.medium_text.length < 1">
            {{ feature.medium_check }}
          </td>
          <td v-if="!feature.medium_check">
            <prismic-rich-text :field="feature.medium_text" />
          </td>
          <td v-if="feature.large_text.length < 1">
            {{ feature.large_check }}
          </td>
          <td v-if="!feature.large_check">
            <prismic-rich-text :field="feature.large_text" />
          </td>
        </tr>
      </tbody>
    </table>
  </Container>
</template>

<script>
export default {
  name: 'Plans',
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>
