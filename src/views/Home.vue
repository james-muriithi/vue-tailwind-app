<template>
  <div class="home mb-5">
    <hero-section />
    <book-visit />
    <categories-section />
  </div>
</template>

<script>
import CategoriesSection from "../components/categories/CategoriesSection.vue";
import BookVisit from "../components/hero-section/BookVisit.vue";
import HeroSection from "../components/hero-section/HeroSection";

export default {
  name: "Home",
  components: { HeroSection, BookVisit, CategoriesSection },
};
</script>
