<template>
  <section class="bg-blue-darker text-white">
    <Container class="py-24">
      <h2 class="mb-12">{{ $prismic.asText(data.benefits_title) }}</h2>
      <div class="flex leading-relaxed">
        <Block half class="flex flex-col items-start">
          <Placeholder class="w-12 mb-6" />
          <h3 class="mb-4">
            {{ $prismic.asText(data.benefits_content_title_left) }}
          </h3>
          <p class="mb-6">
            {{ $prismic.asText(data.benefits_content_left) }}
          </p>
          <FunnelBtn text="Verktyget →" navigate-to="verktyget" />
        </Block>

        <Block half class="flex flex-col items-start">
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
    </Container>
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
