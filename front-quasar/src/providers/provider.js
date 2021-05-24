import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const estado = {
  token: null,
  user: {},
};

const mutations = {
  DEFINIR_USUARIO_LOGADO(state, { token, user }) {
    state.token = token;
    state.user = user;
  },
};

export default new Vuex.Store({
  state: estado,
  mutations,
});
