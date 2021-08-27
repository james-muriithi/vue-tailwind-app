<template>
  <the-navbar />
  <router-view />
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
</style>