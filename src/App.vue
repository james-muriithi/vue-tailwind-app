<template>
  <the-navbar />
  <router-view class="content" />
  <the-footer />
</template>

<style>
html,
body {
  font-family: "Inter", sans-serif;
}
@supports (font-variation-settings: normal) {
  html,
  body {
    font-family: "Inter var", sans-serif;
    background: #f1f1f1;
  }
}
.input-control {
  @apply px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white bg-white rounded 
  text-sm border-2 border-gray-200 outline-none focus:outline-none focus:border-gray-300 w-full;
}
.btn-category {
  @apply rounded-full px-3 text-gray-700;
  background: #f0eade;
  font-size: 11px;
  padding-top: 7px;
  padding-bottom: 7px;
}
.sticky-nav~.content{
  margin-top: 120px;
}
</style>