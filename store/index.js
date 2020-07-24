export const state = () => ({
  miscellaneous: {},
});

export const mutations = {
  SET_MISC(state, misc) {
    state.miscellaneous = misc;
  },
  SET_ERROR(state, error) {
    state.miscellaneous = error;
  },
};

export const actions = {
  async fetchMisc({ commit }, $prismic) {
    try {
      const misc = (await $prismic.api.getSingle('miscellaneous')).data;

      commit('SET_MISC', misc);
    } catch (e) {
      const error = 'Please create a document';

      commit('SET_ERROR', error);
    }
  },
};
