// radio.js

const state = {
    radioUrl: '../src/views/home.vue' // URL của trang radio
  };
  
  const mutations = {
    setRadioUrl(state, url) {
      state.radioUrl = url;
    }
  };
  
  const getters = {
    getRadioUrl(state) {
      return state.radioUrl;
    }
  };
  
  export default {
    state,
    mutations,
    getters
  };