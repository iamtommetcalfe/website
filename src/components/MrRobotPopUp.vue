<template>
  <div v-if="isVisible" class="popup-overlay" @click="closePopup">
    <div class="popup-content" @click.stop>
      <video autoplay loop muted playsinline class="popup-image">
        <source :src="helloFriendWebM" type="video/webm" />
        <source :src="helloFriendMP4" type="video/mp4" />
        <img :src="helloFriendGif" alt="Hello Friend - Mr. Robot" class="popup-image" />
      </video>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import helloFriendGif from '@/assets/images/hello-friend.gif';
import helloFriendMP4 from '@/assets/images/hello-friend.mp4';
import helloFriendWebM from '@/assets/images/hello-friend.webm';

export default defineComponent({
  name: 'MrRobotPopUp',
  props: {
    isVisible: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['close'],
  setup() {
    return {
      helloFriendGif,
      helloFriendMP4,
      helloFriendWebM,
    };
  },
  methods: {
    closePopup() {
      this.$emit('close');
    },
  },
});
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

.popup-content {
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 5px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  animation: scaleIn 0.3s ease;
}

.popup-image {
  max-width: 100%;
  height: auto;
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}

/* Dark theme support */
.dark-theme .popup-content {
  background-color: #121212;
}
</style>
