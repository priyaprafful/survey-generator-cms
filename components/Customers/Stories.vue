<template>
  <Wrapper>
    <Container>
      <div class="text-center leading-loose mb-16">
        <prismic-rich-text :field="data.stories_title" class="mb-6" />
        <prismic-rich-text
          :field="data.stories_description"
          class="w-2/3 m-auto"
        />
      </div>

      <div class="grid grid-cols-3 gap-10">
        <article v-for="post in posts" :key="post.id" :post="post" class="flex">
          <StoryWidget :post="post" />
        </article>
      </div>
    </Container>
  </Wrapper>
</template>

<script>
import StoryWidget from '@/components/Customers/StoryWidget.vue';

export default {
  components: {
    StoryWidget,
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
