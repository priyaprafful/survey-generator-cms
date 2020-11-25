<template>
  <SGBackground border>
    <SGSection>
      <h2 class="mb-8">Populära artiklar</h2>

      <div class="grid grid-cols-3 gap-10">
        <div v-for="(post, i) in posts" :key="i">
          <nuxt-link
            :to="
              localePath({
                name: 'help-articles-post',
                params: {
                  post: post.uid,
                },
              })
            "
          >
            <div>
              <h3 class="text-lg leading-relaxed font-medium font-body mb-1">
                {{ $prismic.asText(post.data.title) }}
              </h3>
              <p class="text-sm leading-normal mb-6">
                {{ getFirstParagraph($prismic.asText(post.data.content)) }}
              </p>

              <div class="flex items-center text-blue-6 mt-auto">
                <span class="mr-3 font-medium">Läs artikel</span>
                <svg-icon icon="chevron" />
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </SGSection>
  </SGBackground>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
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
