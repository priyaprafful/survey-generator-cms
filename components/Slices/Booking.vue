<template>
  <BaseSection>
    <div class="mr-8 w-1/2">
      <h2 class="mb-6">{{ $prismic.asText(slice.primary.title) }}</h2>
      <prismic-rich-text
        :field="slice.primary.content"
        class="mb-8 rich-text booking"
      />
    </div>

    <div class="ml-8 w-1/2">
      <form
        class="bg-gradient-to-r from-lightblue-3 to-lightblue-5 p-10 rounded"
      >
        <prismic-rich-text
          :field="slice.primary.form_title"
          class="text-xl mb-6"
        />

        <div
          v-for="(item, index) in slice.items"
          :key="index"
          class="flex flex-col mb-6"
        >
          <label class="block text-sm font-medium mb-1">
            {{ item.label[0].text }}
          </label>
          <component
            :is="input(item.type)"
            :type="item.type !== 'textarea' ? item.type : null"
            :aria-label="item.label[0].text"
            class="block text-sm appearance-none w-full p-3 border border-bluegray-5 rounded"
          />
          <!-- required -->
        </div>

        <BaseButton
          :label="slice.primary.form_button_label[0].text"
          class="w-full"
          :chevron="false"
        />
      </form>
    </div>
  </BaseSection>
</template>

<script>
import BaseSection from '@/components/Library/BaseSection.vue';
import BaseButton from '@/components/Library/BaseButton.vue';

export default {
  name: 'Booking',
  components: {
    BaseSection,
    BaseButton
  },
  props: {
    slice: {
      type: [Array, Object],
      default: null
    }
  },
  methods: {
    input(type) {
      if (type === 'text') {
        return 'input';
      }
      if (type === 'email') {
        return 'input';
      }
      if (type === 'tel') {
        return 'input';
      }
      if (type === 'textarea') {
        return 'textarea';
      }
    }
  }
};
</script>

<style>
.booking h3 {
  margin-bottom: 1rem;
}

.booking li {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.booking li:before {
  content: '';
  display: inline-block;
  height: 1.25rem;
  width: 1.25rem;
  background-image: url('../../assets/svg/plus.svg');
  background-size: contain;
  background-repeat: no-repeat;
  padding-left: 2rem;
}
</style>
