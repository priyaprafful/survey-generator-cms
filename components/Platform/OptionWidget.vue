<template>
  <nuxt-link
    :to="
      localePath({
        name: 'verktyget-option',
        params: {
          post: post.uid,
        },
      })
    "
    class="flex flex-col bg-white rounded-lg shadow-post"
  >
    <prismic-rich-text :field="post.data.title" />
    <prismic-rich-text :field="post.data.description" />
    <prismic-rich-text :field="post.data.button_text" />
  </nuxt-link>
</template>

<script>
export default {
  name: 'OptionWidget',
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
};
</script>
