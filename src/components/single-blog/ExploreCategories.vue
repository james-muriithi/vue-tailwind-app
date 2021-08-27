<template>
  <single-blog-card>
    <h3 class="font-bold text-gray-900 text-sm">Explore all categories</h3>
    <div class="mt-1">
      <div class="image">
        <img
          :src="require('@/assets/images/hero-bg2.webp')"
          alt="product.imageAlt"
          class="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <p class="font-semibold mt-3 text-gray-700 text-xs">
          Lorem ipsum is simply dummy text of printing and typesetting
      </p>
      <div class="mt-4">
        <router-link to="#"
          class="
            uppercase
            text-sm
            rounded-md
            border-2 border-yellow-600
            text-yellow-600
            py-2
            bg-transparent
            w-full
            inline-block
            text-center
          "
        >
          View All
        </router-link>
      </div>
    </div>
  </single-blog-card>
</template>

<script>
import SingleBlogCard from "./SingleBlogCard.vue";

export default {
  name: "ExploreCategories",
  components: { SingleBlogCard },
};
</script>

<style scoped>
.input-control {
  @apply py-2;
}
.image {
  @apply w-full rounded-md overflow-hidden group-hover:opacity-75 lg:h-24 mt-4;
}
</style>