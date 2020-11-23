<template>
  <component
    :is="global ? 'a' : 'nuxt-link'"
    :to="global ? null : localePath(to)"
    :href="global ? to : localePath(to)"
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
    <div v-if="this.$slots.default" class="sg-btn__icon">
      <slot />
    </div>

    <slot name="label" :label="label">
      <span
        v-if="label"
        class="sg-btn__label"
        :class="{
          'sg-btn__label--margin': this.$slots.default,
        }"
      >
        {{ label }}
      </span>
    </slot>
  </component>
</template>

<script>
export default {
  name: 'SGButton',
  props: {
    label: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: '/',
    },
    global: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'blue-dark',
      validator(value) {
        return (
          ['blue-light', 'blue-dark', 'yellow-light', 'yellow-dark'].includes(
            value
          ) !== -1
        );
      },
    },
    size: {
      type: String,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large', 'none'].includes(value) !== -1;
      },
    },
    bgColor: {
      type: String,
      default: null,
    },
    textColor: {
      type: String,
      default: null,
    },
  },
  computed: {
    classes() {
      return {
        'inline-flex items-center whitespace-no-wrap rounded border border-transparent transition duration-100 ease-in-out': true,
        'bg-blue-9 hover:bg-blue-8 text-white': this.color === 'blue-dark',
        'bg-yellow-2 hover:bg-yellow-1 text-blue-9':
          this.color === 'yellow-light',
        'bg-yellow-4 hover:bg-yellow-3 text-white':
          this.color === 'yellow-dark',
        'text-sm px-3 py-2': this.size === 'small',
        'text-sm px-3 py-3': this.size === 'medium',
        'text-base px-4 py-3': this.size === 'large',
      };
    },
    style() {
      return {
        backgroundColor: this.bgColor,
        color: this.textColor,
      };
    },
  },
};
</script>

<style scoped lang="scss">
/* .sg-btn {
  display: inline-flex;
  align-items: center;
  border-radius: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid transparent;
  transition: background 0.1s, border 0.1s;

  .sg-btn__icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      transition: fill 0.1s;

      * {
        fill: currentColor;
      }
    }
  }

  .sg-btn__label {
    &--hide {
      position: relative;
      color: transparent;
    }
  }

  &--primary {
    background: black;
    color: white;

    &:hover:not([disabled]) {
      background: mix(white, black, 15%);
    }
  }

  &--medium {
    .sg-btn__label {
      &--margin {
        margin-left: 0.5rem;
      }
    }

    svg {
      width: 0.75rem;
      height: 0.75rem;
    }
  }

  &--large {
    .sg-btn__label {
      &--margin {
        margin-left: 0.5rem;
      }
    }

    svg {
      width: 0.9rem;
      height: 0.9rem;
    }
  }
} */
</style>
