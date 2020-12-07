<template>
  <BaseSection blue>
    <div class="m-auto text-center w-full">
      <h1 class="page-header__title mb-8">
        {{ $prismic.asText(slice.primary.page_title) }}
      </h1>
      <p class="w-2/3 m-auto">
        {{ slice.primary.page_description[0].text }}
      </p>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '@/components/Library/BaseSection.vue';

export default {
  name: 'PageHeader',
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

<style scoped>
.page-header__title {
  display: inline-block;
  background-image: linear-gradient(120deg, #27526e, #27526e);
  background-repeat: no-repeat;
  background-size: 100% 0.4em;
  background-position: 0 88%;
}
</style>
