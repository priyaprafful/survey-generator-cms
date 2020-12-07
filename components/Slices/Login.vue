<template>
  <BaseSection>
    <div class="w-1/3 mr-8">
      <prismic-image :field="slice.primary.logo" class="h-12 mx-auto mb-6" />
      <prismic-rich-text :field="slice.primary.title" class="mb-6" />

      <form>
        <div class="mb-6">
          <label class="block text-sm font-medium mb-1">
            {{ slice.primary.email_title }}
          </label>
          <input
            type="email"
            :aria-label="slice.primary.email_title"
            class="block text-sm appearance-none w-full p-3 border border-bluegray-5 rounded"
          />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium mb-1">
            {{ slice.primary.password_title }}
          </label>
          <input
            type="password"
            :aria-label="slice.primary.password_title"
            class="block text-sm appearance-none w-full p-3 border border-bluegray-5 rounded"
          />
        </div>

        <div class="flex items-center justify-between text-sm mb-6">
          <div class="flex items-center">
            <input
              id="remember"
              type="checkbox"
              class="form-checkbox h-4 w-4 text-blue-2 border border-bluegray-5 transition duration-150 ease-in-out"
            />
            <label for="remember" class="ml-2 block">
              {{ slice.primary.remember }}
            </label>
          </div>

          <a href="#" class="font-medium text-blue-4">
            {{ slice.primary.forgot }}
          </a>
        </div>

        <BaseButton :label="slice.primary.btn_label" class="w-full" />
      </form>
    </div>

    <div class="w-2/3 ml-8 bg-blue-9"></div>
  </BaseSection>
</template>

<script>
import BaseSection from '@/components/Library/BaseSection.vue';
import BaseButton from '@/components/Library/BaseButton.vue';

export default {
  name: 'Login',
  components: {
    BaseSection,
    BaseButton
  },
  props: {
    slice: {
      type: [Array, Object],
      default: null
    }
  }
};
</script>
