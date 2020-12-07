<template>
  <div
    v-if="isOpen"
    class="fixed flex items-center bottom-0 right-0 mr-6 mb-6 bg-white shadow-card p-4 rounded-lg w-3/12 z-20"
  >
    <button
      tabindex="1"
      :aria-label="content.close_button_label"
      class="w-8 h-8 flex-shrink-0 p-2 bg-bluegray-9 hover:bg-bluegray-8 mr-4 rounded-full text-white transition duration-150 ease-in-out"
      @click="accept"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12.01 12.01"
        class="fill-current"
      >
        <path
          d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.41h0a1,1,0,0,0,1.41,0h0L12,13.41l4.29,4.3a1,1,0,0,0,1.41,0h0a1,1,0,0,0,0-1.41h0Z"
          transform="translate(-5.99 -6)"
        />
      </svg>
    </button>

    <prismic-rich-text :field="content.text" class="text-sm rich-text" />
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true);
      }
    },
    accept() {
      this.isOpen = false;
      if (process.browser) {
        localStorage.setItem('GDPR:accepted', true);
      }
    },
    deny() {
      this.isOpen = false;
      if (process.browser) {
        localStorage.setItem('GDPR:accepted', false);
      }
    }
  }
};
</script>
