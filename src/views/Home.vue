<template>
  <div class="home mb-5">
    <hero-section />
    <book-visit />
  </div>
</template>

<script>
import BookVisit from "../components/hero-section/BookVisit.vue";
import HeroSection from "../components/hero-section/HeroSection";

export default {
  name: "Home",
  components: { HeroSection, BookVisit, },
};
</script>
