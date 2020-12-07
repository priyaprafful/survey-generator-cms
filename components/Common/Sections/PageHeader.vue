<template>
  <section class="bg-blue-9 text-white text-center">
    <Container>
      <h1 class="mb-8 dsds">
        {{ heading }}
      </h1>
      <p class="w-2/3 m-auto">
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

<style scoped>
.dsds {
  display: inline-block;
  background-image: linear-gradient(120deg, #27526e, #27526e);
  background-repeat: no-repeat;
  background-size: 100% 0.4em;
  background-position: 0 88%;
  display: inline-block;
}
</style>
