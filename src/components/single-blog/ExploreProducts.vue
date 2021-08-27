<template>
  <single-blog-card>
    <h3 class="font-bold text-gray-900 text-sm">Products</h3>
    <div class="mt-2">
      <div class="divide-x-2 border bg-gray-300"></div>
      <div class="image">
        <img
          :src="require('@/assets/images/1.jpg')"
          alt="product.imageAlt"
          class="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <h4 class="font-bold my-2 text-gray-700 text-sm">Lorem ipsum</h4>
      <p class="font-medium mt-1 text-gray-700 text-xs">
          Lorem ipsum is simply dummy text of printing and typesetting
      </p>
      <div class="mt-3 w-full">
        <div class="divide-x-2 border bg-gray-300 mb-2"></div>
        <router-link
          to="#"
          class="
            uppercase
            text-sm text-yellow-600
            inline-block
            bg-transparent
            w-full
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
  name: "ExploreProducts",
  components: { SingleBlogCard },
};
</script>

<style scoped>
.image {
  @apply w-full rounded-md overflow-hidden group-hover:opacity-75 lg:h-24 mt-4;
}
</style>