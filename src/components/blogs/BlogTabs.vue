<template>
  <div class="my-3">
    <ul class="flex flex-col md:flex-row list-none">
      <li class="nav-item">
        <router-link to="#"> All </router-link>
      </li>
      <li class="nav-item">
        <router-link to="#" class="active"> Construction </router-link>
      </li>
      <li class="nav-item">
        <router-link to="#"> Planning </router-link>
      </li>
      <li class="nav-item">
        <router-link to="#"> Design </router-link>
      </li>
      <li class="nav-item">
        <router-link to="#"> Sustainability </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/blogs"> Materials </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlogTabs",
};
</script>

<style scoped>
.nav-item a {
  @apply md:text-sm px-3 py-2 flex items-center 
  text-base font-medium text-gray-600 hover:text-yellow-600 leading-snug;
}
.nav-item {
  @apply mt-1 md:mt-0
}
.nav-item a.active {
  @apply bg-yellow-600 text-white rounded-lg;
}
</style>