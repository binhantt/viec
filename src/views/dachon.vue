<script>
import { mapState, mapActions } from 'vuex';
import navar from '../components/layout/navar.vue';
import foder from '../components/layout/foder.vue';

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
    ...mapActions('demo', ['selectRadio', 'selectImage']),
    playSelectedRadio(radio) {
      this.selectRadio(radio);
      // Navigate to another page to play audio
      this.$router.push('/radio-page');
    },
    displaySelectedImage(image) {
      this.selectImage(image);
      // Navigate to another page to display the image
      this.$router.push('/image-page');
    },
  },
};
</script>