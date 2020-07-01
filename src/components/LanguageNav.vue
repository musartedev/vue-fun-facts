<template>
  <nav>
    <ul class="language-nav">
      <li v-for="l in languages" :key="l.name">
        <span @click="changeLang(l.name)">{{ l.name }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
import usFlag from '@/assets/us.svg';
import esFlag from '@/assets/es.svg';

export default {
  data() {
    return {
      languages: [
        {
          icon: usFlag,
          name: 'en',
        },
        {
          icon: esFlag,
          name: 'es',
        },
      ],
    };
  },

  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style scoped>
.language-nav {
  font-size: 25px;
  display: flex;
  list-style: none;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 18px;
  font-family: "Poiret One", cursive;
  font-weight: bolder;
}

.language-nav span {
  margin-left: 15px;
}

</style>
