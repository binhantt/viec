<template>
  <div>
    <navar />
    <foder />
    <div class="songatou">
      <div class="song-list">
        <div v-for="list in songLists" :key="list.id" class="s-1">
          <h2>{{ list.name }}</h2>
          <div class="song-container"> 
            <div v-for="song in list.songs" :key="song.id" class="song" @click="playAudio(song)">
              <img :src="song.image" width="50" height="50" />
              <div class="song-1"> 
                <router-link :to="{ name: 'dachon', params: { songId: song.id }}">
                  {{ song.name }}
                  {{ song.singer }}  
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <audio ref="audioPlayer" :src="selectedSong ? selectedSong.audioUrl : ''" @timeupdate="updateCurrentTime"></audio>
  </div>
</template>

<script>
import navar from '../components/layout/navar.vue';
import foder from '../components/layout/foder.vue';
import { mapState } from 'vuex';

export default {
  components: {
    navar,
    foder,
  },
  data() {
    return {
      selectedSong: null,
      currentTime: 0,
    };
  },
  computed: {
    ...mapState('demo', ['songLists']),
  },
  methods: {
    playAudio(song) {
      if (this.selectedSong === song) {
        // Nếu nhấp vào bài hát hiện tại, tiếp tục phát từ vị trí hiện tại
        this.$refs.audioPlayer.currentTime = this.currentTime;
        this.$refs.audioPlayer.play();
      } else {
        // Nếu nhấp vào một bài hát khác, đặt bài hát mới và vị trí hiện tại về 0, sau đó phát nhạc
        this.selectedSong = song;
        this.currentTime = 0;
        this.$refs.audioPlayer.play();
      }
    },
    updateCurrentTime() {
      this.currentTime = this.$refs.audioPlayer.currentTime;
    },
  },
};
</script>

<style>
.song-container { display: flex; }
.song {
  display: flex;
  border: 3px solid orangered;
  padding: 10px;
  width: 150px;
  margin: 5px;
}

.song img {
  border-radius: 50px;
}

.song-1 {
  display: flex;
  margin: 5px;
  flex-direction: column;
  font-size: 15px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.audio-player {
  display: flex;
  justify-content: center;
  margin-top: 5px;
}
</style>