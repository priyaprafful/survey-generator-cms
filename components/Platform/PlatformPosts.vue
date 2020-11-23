<template>
  <Wrapper>
    <Container>
      <div class="text-center leading-loose mb-16">
        <h2>Tillval i vårt enkätverktyg</h2>
      </div>

      <div class="grid grid-cols-3 gap-10">
        <article v-for="post in posts" :key="post.id" :post="post" class="flex">
          <nuxt-link
            :to="
              localePath({
                name: 'platform-post',
                params: {
                  post: post.uid,
                },
              })
            "
            class="platform-widget group flex flex-col bg-white rounded-lg shadow-post"
          >
            <div class="flex flex-col flex-1 p-6">
              <prismic-rich-text :field="post.data.title" class="mb-3" />
              <prismic-rich-text
                :field="post.data.description"
                class="group-hover:underline text-sm text-blue-5 leading-6 mb-4 rich-text"
              />

              <div class="flex items-center text-blue-6 mt-auto">
                <span class="font-medium">
                  {{ $prismic.asText(post.data.button_text) }}
                </span>
                <svg-icon
                  icon="chevron"
                  sm
                  class="platform-widget__hover-arrow ml-3"
                />
              </div>
            </div>
          </nuxt-link>
        </article>
      </div>
    </Container>
  </Wrapper>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null,
    },
    posts: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style scoped lang="scss">
.platform-widget {
  .platform-widget__hover-arrow {
    position: relative;
    top: 1px;
    transform: translateX(0);
    transition: all 150ms;
  }

  &:hover {
    .platform-widget__hover-arrow {
      transform: translateX(3px);
      backface-visibility: hidden;
      perspective: 1000px;
    }
  }
}
</style>
