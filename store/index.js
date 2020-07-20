export const state = () => ({
  miscellaneous: {},
});

export const mutations = {
  SET_MENU(state, payload) {
    state.miscellaneous = payload;
  },
  SET_ERROR(state, payload) {
    state.miscellaneous = payload;
  },
};

export const actions = {
  async fetchContactInformation({ commit }, $prismic) {
    try {
      const content = (await $prismic.api.getSingle('miscellaneous')).data;

      commit('SET_MENU', content);
    } catch (e) {
      const error = 'Please create a menu document';

      commit('SET_ERROR', error);
    }
  },
};
