<template>
  <section class="hero-section">
    <div class="container mx-auto h-full rounded-top" :style="backgroundImage">
      hOME
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  computed: {
    backgroundImage() {
      return `background: linear-gradient(to bottom, rgba(43, 43, 49, 0) 0%, #18181b 100%), 
          url("${require("@/assets/images/hero-bg.jpg")}") center center / cover no-repeat;`;
    },
  },
};
</script>

<style scoped>
.hero-section {
  height: 550px;
}
.rounded-top {
  border-radius: 0.35rem;
}
</style>