<template>
  <div class="container">
    <Portrait />
    <Slideshow />
  </div>
</template>

<script>
import Slideshow from "@/components/Slideshow.vue";
import Portrait from "@/components/Portrait.vue";

export default {
  components: {
    Slideshow,
    Portrait,
  },
};
</script>

<style scoped lang='scss'>
</style>