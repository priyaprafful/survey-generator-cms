<template>
  <Wrapper>
    <Container>
      <masonry :cols="3" :gutter="30">
        <article v-for="post in posts.slice(0, 10)" :key="post.id" class="mb-6">
          <NewsWidget :post="post" />
        </article>
      </masonry>
    </Container>
  </Wrapper>
</template>

<script>
import NewsWidget from '@/components/News/NewsWidget.vue';

export default {
  components: {
    NewsWidget,
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
