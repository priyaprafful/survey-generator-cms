<template>
  <div>
    <time
      :datetime="post.data.date"
      class="text-sm leading-5 text-blue-light py-2 px-6"
    >
      {{
        new Date(post.data.date).toLocaleDateString($i18n.locale, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }}
    </time>
    <nuxt-link
      :to="
        localePath({
          name: 'nyheter-post',
          params: {
            post: post.uid,
          },
        })
      "
    >
      <div class="bg-white p-6 rounded shadow-post">
        <h3 class="text-xl leading-7 font-medium font-body mb-2">
          {{ $prismic.asText(post.data.title) }}
        </h3>
        <p class="leading-6">
          {{ getFirstParagraph($prismic.asText(post.data.content)) }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'BlogWidget',
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
