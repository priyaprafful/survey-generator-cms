export const state = () => ({
  contact_information: {},
});

export const mutations = {
  SET_MENU(state, payload) {
    state.contact_information = payload;
  },
  SET_ERROR(state, payload) {
    state.contact_information = payload;
  },
};

export const actions = {
  async fetchContactInformation({ commit }, $prismic) {
    try {
      const content = (await $prismic.api.getSingle('contact_information'))
        .data;

      commit('SET_MENU', content);
    } catch (e) {
      const error = 'Please create a menu document';

      commit('SET_ERROR', error);
    }
  },
};
