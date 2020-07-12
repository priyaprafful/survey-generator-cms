import SGLogo from './SVG/SGLogo.vue';
import Block from './Sections/Block.vue';
import PageTitle from './Sections/PageTitle.vue';
import CTABtn from './Buttons/CTABtn.vue';
import FunnelBtn from './Buttons/FunnelBtn.vue';
import ChevronRight from './SVG/ChevronRight.vue';
import Placeholder from './SVG/Placeholder.vue';

// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as
  // the first argument
  install(Vue) {
    Vue.component('SGLogo', SGLogo);
    Vue.component('Block', Block);
    Vue.component('PageTitle', PageTitle);
    Vue.component('CTABtn', CTABtn);
    Vue.component('FunnelBtn', FunnelBtn);
    Vue.component('ChevronRight', ChevronRight);
    Vue.component('Placeholder', Placeholder);
  },
};
