<template>
  <img :src="profileUrl" />
</template>

<script>
import Mus from '@/assets/mus.png';

export default {
  data() {
    return {
      profileUrl: Mus,
    };
  },
};
</script>
