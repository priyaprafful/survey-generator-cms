<template>
  <div class="flex flex-col">
    <nuxt-link
      :to="
        localePath({
          name: 'kunder-customer_story',
          params: {
            post: post.uid,
          },
        })
      "
    >
      <div class="bg-white p-6 rounded shadow-post">
        <h3 class="text-xl leading-7 font-medium font-body mb-2">
          {{ $prismic.asText(post.data.company_name) }}
        </h3>
        <p class="leading-6">
          {{ getFirstParagraph($prismic.asText(post.data.intro)) }}
        </p>
      </div>
    </nuxt-link>
  </div>
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
      const textLimit = 100;
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
