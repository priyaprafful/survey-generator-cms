<template>
  <div :class="bg">
    <div :class="section">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '2',
      validator(value) {
        return ['1', '2'].includes(value) !== -1;
      }
    },
    border: {
      type: Boolean,
      default: false
    },
    white: {
      type: Boolean,
      default: false
    },
    blue: {
      type: Boolean,
      default: false
    },
    gradient: {
      type: Boolean,
      default: false
    },
    yellow: {
      type: Boolean,
      default: false
    },
    flexCol: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    bg() {
      return {
        'bg-white': this.white,
        'bg-blue-9 text-white': this.blue,
        'bg-gradient-to-b from-bluegray-1 to-white': this.gradient,
        'bg-yellow-2 text-yellow-4': this.yellow,
        'border-b border-bluegray-2': this.border
      };
    },
    section() {
      return {
        'max-w-screen-xl m-auto flex w-full': true,
        'flex-col': this.flexCol,
        'py-12 px-12': this.size === '1',
        'py-24 px-12': this.size === '2'
      };
    }
  }
};
</script>
