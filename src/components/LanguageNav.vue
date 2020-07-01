<template>
  <nav>
    <ul class="language-nav">
      <li v-for="language in languages" :key="language">
        <span @click="changeLang(language)">{{ language }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      languages: ['es', 'en'],
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
