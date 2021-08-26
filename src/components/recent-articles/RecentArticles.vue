<template>
  <div class="mt-7 pb-5 container mx-auto px-3 sm:px-0">
    <div class="py-4">
      <h2 class="font-bold text-xl text-gray-900 text-center">
        Recent Articles
      </h2>
    </div>
    <div class="articles">
      <div
        class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <div class="row-span-1 md:row-span-3 relative">
          <img
            :src="require('@/assets/images/hero-bg.jpg')"
            alt="article"
            class="shadow rounded-lg w-full h-full align-middle border-none"
          />
          <div class="article bottom-left text-white">
            <router-link
              to="#"
              class="
                bg-white
                text-gray-800
                px-4
                py-2
                rounded-full
                text-xs
                font-semibold
              "
            >
              Construction
            </router-link>
            <h3 class="text-white text-md font-medium pb-3 mt-2 pt-1 w-5/6">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </h3>
          </div>
        </div>

        <div class="row-span-1 md:row-span-2 relative">
          <img
            :src="require('@/assets/images/hero-bg1.jpg')"
            alt="article"
            class="shadow h-full rounded-lg border-none"
          />

          <div class="article bottom-left text-white">
            <router-link
              to="#"
              class="
                bg-white
                text-gray-800
                px-4
                py-2
                rounded-full
                text-xs
                font-semibold
              "
            >
              Design
            </router-link>
            <h3 class="text-white text-md font-medium pb-3 mt-2 pt-1">
              Blog name goes here
            </h3>
          </div>
        </div>

        <div class="row-span-1 md:row-span-2 relative">
          <img
            :src="require('@/assets/images/hero-bg.jpg')"
            alt="article"
            class="shadow h-full rounded-lg border-none"
          />
          <div class="article bottom-left text-white">
            <router-link
              to="#"
              class="
                bg-white
                text-gray-800
                px-4
                py-2
                rounded-full
                text-xs
                font-semibold
              "
            >
              Construction
            </router-link>
            <h3 class="text-white text-md font-medium pb-3 mt-2 pt-1">
              Blog name goes here
            </h3>
          </div>
        </div>

        <div class="row-span-1 relative">
          <img
            :src="require('@/assets/images/hero-bg1.jpg')"
            alt="article"
            class="shadow h-full rounded-lg border-none"
          />
          <div class="article bottom-left text-white">
            <router-link
              to="#"
              class="
                bg-white
                text-gray-800
                px-4
                py-2
                rounded-full
                text-xs
                font-semibold
              "
            >
              Design
            </router-link>
            <h3 class="text-white text-md font-medium pb-3 mt-2 pt-1">
              Blog name goes here
            </h3>
          </div>
        </div>

        <div class="row-span-1 md:row-span-2 relative">
          <img
            :src="require('@/assets/images/hero-bg.jpg')"
            alt="article"
            class="shadow h-full rounded-lg border-none"
          />
          <div class="article bottom-left text-white">
            <router-link
              to="#"
              class="
                bg-white
                text-gray-800
                px-4
                py-2
                rounded-full
                text-xs
                font-semibold
              "
            >
              Design
            </router-link>
            <h3 class="text-white text-md font-medium pb-3 mt-2 pt-1">
              Blog name goes here
            </h3>
          </div>
        </div>

        <div class="row-span-1 relative">
          <img
            :src="require('@/assets/images/hero-bg.jpg')"
            alt="article"
            class="shadow h-full rounded-lg border-none"
          />
          <div class="article bottom-left text-white">
            <router-link
              to="#"
              class="
                bg-white
                text-gray-800
                px-4
                py-2
                rounded-full
                text-xs
                font-semibold
              "
            >
              Design
            </router-link>
            <h3 class="text-white text-md font-medium pb-3 mt-2 pt-1">
              Blog name goes here
            </h3>
          </div>
        </div>

        <div class="row-span-1 relative">
          <img
            :src="require('@/assets/images/hero-bg.jpg')"
            alt="article"
            class="shadow h-full rounded-lg border-none"
          />

          <div class="article bottom-left text-white">
            <router-link
              to="#"
              class="
                bg-white
                text-gray-800
                px-4
                py-2
                rounded-full
                text-xs
                font-semibold
              "
            >
              Design
            </router-link>
            <h3 class="text-white text-md font-medium pb-3 mt-2 pt-1">
              Blog name goes here
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentArticles",
};
</script>

<style scoped>
.bottom-left {
  background: linear-gradient(
    180deg,
    transparent,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.9) 100%
  );
  position: absolute;
  bottom: 0%;
  left: 0;
  padding-left: 16px;
  right: 0;
  @apply pb-5;
}
</style>