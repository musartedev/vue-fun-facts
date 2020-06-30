<template>
  <div>
    <social-nav />
    <section>
      <div v-for="fact in facts" class="content" :key="`fact-${fact.id}`" :id="`fact-${fact.id}`">
        <component :is="fact.image" />
        <div class="text">
          <h2 class="title">{{ fact.title }}</h2>
          <div class="description">{{ fact.description }}</div>
        </div>
      </div>
      <a class="arrow" :href="nextTarget ? `#fact-${nextTarget}` : null">
        <i
          @click="updateNextTarget"
          :class="`fa fa-${nextTarget === facts.length ? 'arrow-up' : 'arrow-down'}`"
          aria-hidden="true"
        ></i>
      </a>
      <div class="skewed"></div>
    </section>
  </div>
</template>

<script>
import SocialNav from '@/components/SocialNav.vue';

import YogaImage from '@/assets/yoga.svg';
import Programmer from '@/assets/programmer.svg';
import Emigrant from '@/assets/emigrant.svg';
import ProfileImage from '@/components/ProfileImage.vue';

export default {
  name: 'App',
  components: {
    YogaImage,
    Programmer,
    Emigrant,
    ProfileImage,
    SocialNav,
  },
  data() {
    return {
      facts: [
        {
          id: 1,
          title: '✨ Mariangélica Useche',
          description:
            'Soy Lic. en Computación desde diciembre del 2018. Antes de eso bailaba en musicales de teatro y practicaba kárate.',
          image: ProfileImage,
        },
        {
          id: 2,
          title: '☀️ Me encanta hacer Yoga',
          description:
            'Empecé en el 2016 y aunque a veces he sido intermitente, no creo que lo vaya a dejar por completo. La práctica diaria trajo a mi vida una paz que no había experimientado antes.',
          image: YogaImage,
        },
        {
          id: 3,
          title: '🇻🇪 Nací en Caracas, Venezuela',
          description:
            'Allí estudié y empecé mi vida profesional, pero en diciembre de 2019 me mudé a Bogotá, y acá la sigo construyendo.',
          image: Emigrant,
        },
        {
          id: 4,
          title: '💻 Disfruto mucho maquetar',
          description:
            'Puedo pasar todo el día sentada en la computadora tratando que un botón quede en el lugar perfecto.',
          image: Programmer,
        },
      ],
      nextTarget: 1,
    };
  },

  methods: {
    updateNextTarget() {
      if (this.nextTarget + 1 <= this.facts.length) {
        this.nextTarget += 1;
      } else {
        this.nextTarget = 1;
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poiret+One&family=Roboto&display=swap");
:root {
  --color-primary: #5f147d;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin: 0;
  padding: 0;
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
  padding-top: 40%;
  font-size: 25px;
  line-height: 40px;
}

.content .text .title {
  font-family: "Poiret One", cursive;
  font-weight: bold;
  font-size: 40px;
}

.arrow {
  position: fixed;
  font-size: 30px;
  bottom: 20px;
  left: 50%;
  color: var(--color-primary);
  cursor: pointer;
  z-index: 3;
}
</style>
