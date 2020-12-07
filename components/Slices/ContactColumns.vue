<template>
  <BaseSection gradient border :class="columns">
    <div :class="block(0)">
      <BaseIcon class="mb-6" />

      <div class="mb-6">
        <a
          class="text-lg font-bold hover:underline mb-1"
          :href="`tel:${slice.primary.phone_number}`"
        >
          {{ slice.primary.phone_number }}
        </a>
        <p class="text-sm text-blue-4">
          {{ slice.primary.opening_hours }}
        </p>
      </div>

      <div class="inline-flex flex-col mb-6">
        <div class="inline-flex items-center mb-1">
          <MailIcon class="fill-current text-blue-3 h-4 w-4 mr-4" />
          <a
            :href="`mailto: ${slice.primary.info_mail}`"
            class="hover:underline"
          >
            {{ slice.primary.info_mail }}
          </a>
        </div>
        <div class="inline-flex items-center">
          <HelpIcon class="fill-current text-blue-3 h-4 w-4 mr-4" />
          <a
            :href="`mailto: ${slice.primary.support_mail}`"
            class="hover:underline"
          >
            {{ slice.primary.support_mail }}
          </a>
        </div>
      </div>

      <div>
        <BaseButton
          size="small"
          :label="slice.primary.cta_label[0].text"
          :to="slice.primary.cta_link"
        />
      </div>
    </div>

    <div :class="block(1)">
      <BaseIcon class="mb-6" />

      <div>
        <prismic-rich-text
          :field="slice.primary.address"
          class="text-blue-4 mb-6"
        />
        <p>{{ $prismic.asText(slice.primary.address_description) }}</p>
      </div>
    </div>
  </BaseSection>
</template>

<script>
import BaseIcon from '@/components/Library/BaseIcon.vue';
import BaseSection from '@/components/Library/BaseSection.vue';
import BaseButton from '@/components/Library/BaseButton.vue';
import MailIcon from '~/assets/svg/mail.svg?inline';
import HelpIcon from '~/assets/svg/help.svg?inline';

export default {
  name: 'ContactColumns',
  components: {
    BaseSection,
    BaseIcon,
    BaseButton,
    MailIcon,
    HelpIcon
  },
  props: {
    slice: {
      type: [Array, Object],
      default: null
    }
  },
  computed: {
    columns() {
      return {
        'flex leading-relaxed w-full': true
      };
    }
  },
  methods: {
    block(index) {
      return {
        'w-1/2': true,
        'mr-8': index === 0,
        'ml-8': index > 0
      };
    }
  }
};
</script>
