<template>
  <div id="footerContainer">
    <div id="location">
      <b>Location</b> - <small>Engineering Function Manager @ Amiqus - Birmingham</small>
    </div>
    <div id="social">
      <a href="https://github.com/iamtommetcalfe" title="Tom Stirrop-Metcalfe - Github Profile">
        <picture class="tom-metcalfe-image">
          <source :srcset="githubIconWEBP" type="image/webp" />
          <source :srcset="githubIconPNG" type="image/png" />
          <img
            :src="githubIconPNG"
            alt="Tom Stirrop-Metcalfe - Github Profile"
            width="15"
            height="14"
            loading="lazy"
          />
        </picture>
      </a>
      <a
        href="https://www.linkedin.com/in/iamtomstirropmetcalfe/"
        title="Tom Stirrop-Metcalfe - LinkedIn Profile"
      >
        <picture class="tom-metcalfe-image">
          <source :srcset="linkedInIconWEBP" type="image/webp" />
          <source :srcset="linkedInIconPNG" type="image/png" />
          <img
            :src="linkedInIconPNG"
            alt="Tom Stirrop-Metcalfe - LinkedIn Profile"
            width="15"
            height="14"
            loading="lazy"
          />
        </picture>
      </a>
    </div>

    <div class="clearAfter"></div>

    <!-- Easter Egg Modal -->
    <div v-if="showEasterEgg" class="easter-egg-modal">
      <div class="easter-egg-content">
        <button class="close-button" @click="closeEasterEgg">&times;</button>
        <h2>🎉 You found me! 🎉</h2>
        <p>Looking for an experienced engineering leader?</p>
        <div class="hire-me-content">
          <p>I'm passionate about building great products and leading high-performing teams.</p>
          <p>Let's connect and discuss how I can help your organization!</p>
          <div class="contact-buttons">
            <a
              href="https://www.linkedin.com/in/iamtomstirropmetcalfe/"
              class="contact-button linkedin"
              target="_blank"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
        <div class="easter-egg-footer">
          <small>Hint: Type "hireme" anywhere on the site to see this again</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import linkedInIconWEBP from '@/assets/images/linked-in-icon.webp';
import linkedInIconPNG from '@/assets/images/linked-in-icon.png';
import githubIconWEBP from '@/assets/images/github-icon.webp';
import githubIconPNG from '@/assets/images/github-icon.png';
import { useEasterEgg } from '@/composables/useEasterEgg';

// Use the easter egg composable
const { showEasterEgg, closeEasterEgg } = useEasterEgg();
</script>

<style scoped>
#footerContainer {
  padding: 0.75rem;
}

#location {
  float: left;
  font-size: 12px;
  margin-top: 0;
  text-align: justify;
}

#social {
  float: right;
  display: flex;
  align-items: center;
}

#social a {
  padding-left: 10px;
}

/* Easter Egg Modal Styles */
.easter-egg-modal {
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

.easter-egg-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  max-width: 500px;
  width: 90%;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.4s ease;
  color: #384452;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #333;
}

.easter-egg-content h2 {
  margin-top: 0;
  color: #384452;
  text-align: center;
  font-size: 24px;
}

.hire-me-content {
  margin: 20px 0;
}

.contact-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
}

.contact-button {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  text-align: center;
}

.contact-button.linkedin {
  background-color: #0077b5;
  color: white;
}

.contact-button.email {
  background-color: #384452;
  color: white;
}

.contact-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.easter-egg-footer {
  margin-top: 20px;
  text-align: center;
  color: #999;
  font-size: 12px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Build Info Styles */
.build-info {
  position: fixed;
  bottom: 5px;
  right: 5px;
  font-size: 10px;
  color: #999;
  cursor: pointer;
  z-index: 1000;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.build-info:hover {
  opacity: 1;
}

.build-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #999;
  border-radius: 50%;
}

.refresh-button {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 12px;
  margin-left: 5px;
  padding: 0;
  transition: transform 0.3s ease;
}

.refresh-button:hover {
  transform: rotate(180deg);
  color: #00b3fe;
}
</style>
