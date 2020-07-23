<template>
  <Wrapper>
    <Container>
      <masonry :cols="2" :gutter="30">
        <article v-for="post in posts.slice(0, 10)" :key="post.id" class="mb-6">
          <BlogWidget :post="post" />
        </article>
      </masonry>
    </Container>
  </Wrapper>
</template>

<script>
import BlogWidget from '@/components/News/BlogWidget.vue';

export default {
  components: {
    BlogWidget,
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
