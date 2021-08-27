<template>
  <div class="card">
    <router-link to="#">
      <div class="h-16 w-16 mt-3 mx-auto">
        <img
          :src="category.image"
          alt="product.imageAlt"
          class="w-full h-full object-center object-cover"
        />
      </div>
      <div class="category_name text-center pt-5">
        <h6 class="font-semibold text-gray-900">{{ category.name }}</h6>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "CategoryCard",
  props: {
    category: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped>
.card {
  @apply flex-shrink-0 w-36 h-36 border border-gray-200 rounded-md overflow-hidden p-3 bg-white mx-auto;
}
</style>