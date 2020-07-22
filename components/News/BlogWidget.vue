<template>
  <div class="flex flex-col">
    <time
      :datetime="post.data.date"
      class="text-sm leading-5 text-blue-4 py-2 px-6"
    >
      {{
        new Date(post.data.date).toLocaleDateString($i18n.locale, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      }}
    </time>

    <!-- <prismic-image
      :field="getFirstImage(post.data.content)"
      class="w-full h-48 object-cover rounded-t"
    /> -->

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
      <!-- <prismic-image
        :field="post.data.company_image"
        class="w-full h-48 object-cover rounded-t"
      /> -->
      <div class="bg-white p-6 rounded shadow-post">
        <h3 class="text-lg leading-relaxed font-medium font-body mb-2">
          {{ $prismic.asText(post.data.title) }}
        </h3>
        <p class="text-sm leading-normal mb-6">
          {{ getFirstParagraph($prismic.asText(post.data.content)) }}
        </p>

        <div class="flex items-center text-blue-6 mt-auto">
          <span class="font-medium">Läs hela</span>
          <ChevronRight class="ml-3 h-3 w-3" />
        </div>
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
    getFirstImage(content) {
      const firstImage = content.find((section) => section.type === 'image');
      return firstImage;
    },
  },
};
</script>
