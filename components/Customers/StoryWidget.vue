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
    class="flex flex-col flex-1 bg-white p-6 rounded shadow-post"
  >
    <div class="relative mb-6">
      <prismic-image :field="post.data.company_image" class="w-full h-48" />

      <div
        class="absolute bottom-0 right-0 mr-2 mb-2 bg-white inline-flex h-20 w-20 p-3 shadow-post rounded"
      >
        <prismic-image :field="post.data.company_logo" class="w-full" />
      </div>
    </div>

    <!-- <prismic-rich-text
          :field="post.data.company_name"
          class="text-xl leading-7 font-medium font-body mb-2"
        /> -->
    <p class="text-sm leading-6 mb-4">
      {{ getFirstParagraph($prismic.asText(post.data.intro)) }}
    </p>

    <div class="flex items-center text-blue-6 mt-auto">
      <span class="font-medium">Läs hela artikeln</span>
      <ChevronRight class="ml-3 h-3 w-3" />
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
      const textLimit = 120;
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
