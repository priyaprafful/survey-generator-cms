export const state = () => ({
  menu: {},
});

export const mutations = {
  SET_MENU(state, menu) {
    state.menu = menu;
  },
  SET_ERROR(state, error) {
    state.menu = error;
  },
};

export const actions = {
  async fetchMenu({ commit }, $prismic) {
    const currentLocale = this.app.i18n.locales.filter(
      (lang) => lang.code === this.app.i18n.locale
    )[0];

    try {
      const menu = (
        await $prismic.api.getSingle('menu', {
          lang: currentLocale.iso.toLowerCase(),
        })
      ).data;

      commit('SET_MENU', menu);
    } catch (e) {
      const error = 'Please create a menu document';

      commit('SET_ERROR', error);
    }
  },
};
