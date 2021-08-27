<template>
  <single-blog-card>
    <ul class="list-none text-xs font-medium text-gray-700 py-2">
      <li class="my-1 active">
        <router-link to="#" class="py-1">
          Lorem ipsum dolor sit amet elit
        </router-link>
      </li>
      <li class="py-1">
        <router-link to="#" class="py-1">
          Lorem ipsum dolor sit amet elit
        </router-link>
      </li>
      <li class="py-1">
        <router-link to="#" class="py-1">
          Lorem ipsum dolor sit amet elit
        </router-link>
      </li>
      <li class="py-1">
        <router-link to="#" class="py-1">
          Lorem ipsum dolor sit amet elit
        </router-link>
      </li>
      <li class="py-1">
        <router-link to="#" class="py-1">
          Lorem ipsum dolor sit amet elit
        </router-link>
      </li>
    </ul>
  </single-blog-card>
</template>

<script>
import SingleBlogCard from "./SingleBlogCard.vue";
export default {
  name: "QuickLinks",
  components: { SingleBlogCard },
};
</script>

<style scoped>
ul li.active {
  @apply text-yellow-600 border-l-2 border-yellow-600 pl-2;
}
</style>