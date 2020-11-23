import SGBackground from './Section/SGBackground.vue';
import SGSection from './Section/SGSection.vue';
import SGBlock from './Section/SGBlock.vue';
import SGBlockWrapper from './Section/SGBlockWrapper.vue';
import SGButton from './Button/SGButton.vue';

// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as
  // the first argument
  install(Vue) {
    Vue.component('SGBackground', SGBackground);
    Vue.component('SGSection', SGSection);
    Vue.component('SGBlock', SGBlock);
    Vue.component('SGBlockWrapper', SGBlockWrapper);
    Vue.component('SGButton', SGButton);
  },
};
