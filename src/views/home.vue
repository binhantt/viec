<template>
  <div>
    <navar />
    <foder />
    <input ref="searchInput" type="text" v-model="searchQuery" @input="search" />
    <button @click="setSongFiltered(song1)">Set Song 1</button>
    <h2>{{ song.name }}</h2>
    <p>{{ song.singer }}</p>
    <audio controls :src="song.path"></audio>
    <img :src="song.image" width="20" height="20" />
  </div>
</template>

<script>
import navar from '../components/layout/navar.vue';
import foder from '../components/layout/foder.vue';
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    navar,
    foder,
  },
  computed: {
    ...mapState('demo', ['songs', 'song']), // Thay 'demo' bằng tên namespace của Vuex store của bạn
    filteredSongs() {
      if (!this.searchQuery) {
        return null;
      }
      const query = this.searchQuery.toLowerCase();
      return this.songs.filter((item) => {
        return item.name.toLowerCase().includes(query) || item.singer.toLowerCase().includes(query);
      });
    },
  },
  methods: {
    ...mapActions('demo', ['setSong']), // Thay 'demo' bằng tên namespace của Vuex store của bạn
    search() {
      // Không cần gọi phương thức filter ở đây, computed property filteredSongs sẽ tự động cập nhật
    },
    setSongFiltered(song) {
      this.setSong(song);
    },
  },
};
</script>