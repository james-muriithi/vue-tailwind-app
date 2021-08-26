<template>
  <div class="mt-7 pb-5 container mx-auto px-3 sm:px-0">
    <div class="py-4">
      <h2 class="font-bold text-xl text-gray-900 text-center">
        Explore All Categories
      </h2>
    </div>
    <div class="categories mt-3 owl-carousel owl-theme text-center">
      <category-card
        class="item"
        v-for="category in categories"
        :key="category.name"
        :category="category"
      />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "owl.carousel";

import CategoryCard from "./CategoryCard.vue";

export default {
  name: "CategoriesSection",
  components: { CategoryCard },
  data() {
    return {
      categories: [
        {
          name: "Construction",
          image: require("@/assets/images/construction.webp"),
        },
        {
          name: "Planning",
          image: require("@/assets/images/planning.webp"),
        },
        {
          name: "Sustainability",
          image: require("@/assets/images/sustainability.webp"),
        },
        {
          name: "Design",
          image: require("@/assets/images/design.webp"),
        },
        {
          name: "Materials",
          image: require("@/assets/images/materials.webp"),
        },
      ],
    };
  },
  mounted() {
    $(".categories").owlCarousel({
      nav: true,
      navText: [
        '<i class="fa fa-arrow-left" ></i>',
        '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
      ],
      dots: false,
      stagePadding: 0,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2,
        },
        500: {
          items: 2,
        },
        600: {
          items: 3,
        },
        800: {
          items: 5,
        },
        1000: {
          items: 6,
        },
        1100: {
          items: 7,
        },
      },
    });
  },
};
</script>

<style>
.owl-carousel .owl-nav {
  position: absolute;
  left: 0;
  top: calc(35%);
  right: 0;
}

.owl-carousel .owl-stage {
  @apply mx-auto;
}

.owl-carousel .owl-nav .owl-prev {
  position: absolute;
  left: 0;
  margin-left: -20px;
  transform: translateY(-50%);
  font-size: 20px;
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 50%;
  @apply bg-yellow-500 !important text-white hover:bg-yellow-600;
  cursor: pointer;
  z-index: 1;
}

.owl-carousel .owl-nav .owl-next {
  position: absolute;
  right: 0;
  margin-right: -20px;
  transform: translateY(-50%);
  font-size: 20px;
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 50%;
  @apply bg-yellow-600 !important text-white;
  cursor: pointer;
  z-index: 1;
}
</style>