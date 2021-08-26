<template>
  <div class="home mb-5">
    <hero-section />
    <book-visit />
    <categories-section />
    <recent-articles />
  </div>
</template>

<script>
import CategoriesSection from "../components/categories/CategoriesSection.vue";
import BookVisit from "../components/hero-section/BookVisit.vue";
import HeroSection from "../components/hero-section/HeroSection";
import RecentArticles from '../components/recent-articles/RecentArticles.vue';

export default {
  name: "Home",
  components: { HeroSection, BookVisit, CategoriesSection, RecentArticles },
};
</script>
