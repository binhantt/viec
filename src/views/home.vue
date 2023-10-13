<template>
  <div>
    <navar />
    <foder />
    <div v-for="song in danhsach" :key="song.nhac.name">
      {{ mame }};
      <img :src="song.nhac.anh" :alt="song.nhac.name" />
      <h3>{{ song.nhac.name }}</h3>
      <p>{{ song.nhac.methor }}</p>
      <audio :src="song.nhac.diachi" controls></audio>
    </div>
  </div>
</template>

<script>
import foder from "../components/layout/foder.vue";
import navar from "../components/layout/navar.vue";

export default {
  components: {
    navar,
    foder,
  },
  computed: {
    danhsach() {
      return this.$store.getters["demo/getAllSongs"];
    },
  },
};
</script>