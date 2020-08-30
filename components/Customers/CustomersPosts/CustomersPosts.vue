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
          <CustomersWidget :post="post" />
        </article>
      </div>
    </Container>
  </Wrapper>
</template>

<script>
import CustomersWidget from '@/components/Customers/CustomersPosts/CustomersWidget.vue';

export default {
  components: {
    CustomersWidget,
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
