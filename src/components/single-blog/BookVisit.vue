<template>
  <single-blog-card>
    <h3 class="font-semibold text-gray-900 text-sm">
      Book your visit to store
    </h3>
    <p class="text-xs text-gray-500 py-1">Lorem ipsum dolor sit amet elit.</p>
    <div class="mt-1">
      <div class="mb-1">
        <input type="text" placeholder="Name" class="input-control" />
      </div>
      <div class="mt-2">
        <input type="text" placeholder="Name" class="input-control" />
      </div>
      <div class="mt-4">
        <button
          class="
            uppercase
            text-sm
            rounded-md
            text-white
            py-2
            bg-yellow-600
            w-full
            text-center
          "
        >
          Book Now
        </button>
      </div>
    </div>
  </single-blog-card>
</template>

<script>
import SingleBlogCard from "./SingleBlogCard.vue";

export default {
  name: "BookVisit",
  components: { SingleBlogCard },
}
</script>

<style scoped>
.input-control {
  @apply py-2;
}
</style>