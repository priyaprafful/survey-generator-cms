import SvgIcon from './Icons/SvgIcon.vue';
import Wrapper from './Sections/Wrapper.vue';
import Container from './Sections/Container.vue';
import BlockWrapper from './Sections/BlockWrapper.vue';
import Block from './Sections/Block.vue';
import PageHeader from './Sections/PageHeader.vue';
import CTABtn from './Buttons/CTABtn.vue';
import MainBtn from './Buttons/MainBtn.vue';
import Placeholder from './Icons/Placeholder.vue';
import Dots from './Sections/Dots.vue';

// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as
  // the first argument
  install(Vue) {
    Vue.component('SvgIcon', SvgIcon);
    Vue.component('Wrapper', Wrapper);
    Vue.component('Container', Container);
    Vue.component('BlockWrapper', BlockWrapper);
    Vue.component('Block', Block);
    Vue.component('PageHeader', PageHeader);
    Vue.component('CTABtn', CTABtn);
    Vue.component('MainBtn', MainBtn);
    Vue.component('Placeholder', Placeholder);
    Vue.component('Dots', Dots);
  },
};
