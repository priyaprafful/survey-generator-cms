<template>
  <Container>
    <!-- <div class="flex flex-wrap">
      <article
        v-for="post in posts"
        :key="post.id"
        :post="post"
        class="flex flex-col w-1/2"
      >
        <BlogWidget :post="post" />
      </article>
    </div> -->
    <masonry :cols="2" :gutter="30">
      <article v-for="post in posts" :key="post.id" class="mb-6">
        <BlogWidget :post="post" />
      </article>
    </masonry>
  </Container>
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
