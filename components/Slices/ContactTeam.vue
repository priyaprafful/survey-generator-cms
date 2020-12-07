<template>
  <BaseSection gradient border flex-col>
    <prismic-rich-text :field="slice.primary.title" class="mb-16 text-center" />

    <div class="grid grid-cols-team gap-20 justify-between">
      <div v-for="(item, i) in slice.items" :key="i">
        <div class="flex relative mb-4">
          <div class="lines" />
          <prismic-image
            :field="item.image"
            class="w-full h-48 object-cover rounded-full z-10"
          />
        </div>

        <prismic-rich-text
          :field="item.name"
          class="text-lg font-medium mb-2"
        />

        <div class="text-sm">
          <prismic-rich-text :field="item.role" class="mb-2" />
          <prismic-rich-text :field="item.email" class="text-blue-4 mb-1" />
          <prismic-rich-text :field="item.phone" class="text-blue-4" />
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '@/components/Library/BaseSection.vue';

export default {
  name: 'ContactTeam',
  components: {
    BaseSection
  },
  props: {
    slice: {
      type: [Array, Object],
      default: null
    }
  }
};
</script>

<style scoped>
.lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: repeating-linear-gradient(
    45deg,
    #cce7f4 0,
    #cce7f4 1px,
    transparent 0,
    transparent 50%
  );
  background-size: 50px 50px;
}
</style>
