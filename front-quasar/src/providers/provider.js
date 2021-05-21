import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const estado = {
  token: null,
  user: {},
};

export default new Vuex.Store({
  state: estado,
});
