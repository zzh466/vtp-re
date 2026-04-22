import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
       activeCtpaccount: 0
    };
  },

  mutations: {
    setCount(state, value) {
      state.count = value;
    },
    increment(state) {
      state.count += 1;
    },
    setTheme(state, theme) {
      state.theme = theme;
    },
  },

  actions: {
    async loadPersisted({ commit }) {
      const count = await window.electronStore.get('counter');
      const theme = await window.electronStore.get('app.theme');

      if (typeof count === 'number') {
        commit('setCount', count);
      }

      if (typeof theme === 'string') {
        commit('setTheme', theme);
      }
    },

    async incrementAndPersist({ commit, state }) {
      commit('increment');
      await window.electronStore.set('counter', state.count);
    },

    async changeTheme({ commit }, theme) {
      commit('setTheme', theme);
      await window.electronStore.set('app.theme', theme);
    },
  },
});

export default store;