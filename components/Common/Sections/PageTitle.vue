<template>
  <section class="bg-blue-darker text-white text-center">
    <div class="flex flex-col max-w-screen-xl m-auto p-24 px-12">
      <h1 class="mb-8">
        {{ title }}
      </h1>
      <p>
        {{ description }}
      </p>
    </div>
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
