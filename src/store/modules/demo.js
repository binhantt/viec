
// initial state
const state = {
    song:{
    name:'hocsib',
    singer:'fwewewewe',
    path:'../src/components/nhac/EmGiOi-ICMJackJ97KICM-9430870.mp3',
    image:'../src/components/icon/war.jpg',
}
    
};

// getters lay
const getters = {
  //  allTodos: (state) => state.todos,
  song: (state) => state.song
};

// actions doi 
const actions = {
    async fetchTodos({ commit }) {
    } ,
    setsong({ commit }, newsong) {
       commit("setsong", newsong) ;
    }
  };

// commit=>mutations
const mutations = {
    //setTodos: (state, todos) => state.todos = todos,
    setsong: (state, newsong) => state.song = newsong
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}