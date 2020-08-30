<template>
  <Wrapper>
    <Container>
      <div class="text-center leading-loose mb-16">
        <h2>Tillval i vårt enkätverktyg</h2>
      </div>

      <div class="grid grid-cols-3 gap-10">
        <article v-for="post in posts" :key="post.id" :post="post" class="flex">
          <PlatformWidget :post="post" />
        </article>
      </div>
    </Container>
  </Wrapper>
</template>

<script>
import PlatformWidget from '@/components/Platform/PlatformPosts/PlatformWidget.vue';

export default {
  components: {
    PlatformWidget,
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
