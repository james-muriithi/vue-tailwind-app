<template>
  <div class="mt-7 pb-5 container mx-auto px-3 sm:px-0">
    <div class="py-4">
      <h2 class="font-bold text-xl text-gray-900 text-center">
        Recent Articles
      </h2>
    </div>
    <div class="">
      <div
        class="grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <div class="row-span-1 md:row-span-3">
          <img
            :src="require('@/assets/images/hero-bg.jpg')"
            alt="article"
            class="shadow rounded-lg w-full h-full align-middle border-none"
          />
        </div>
        <div class="row-span-1 md:row-span-2">
          <img
            :src="require('@/assets/images/hero-bg1.jpg')"
            alt="article"
            class="shadow h-full rounded-lg border-none"
          />
        </div>
        <div class="row-span-1 md:row-span-2">
          <img
            :src="require('@/assets/images/hero-bg.jpg')"
            alt="article"
            class="shadow h-full rounded-lg border-none"
          />
        </div>
        <div class="row-span-1">
          <img
            :src="require('@/assets/images/hero-bg1.jpg')"
            alt="article"
            class="shadow h-full rounded-lg border-none"
          />
        </div>
        <div class="row-span-1 md:row-span-2">
          <img
            :src="require('@/assets/images/hero-bg.jpg')"
            alt="article"
            class="shadow h-full rounded-lg border-none"
          />
        </div>
        <div class="row-span-1">
          <img
            :src="require('@/assets/images/hero-bg.jpg')"
            alt="article"
            class="shadow h-full rounded-lg border-none"
          />
        </div>
        <div class="row-span-1">
          <img
            :src="require('@/assets/images/hero-bg.jpg')"
            alt="article"
            class="shadow h-full rounded-lg border-none"
          />
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