<template>
  <section class="hero-section">
    <div
      class="container mx-auto h-full md:rounded-md rounded-none pl-5"
      :style="backgroundImage"
    >
      <div class="h-full flex items-center px-1 md:px-5 xs:w-full w-4/5 lg:w-1/2">
        <div class="block">
          <h1 class="text-white text-4xl font-semibold pb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </h1>
          <div class="read-more mt-5 pl-3">
            <router-link to="/blogs/lorem-ipsum" 
              class="
                rounded
                px-4
                py-3
                bg-transparent
                border-white border-solid border-2
                text-white
                uppercase
                font-medium
                text-sm
              "
            >
              Read Article
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  computed: {
    backgroundImage() {
      return `background: linear-gradient(180deg,transparent,rgba(0,0,0,0.6) 70%,rgba(0,0,0,.9) 100%), 
          url("${require("@/assets/images/hero-bg1.jpg")}") center center / cover no-repeat;`;
    },
  },
};
</script>

<style scoped>
.hero-section {
  height: 550px;
}
</style>