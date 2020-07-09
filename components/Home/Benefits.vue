<template>
  <section class="bg-blue-dark text-white">
    <div class="flex flex-col max-w-screen-xl m-auto p-32 px-12">
      <h2 class="mb-12">{{ $prismic.asText(data.benefits_title) }}</h2>
      <div class="flex leading-relaxed">
        <Block half left>
          <p>
            {{ $prismic.asText(data.benefits_content_left) }}
          </p>
        </Block>

        <Block half right>
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
