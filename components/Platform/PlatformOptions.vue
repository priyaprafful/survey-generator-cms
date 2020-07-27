<template>
  <Container>
    <div class="text-center leading-loose mb-16">
      <h2>Tillval i vårt enkätverktyg</h2>
    </div>

    <div class="grid grid-cols-3 gap-10">
      <article v-for="post in posts" :key="post.id" :post="post" class="flex">
        <OptionWidget :post="post" />
      </article>
    </div>
  </Container>
</template>

<script>
import OptionWidget from '@/components/Platform/OptionWidget.vue';

export default {
  components: {
    OptionWidget,
  },
  props: {
    data: {
      type: Object,
      default: null,
    },
    posts: {
      type: Array,
      default: null,
    },
  },
};
</script>
