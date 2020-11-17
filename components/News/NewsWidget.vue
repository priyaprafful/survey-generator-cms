<template>
  <nuxt-link
    :to="
      localePath({
        name: 'news-post',
        params: {
          post: post.uid,
        },
      })
    "
  >
    <div class="shadow-post rounded-lg">
      <prismic-image
        v-if="getFirstImage(post.data.content)"
        :field="getFirstImage(post.data.content)"
        class="w-full h-64 object-cover rounded-t-lg"
      />

      <div
        class="flex flex-col bg-white p-6"
        :class="{
          'rounded-lg': !getFirstImage(post.data.content),
          'rounded-b-lg': getFirstImage(post.data.content),
        }"
      >
        <h3 class="text-lg leading-relaxed font-medium font-body mb-1">
          {{ $prismic.asText(post.data.title) }}
        </h3>
        <time :datetime="post.data.date" class="text-sm text-blue-4 mb-4">
          {{
            new Date(post.data.date).toLocaleDateString($i18n.locale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          }}
        </time>
        <p class="text-sm leading-normal mb-6">
          {{ getFirstParagraph($prismic.asText(post.data.content)) }}
        </p>

        <div class="flex items-center text-blue-6 mt-auto">
          <span class="mr-3 font-medium">Läs hela</span>
          <svg-icon icon="chevron" />
        </div>
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
    getFirstImage(content) {
      const firstImage = content.find((section) => section.type === 'image');
      return firstImage;
    },
  },
};
</script>
