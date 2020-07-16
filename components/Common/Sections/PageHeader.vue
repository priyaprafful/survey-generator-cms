<template>
  <section class="bg-blue-darker text-white text-center">
    <Container>
      <h1 class="mb-8">
        {{ heading }}
      </h1>
      <p class="w-1/2 m-auto">
        {{ subheading }}
      </p>
    </Container>
  </section>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    heading: {
      type: String,
      default: null,
    },
    subheading: {
      type: String,
      default: null,
    },
  },
};
</script>
