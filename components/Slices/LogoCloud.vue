<template>
  <div class="max-w-screen-xl m-auto pb-12 px-12">
    <div class="grid grid-cols-logos gap-12 justify-between">
      <prismic-image
        v-for="(img, i) in slice.items"
        :key="img + i"
        :field="img.logo"
        class="h-12"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoDisplay',
  props: {
    slice: {
      type: [Array, Object],
      default: null
    }
  }
};
</script>
