import Store from 'electron-store';

const store = new Store({
  defaults: {
    counter: 0,
    app: {
      theme: 'light',
    },
  },
});

export default store;