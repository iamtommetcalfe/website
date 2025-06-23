<template>
  <div v-if="isVisible" class="popup-overlay" @click="closePopup">
    <div class="popup-content" @click.stop>
      <img :src="helloFriendGif" alt="Hello Friend - Mr. Robot" class="popup-image">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import helloFriendGif from '@/assets/images/hello-friend.gif';

export default defineComponent({
  name: 'MrRobotPopUp',
  props: {
    isVisible: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  setup() {
    return {
      helloFriendGif
    };
  },
  methods: {
    closePopup() {
      this.$emit('close');
    }
  }
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
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.9); }
  to { transform: scale(1); }
}

/* Dark theme support */
.dark-theme .popup-content {
  background-color: #121212;
}
</style>