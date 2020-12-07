<template>
  <div
    class="max-w-screen-xl m-auto py-24 px-12 bg-gradient-to-b from-bluegray-1 to-white"
  >
    <article class="max-w-screen-sm m-auto flex flex-col article">
      <time :datetime="slice.primary.last_updated" class="text-sm mb-6">
        Senast uppdaterad:

        {{
          new Date(slice.primary.last_updated).toLocaleDateString('sv-SE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        }}
      </time>

      <div
        v-for="(section, index) in slice.items"
        :key="index"
        class="mb-6 leading-loose"
      >
        <h2 class="text-2xl my-2">
          {{ $prismic.asText(section.title) }}
        </h2>
        <prismic-rich-text
          :field="section.content"
          class="policy-content rich-text"
        />
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'PageDocument',
  props: {
    slice: {
      type: [Array, Object],
      default: null
    }
  }
};
</script>
