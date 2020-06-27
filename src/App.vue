<template>
  <section>
    <div class="content" v-for="fact in facts" :key="fact.id">
      <component :is="fact.image" />
      <div class="text">
        <h2 class="title">{{ fact.title }}</h2>
        <div class="description">{{ fact.description }}</div>
      </div>
    </div>
    <div class="skewed"></div>
    <div class="arrow">
      <i class="fa fa-arrow-down" aria-hidden="true"></i>
    </div>
  </section>
</template>

<script>
import YogaImage from '@/assets/yoga.svg';
import Programmer from '@/assets/programmer.svg';

export default {
  name: 'App',
  components: { YogaImage, Programmer },
  data() {
    return {
      facts: [
        {
          id: 1,
          title: 'Mariangélica :P',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem, debitis saepe porro tenetur fugiat unde non ipsam explicabo commodi maiores aut quasi, dolorem facilis sapiente odit vel reprehenderit autem.',
          image: YogaImage,
        },
        {
          id: 2,
          title: 'Mariangélica :P',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque exercitationem, debitis saepe porro tenetur fugiat unde non ipsam explicabo commodi maiores aut quasi, dolorem facilis sapiente odit vel reprehenderit autem.',
          image: Programmer,
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poiret+One&family=Roboto&display=swap");
:root {
  --color-primary: #5f147d;
}

body {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

.skewed {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-primary);
  z-index: 0;
  transform: skewY(30deg);
  transform-origin: top right;
}

.content {
  position: relative;
  z-index: 2;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 30px;
}

.content svg {
  width: 600px;
}

.content .text {
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50%;
  font-size: 18px;
}

.content .text .title {
  font-family: 'Poiret One', cursive;
  font-weight: bold;
  font-size: 40px;
}

.arrow {
  position: fixed;
  font-size: 30px;
  bottom: 20px;
  left: 50%;
  color: var(--color-primary);
}
</style>
