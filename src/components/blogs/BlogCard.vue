<template>
  <router-link :to="blog.url" class="bg-white mt-3 pb-5 rounded-b-md">
    <div class="card-header">
      <img
        :src="blog.image"
        alt="product.imageAlt"
        class="w-full h-full object-center object-cover lg:w-full lg:h-full"
      />
    </div>
    <div class="card-body">
      <button class="btn-category">{{blog.category}}</button>
      <div class="title mt-2">
        <h3
          class="
            text-gray-900 text-md
            font-semibold
            my-3
            w-5/6
            pl-3
            border-l-4 border-green-600
          "
        >
          {{ blog.title }}
        </h3>
      </div>

      <div class="author">
        <p class="text-xs text-gray-400 italic">By {{ blog.author }}</p>
      </div>

      <div class="preview my-3">
        <p class="text-sm text-gray-500">
          {{ blog.preview }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-header {
  @apply w-full bg-gray-200 rounded-t-md overflow-hidden group-hover:opacity-75 lg:h-64;
}
.card-body {
  @apply mt-3 px-4;
}
</style>