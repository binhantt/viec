// initial state
const state = {
  selectedRadio: null,
  selectedImage: null,
  songLists: [
    {
      name: 'Top NGÀY',
      songs: [
        {
          name: 'EM GÌ OI',
          singer: 'JACK_IKM',
          path: '../src/components/nhac/EmGiOi-ICMJackJ97KICM-9430870.mp3',
          image: '../src/components/icon/war.jpg',
        },
        {
          name: 'EM GÌ OI',
          singer: 'JACK_IKM',
          path: '../src/components/nhac/CoDuocKhongEmCover-XuanSam-8572944.mp3',
          image: '../src/components/icon/andeptrai.jpeg',
        },
        {
          name: 'yeu em ',
          singer: 'JACK_IKM',
          path: '../src/components/nhac/Ngoi Sao Co Don - Jack - J97.mp3',
          image: '../src/components/icon/war.jpg',
        },
        // Thêm các bài hát khác vào đây
      ],
    },
    // Thêm các danh sách bài hát khác vào đây
  ],
  selectedSong: null,
  isPlaying: false,
};

// getters
const getters = {
  allSongLists: (state) => state.songLists,
  filteredSongs: (state) => (searchQuery) => {
    if (!searchQuery) {
      return null;
    }
    const query = searchQuery.toLowerCase();
    const filteredSongs = [];
    state.songLists.forEach((songList) => {
      const filteredList = songList.songs.filter((song) => {
        return (
          song.name.toLowerCase().includes(query) ||
          song.singer.toLowerCase().includes(query)||
          song.image.toLowerCase().includes(query) 
        );
      });
      if (filteredList.length > 0) {
        filteredSongs.push({
          name: songList.name,
          songs: filteredList,
        });
      }
    });
    return filteredSongs;
  },
  selectedSong: (state) => state.selectedSong,
  isPlaying: (state) => state.isPlaying,
};

// actions
const actions = {
  fetchSongLists({ commit }) {
    // Gọi API hoặc thực hiện các thao tác khác để lấy danh sách các danh sách bài hát
    // Sau đó, gọi commit để cập nhật state.songLists
  },
  selectRadio({ commit }, radio) {
    commit('setSelectedRadio', radio);
  },
  selectImage({ commit }, image) {
    commit('setSelectedImage', image);
  },
    setSelectedRadio(state, radio) {
    state.selectedRadio = radio;
  },
  setSelectedImage(state, image) {
    state.selectedImage = image;
  },
  selectImage({ commit }, image) {
    commit('setSelectedImage', image);
  },
  clearImageSelection({ commit }) {
    commit('clearSelectedImage');
  },
  addSong({ commit }, { songListIndex, song }) {
    commit('addSong', { songListIndex, song });
  },
  selectSong({ commit }, song) {
    commit('setSelectedSong', song);
  },
  playAudio({ commit }) {
    commit('setPlaying', true);
  },
  pauseAudio({ commit }) {
    commit('setPlaying', false);
  },
};

// mutations
const mutations = {
  setSelectedRadio(state, radio) {
    state.selectedRadio = radio;
  },
  setSelectedImage(state, image) {
    state.selectedImage = image;
  },
  addSong(state, { songListIndex, song }) {
    state.songLists[songListIndex].songs.push(song);
  },
  setSelectedSong(state, song) {
    state.selectedSong = song;
  },
  setPlaying(state, value) {
    state.isPlaying = value;
  },
  setSelectedImage(state, image) {
    state.selectedImage = image;
  },
  clearSelectedImage(state) {
    state.selectedImage = null;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};