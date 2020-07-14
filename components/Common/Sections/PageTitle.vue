<template>
  <section class="bg-blue-darker text-white text-center">
    <Container class="py-24">
      <h1 class="mb-8">
        {{ title }}
      </h1>
      <p>
        {{ description }}
      </p>
    </Container>
  </section>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
};
</script>
