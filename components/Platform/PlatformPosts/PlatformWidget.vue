<template>
  <nuxt-link
    :to="
      localePath({
        name: 'platform-post',
        params: {
          post: post.uid,
        },
      })
    "
    class="flex flex-col bg-white rounded-lg shadow-post"
  >
    <div class="flex flex-col flex-1 p-6">
      <prismic-rich-text :field="post.data.title" class="mb-6" />
      <prismic-rich-text
        :field="post.data.description"
        class="text-sm leading-6 mb-4 rich-text"
      />

      <div class="flex items-center text-blue-6 mt-auto">
        <span class="mr-3 font-medium">
          {{ $prismic.asText(post.data.button_text) }}
        </span>
        <svg-icon icon="chevron" />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
};
</script>
