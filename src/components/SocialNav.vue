<template>
  <nav>
    <ul class="social-nav">
      <li v-for="s in socialNetworks" :key="s.name">
        <a :href="s.link" target="_blank"
          ><i :class="`fa fa-${s.iconClassName}`"
        /></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      socialNetworks: [
        {
          name: 'github',
          iconClassName: 'github',
          link: 'https://github.com/musenberg404',
        },
        {
          name: 'twitter',
          iconClassName: 'twitter',
          link: 'https://twitter.com/musartedev',
        },
        {
          name: 'instagram',
          iconClassName: 'instagram',
          link: 'https://instagram.com/musarte.dev',
        },
        {
          name: 'blog',
          iconClassName: 'globe',
          link: 'https://musarte.dev/',
        },
      ],
    };
  },
};
</script>

<style scoped>
.social-nav {
  z-index: 3;
  font-size: 25px;
  display: flex;
  list-style: none;
}

.social-nav a {
  color: white;
}

.social-nav li {
  margin-left: 20px;
}

</style>
