<template>
  <component
    :is="anchor ? 'a' : 'prismic-link'"
    :field="anchor ? undefined : to"
    :href="anchor ? to : undefined"
    :class="classes"
    :style="style"
    @click="$emit('click')"
    @mouseover="$emit('mouseover')"
    @mouseleave="$emit('mouseleave')"
    @mousedown="$emit('mousedown')"
    @mouseup="$emit('mouseup')"
    @keyup="$emit('keyup')"
    @keydown="$emit('keydown')"
    @keydown.enter="$emit('keydown-enter')"
    @keyup.enter="$emit('keyup-enter')"
    @keydown.space="$emit('keydown-space')"
    @keydown.space.prevent="$emit('keydown-space-prevent')"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    @focusin="$emit('focusin')"
    @focusout="$emit('focusout')"
  >
    {{ label }}
    <ChevronIcon v-if="chevron" class="base-btn__hover-arrow ml-3" />
  </component>
</template>

<script>
import ChevronIcon from '~/assets/svg/chevron.svg?inline';

export default {
  name: 'BaseButton',
  components: {
    ChevronIcon
  },
  props: {
    label: {
      type: String,
      default: null
    },
    to: {
      type: [String, Object],
      default: Object
    },
    anchor: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'blue-dark',
      validator(value) {
        return (
          [
            'blue-light',
            'blue-dark',
            'yellow-light',
            'yellow-dark',
            'transparent'
          ].includes(value) !== -1
        );
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large', 'none'].includes(value) !== -1;
      }
    },
    bgColor: {
      type: String,
      default: null
    },
    textColor: {
      type: String,
      default: null
    },
    chevron: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes() {
      return {
        'base-btn font-medium inline-flex items-center justify-center whitespace-no-wrap rounded border border-transparent transition duration-100 ease-in-out': true,
        'bg-blue-9 hover:bg-blue-8 text-white': this.color === 'blue-dark',
        'bg-blue-4 hover:bg-blue-3 text-white': this.color === 'blue-light',
        'bg-yellow-2 hover:bg-yellow-1 text-blue-9':
          this.color === 'yellow-light',
        'bg-yellow-4 hover:bg-yellow-3 text-white':
          this.color === 'yellow-dark',
        '': this.color === 'transparent',
        'p-0': this.size === 'none',
        'text-sm px-3 py-2': this.size === 'small',
        'text-sm px-4 py-3': this.size === 'medium',
        'text-base px-4 py-3': this.size === 'large'
      };
    },
    style() {
      return {
        backgroundColor: this.bgColor,
        color: this.textColor
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.base-btn {
  .base-btn__hover-arrow {
    position: relative;
    top: 1px;
    fill: currentColor;
    height: 0.65rem;
    width: 0.65rem;
    transform: translateX(0);
    transition: all 150ms;
  }

  &:hover {
    .base-btn__hover-arrow {
      transform: translateX(3px);
      backface-visibility: hidden;
      perspective: 1000px;
    }
  }
}
</style>
