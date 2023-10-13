// initial state
const state = {
  danhsach: [
    {
      nhac: {
        anh: "../src/components/anh/1045.jpg",
        diachi: "../src/components/nhac/emgioi.mp3",
        name: "EM GÌ ƠI",
        methor: "JACK-KICM",
      },
    },
  ],
};

// getters
const getters = {
  getAllSongs: (state) => state.danhsach,
};

// actions
const actions = {
  fetchSongLists({ commit }) {
    // Gọi API hoặc thực hiện các thao tác khác để lấy danh sách các danh sách bài hát
    // Sau đó, gọi commit để cập nhật state.songLists
  },
  addSong({ commit }, danhsach) {
    commit('addSong', danhsach);
  },
};

// mutations
const mutations = {
  addSong(state, danhsach) {
    state.danhsach.push(danhsach);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};