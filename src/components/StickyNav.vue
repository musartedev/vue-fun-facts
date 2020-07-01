<template>
  <div class="sticky-nav">
    <language-nav />
    <social-nav />
  </div>
</template>

<script>
import SocialNav from '@/components/SocialNav.vue';
import LanguageNav from '@/components/LanguageNav.vue';

export default {
  components: { SocialNav, LanguageNav },
};
</script>

.<style scoped>
.sticky-nav {
  position: fixed;
  display: flex;
  right: 20px;
  top: 10px;
  z-index: 3;
  align-items: center;
}
</style>
