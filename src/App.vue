<template>
  <main>
    <sticky-nav />
    <section>
      <div v-for="fact in facts" class="content" :key="`fact-${fact.id}`" :id="`fact-${fact.id}`">
        <component :is="fact.image" />
        <div class="text">
          <h2 class="title">{{ $t(fact.title) }}</h2>
          <div class="description">{{ $t(fact.description) }}</div>
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
  </main>
</template>

<script>
import StickyNav from '@/components/StickyNav.vue';

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
    StickyNav,
  },
  data() {
    return {
      facts: [
        {
          id: 1,
          title: 'fullName',
          description: 'mainDescription',
          image: ProfileImage,
        },
        {
          id: 2,
          title: 'yogaTitle',
          description: 'yogaDescription',
          image: YogaImage,
        },
        {
          id: 3,
          title: 'nationalityTitle',
          description: 'nationalityDescription',
          image: Emigrant,
        },
        {
          id: 4,
          title: 'hobbyTitle',
          description: 'hobbyDescription',
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
  --color-text: white;
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
  color: var(--color-text);
  margin: 0;
  padding: 0;
  position: relative;
}

img {
  max-width: 400px;
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

.content svg,
.content img {
  width: 600px;
  margin: auto;
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

@media screen and (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 0 20px;
  }
  .skewed {
    transform: skewY(10deg);
  }
  .content svg,
  .content img {
    padding-top: 30px;
    width: 300px;
    margin: auto;
  }

  .content .text {
    margin-top: 10px;
    padding: 0;
    font-size: 20px;
    line-height: 40px;
  }
}

@media screen and (max-width: 425px) {
  .skewed {
    transform: skewY(0deg);
  }

  .arrow {
    color: white;
  }

  .content {
    padding: 60px 20px;
    display: block;
  }

  .content svg,
  .content img {
    padding-top: 30px;
    width: 200px;
    margin: auto;
  }

  .content .text .title {
    font-size: 30px;
    margin-bottom: 25px;
  }

.content .text {
  font-size: 18px;
}
}
</style>
