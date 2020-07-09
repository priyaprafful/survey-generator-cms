<template>
  <section class="bg-blue-dark text-white">
    <div class="flex flex-col max-w-screen-xl m-auto p-32 px-12">
      <h2 class="mb-12">{{ $prismic.asText(data.benefits_title) }}</h2>
      <div class="flex leading-relaxed">
        <Block half left>
          <Placeholder class="w-12 mb-4" />
          <h3 class="mb-4">
            {{ $prismic.asText(data.benefits_content_title_left) }}
          </h3>
          <p>
            {{ $prismic.asText(data.benefits_content_left) }}
          </p>
        </Block>

        <Block half right>
          <Placeholder class="w-12 mb-4" />
          <h3 class="mb-4">
            {{ $prismic.asText(data.benefits_content_title_right) }}
          </h3>
          <p>
            {{ $prismic.asText(data.benefits_content_right) }}
          </p>
        </Block>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Benefits',
  props: {
    data: {
      type: Object,
      default: null,
    },
  },
};
</script>
