<template>
  <section class="bg-blue-darker text-white">
    <div class="flex flex-col max-w-screen-xl m-auto p-24 px-12">
      <h2 class="mb-12">{{ $prismic.asText(data.benefits_title) }}</h2>
      <div class="flex leading-relaxed">
        <Block half left class="flex flex-col items-start">
          <Placeholder class="w-12 mb-6" />
          <h3 class="mb-4">
            {{ $prismic.asText(data.benefits_content_title_left) }}
          </h3>
          <p class="mb-6">
            {{ $prismic.asText(data.benefits_content_left) }}
          </p>
          <FunnelBtn text="Verktyget →" navigate-to="verktyget" />
        </Block>

        <Block half right class="flex flex-col items-start">
          <Placeholder class="w-12 mb-6" />
          <h3 class="mb-4">
            {{ $prismic.asText(data.benefits_content_title_right) }}
          </h3>
          <p class="mb-6">
            {{ $prismic.asText(data.benefits_content_right) }}
          </p>
          <FunnelBtn text="Priser →" navigate-to="priser" />
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
