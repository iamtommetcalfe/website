<template>
  <div>
    <div id="titleContainer">
      <h1 class="pageTitle">Hello</h1>
      <p>
        My name is Tom Metcalfe, a passionate and committed software engineer and engineering manager. With over 13 years of experience in PHP programming and 10+ years leading teams, I am always ready to take on challenging and exciting projects.
      </p>
      <p>
        Throughout my career, I've consistently achieved significant impacts on process improvement, project success, and team motivation. I adhere to a philosophy of servant leadership, where I put my team's needs at the forefront, facilitating their professional development, encouraging innovative thinking, and nurturing a positive and productive work environment.
      </p>
      <p>
        As an engineering manager, my focus isn't just on technical aspects. I strive to bridge the gap between IT and the rest of the business, communicating effectively to ensure seamless collaboration and mutual understanding. I am an ardent follower of tech trends and have expertise in back-end systems development along with a multitude of other programming skills. My passion for continuous learning doesn't stop at me, I encourage and support my team's pursuit of knowledge as well.
      </p>
      <p>
        I can also do a Rubiks cube super fast. That's cool, right?
      </p>
    </div>

    <div id="imageContainer">
      <picture class="tom-metcalfe-image">
        <source :srcset="imageUrlWEBP" type="image/webp">
        <source :srcset="imageUrlJPEG" type="image/jpeg">
        <img :src="imageUrlJPEG" width="248" class="tom-metcalfe-image" height="248" alt="Tom Metcalfe | Software Engineering Manager | Birmingham, United Kingdom">
      </picture>
    </div>
  </div>
</template>

<script setup>
import imageUrlJPEG from '/src/assets/images/tom-metcalfe-birmingham.jpeg';
import imageUrlWEBP from '/src/assets/images/tom-metcalfe-birmingham.webp';
</script>

<style scoped>
#titleContainer {
  width: 75%;
  display: block;
  float: left;
}

#titleContainer p {
  padding-right: 1rem;
  text-align: justify;
}

#imageContainer {
  padding-top: 95px;
}

@media screen and (max-width: 1048px) {
  #titleContainer {
    width: 100%;
  }

  #imageContainer {
    width: 100%;
    text-align: center;
    padding-top: 5px;
  }
}
</style>