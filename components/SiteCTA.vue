<template>
  <section class="bg-gradient-to-r from-lightblue-3 to-lightblue-6">
    <div class="max-w-screen-xl m-auto flex w-full py-24 px-12">
      <div class="w-1/2 mr-8">
        <div class="w-11/12">
          <h2 class="text-3xl mb-4">{{ $prismic.asText(content.title) }}</h2>
          <p class="mb-8 leading-relaxed">
            {{ $prismic.asText(content.content) }}
          </p>

          <div class="flex items-center">
            <BaseButton
              color="blue-dark"
              size="medium"
              :label="content.first_cta_label[0].text"
              :to="content.first_cta_link"
              class="mr-2"
            />
            <BaseButton
              color="transparent"
              size="medium"
              :label="content.second_cta_label[0].text"
              :to="content.second_cta_link"
            />
          </div>
        </div>
      </div>

      <div class="flex w-1/2 text-sm ml-8">
        <div class="mr-4">
          <BaseIcon class="mb-4" />
          <h3 class="mb-2 leading-normal">
            {{ $prismic.asText(content.third_cta_title) }}
          </h3>
          <p class="leading-relaxed mb-4">
            {{ $prismic.asText(content.third_cta_desc) }}
          </p>
          <BaseButton
            class="mt-auto"
            color="transparent"
            size="none"
            :label="content.third_cta_label[0].text"
            :to="content.third_cta_link"
          />
        </div>

        <div class="ml-4">
          <BaseIcon class="mb-4" />
          <h3 class="mb-2 leading-normal">
            {{ $prismic.asText(content.fourth_cta_title) }}
          </h3>
          <p class="leading-relaxed mb-4">
            {{ $prismic.asText(content.fourth_cta_desc) }}
          </p>
          <BaseButton
            class="mt-auto"
            color="transparent"
            size="none"
            :label="content.fourth_cta_label[0].text"
            :to="content.fourth_cta_link"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/Library/BaseButton.vue';
import BaseIcon from '@/components/Library/BaseIcon.vue';

export default {
  name: 'SiteCTA',
  components: {
    BaseButton,
    BaseIcon
  },
  props: {
    content: {
      type: Object,
      default: null
    }
  }
};
</script>

<style scoped>
.site-cta {
  background-image: url('../assets/svg/cta_bg.svg');
  background-size: cover;
  background-position: center;
}

@media screen and (-ms-high-contrast: active),
  screen and (-ms-high-contrast: none) {
  .site-cta {
    @apply bg-lightblue-5;
    background-image: none;
  }
}
</style>
