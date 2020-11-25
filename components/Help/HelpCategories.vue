<template>
  <SGBackground border>
    <SGSection>
      <h2 class="mb-8">Kategorier</h2>

      <div class="grid grid-cols-4">
        <div v-for="(category, i) in categories" :key="i">
          <img src="@/assets/svgs/articles.svg" class="h-10 mb-4" />
          <h3 class="mb-2">{{ category.title }}</h3>

          <div v-for="(post, idx) in findCategory(category.title)" :key="idx">
            <nuxt-link
              :to="
                localePath({
                  name: 'help-kategori-postCategory',
                  params: { postCategory: post.uid },
                })
              "
            >
              {{ $prismic.asText(post.data.title) }}
            </nuxt-link>
          </div>
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
    categories: {
      type: Array,
      default: null,
    },
  },
  methods: {
    findCategory(category) {
      return this.posts.filter((post) => {
        return post.data.category === category;
      });
    },
  },
};
</script>
