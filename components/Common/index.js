import SGLogo from './SVG/SGLogo.vue';
import SGLogoWhite from './SVG/SGLogoWhite.vue';
import SGLogoNoText from './SVG/SGLogoNoText.vue';
import Wrapper from './Sections/Wrapper.vue';
import Container from './Sections/Container.vue';
import Block from './Sections/Block.vue';
import PageHeader from './Sections/PageHeader.vue';
import CTABtn from './Buttons/CTABtn.vue';
import FunnelBtn from './Buttons/FunnelBtn.vue';
import MainBtn from './Buttons/MainBtn.vue';
import ChevronRight from './SVG/ChevronRight.vue';
import Placeholder from './SVG/Placeholder.vue';
import IconCircle from './Misc/IconCircle.vue';
import CheckMark from './SVG/CheckMark.vue';
import CloseIcon from './SVG/CloseIcon.vue';

// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as
  // the first argument
  install(Vue) {
    Vue.component('SGLogo', SGLogo);
    Vue.component('SGLogoWhite', SGLogoWhite);
    Vue.component('SGLogoNoText', SGLogoNoText);
    Vue.component('Wrapper', Wrapper);
    Vue.component('Container', Container);
    Vue.component('Block', Block);
    Vue.component('PageHeader', PageHeader);
    Vue.component('CTABtn', CTABtn);
    Vue.component('FunnelBtn', FunnelBtn);
    Vue.component('MainBtn', MainBtn);
    Vue.component('ChevronRight', ChevronRight);
    Vue.component('Placeholder', Placeholder);
    Vue.component('IconCircle', IconCircle);
    Vue.component('CheckMark', CheckMark);
    Vue.component('CloseIcon', CloseIcon);
  },
};
