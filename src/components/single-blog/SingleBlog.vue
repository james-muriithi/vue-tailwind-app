<template>
  <single-blog-card class="mb-5">
    <div class="flex">
      <button class="btn-category">Construction</button>
      <div class="ml-auto md:mr-5">
        <i class="fa fa-bookmark text-2xl text-yellow-600" aria-hidden="true"></i>
      </div>
    </div> 
    <h2 class="text-gray-900 text-xl font-semibold my-3 w-5/6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </h2>
    <div class="author">
      <p class="text-xs text-gray-400 italic">By John Doe</p>
    </div>

    <div class="story mt-5 text-md text-gray-700 font-medium pb-5">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Placerat orci nulla
        pellentesque dignissim enim sit. Tortor posuere ac ut consequat. Donec
        massa sapien faucibus et. Turpis tincidunt id aliquet risus feugiat.
        Tellus at urna condimentum mattis pellentesque id. Risus in hendrerit
        gravida rutrum quisque. Consectetur adipiscing elit pellentesque
        habitant morbi tristique. Sollicitudin aliquam ultrices sagittis orci.
        Libero volutpat sed cras ornare arcu. Massa tempor nec feugiat nisl
        pretium fusce id velit ut. Volutpat est velit egestas dui id ornare arcu
        odio. Dolor sit amet consectetur adipiscing elit. Etiam non quam lacus
        suspendisse faucibus interdum posuere lorem. A cras semper auctor neque
        vitae tempus quam pellentesque nec. Habitant morbi tristique senectus et
        netus et malesuada fames ac.
      </p>
      <div class="image">
        <img
          :src="require('@/assets/images/hero-bg2.webp')"
          alt="product.imageAlt"
          class="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <p class="mt-7">
        Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Phasellus
        vestibulum lorem sed risus. Orci dapibus ultrices in iaculis nunc sed.
        Senectus et netus et malesuada fames ac turpis. Quis lectus nulla at
        volutpat. Adipiscing enim eu turpis egestas pretium aenean. Dolor morbi
        non arcu risus quis. Pulvinar elementum integer enim neque volutpat ac
        tincidunt. Phasellus faucibus scelerisque eleifend donec pretium
        vulputate sapien nec. Porttitor massa id neque aliquam vestibulum morbi.
      </p>

      <h2 class="text-gray-900 text-md font-bold my-4">
        Lorem ipsum dolor sit amet.
      </h2>

      <p class="mt-3">
        Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Phasellus
        vestibulum lorem sed risus. Orci dapibus ultrices in iaculis nunc sed.
        Senectus et netus et malesuada fames ac turpis. Quis lectus nulla at
        volutpat. Adipiscing enim eu turpis egestas pretium aenean. Dolor morbi
        non arcu risus quis. Pulvinar elementum integer enim neque volutpat ac
        tincidunt. Phasellus faucibus scelerisque eleifend donec pretium
        vulputate sapien nec. Porttitor massa id neque aliquam vestibulum morbi.
      </p>

      <h2 class="text-gray-900 text-md font-bold my-4">
        Lorem ipsum dolor sit amet.
      </h2>

      <p class="mt-3">
        Sed enim ut sem viverra aliquet eget sit amet tellus. Non diam phasellus
        vestibulum lorem sed risus ultricies. Risus nullam eget felis eget.
        Tincidunt augue interdum velit euismod in pellentesque massa placerat.
        Vivamus arcu felis bibendum ut tristique. Leo vel fringilla est
        ullamcorper eget. Ut tortor pretium viverra suspendisse potenti nullam.
        Enim neque volutpat ac tincidunt vitae. At ultrices mi tempus imperdiet
        nulla malesuada. Elit ut aliquam purus sit. Laoreet suspendisse interdum
        consectetur libero id faucibus nisl tincidunt eget. Pellentesque elit
        eget gravida cum sociis natoque.
      </p>
    </div>
  </single-blog-card>
</template>

<script>
import SingleBlogCard from "./SingleBlogCard.vue";

export default {
  name: "SingleBlog",
  components: { SingleBlogCard },
};
</script>

<style scoped>
.story {
  line-height: 33px;
}
.story .image {
  @apply w-full rounded-md overflow-hidden group-hover:opacity-75 lg:h-96 mt-7;
}
</style>