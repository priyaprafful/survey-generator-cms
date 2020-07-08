import CTAButton from './Buttons/CTAButton.vue';
import Block from './Sections/Block.vue';
import Arrow from './SVG/Arrow.vue';

// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as
  // the first argument
  install(Vue) {
    Vue.component('CTAButton', CTAButton);
    Vue.component('Block', Block);
    Vue.component('Arrow', Arrow);
  },
};
