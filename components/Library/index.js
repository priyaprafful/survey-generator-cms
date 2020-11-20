import SGPage from './Section/SGPage.vue';
import SGSection from './Section/SGSection.vue';
import SGBlock from './Section/SGBlock.vue';
import SGBlockWrapper from './Section/SGBlockWrapper.vue';

// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as
  // the first argument
  install(Vue) {
    Vue.component('SGPage', SGPage);
    Vue.component('SGSection', SGSection);
    Vue.component('SGBlock', SGBlock);
    Vue.component('SGBlockWrapper', SGBlockWrapper);
  },
};
