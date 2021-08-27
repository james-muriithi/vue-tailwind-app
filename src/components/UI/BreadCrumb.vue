<template>
  <div
    class="
      container
      mx-auto
      mb-5
      bread-crumb
      text-xs
      font-semibold
      text-gray-400
    "
  >
    <router-link to="#" class="item">Home</router-link>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
};
</script>

<style scoped>
.bread-crumb .item:last-child {
  @apply text-gray-700;
}
.bread-crumb .item:not(:last-child):after {
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  font-family: "FontAwesome";
  @apply font-semibold px-2 text-gray-400;
  content: "\f054";
  font-size: 9px;
}
</style>