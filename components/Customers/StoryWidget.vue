<template>
  <nuxt-link
    :to="
      localePath({
        name: 'kunder-customer_story',
        params: {
          post: post.uid,
        },
      })
    "
    class="flex flex-col bg-white rounded-lg shadow-post"
  >
    <div class="relative">
      <prismic-image
        :field="post.data.company_image"
        class="w-full h-48 object-cover rounded-t"
      />

      <div
        class="absolute bottom-0 right-0 mr-2 mb-2 bg-white inline-flex h-20 w-20 p-3 shadow-card rounded"
      >
        <prismic-image :field="post.data.company_logo" class="w-full" />
      </div>
    </div>

    <div class="flex flex-col p-6 flex-1">
      <p class="text-sm leading-6 mb-4">
        {{ getFirstParagraph($prismic.asText(post.data.intro)) }}
      </p>

      <div class="flex items-center text-blue-6 mt-auto">
        <span class="mr-3 font-medium">Läs artikeln</span>
        <svg-icon icon="chevron" />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'StoryWidget',
  props: {
    post: {
      type: Object,
      default: null,
    },
  },
  methods: {
    getFirstParagraph(content) {
      const textLimit = 110;
      const firstParagraph = content;
      const limitedText = firstParagraph.substr(0, textLimit);

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...';
      } else {
        return firstParagraph;
      }
    },
  },
};
</script>
