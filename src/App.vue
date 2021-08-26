<template>
  <the-navbar />
  <router-view />
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
  }
}
</style>