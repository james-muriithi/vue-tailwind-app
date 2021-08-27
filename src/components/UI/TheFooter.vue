<template>
  <div class="bg-white p-5 w-full">
    <div class="container mx-auto">
      <div class="pt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="md:mx-auto md:mt-0 mt-3">
          <router-link class="logo" to="/">
            <span class="sr-only">Keja</span>
            <img
              class="h-8 w-auto sm:h-16"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </router-link>
        </div>
        <div class="md:mx-auto md:mt-0 mt-3 contact-details">
          <div class="title font-semibold text-gray-800 text-lg">
            Get in touch
          </div>
          <div class="contacts mt-3 font-normal text-sm block">
            <a href="tel:+254712345678" class="block">
              <i class="fa fa-phone"></i>
              <span class="ml-3">+254712345678</span>
            </a>
            <a class="block pt-3" href="mailto:muriithijames556@gmail.com">
              <i class="fa fa-envelope"></i>
              <span class="ml-3">muriithijames556@gmail.com</span>
            </a>
          </div>
        </div>
        <div class="md:mx-auto md:mt-0 mt-3">
          <div class="social-icons w-full">
            <div class="title font-semibold text-gray-800 text-lg">
              Follow Us
            </div>
            <div class="icons">
              <a href="#"><i class="fa fa-facebook"></i></a
              ><a href="#"><i class="fa fa-instagram"></i></a
              ><a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <div class="divide-x-2 border bg-gray-300"></div>
        <div class="mt-5 text-xs flex mr-5">
          <div class="">© Resido Copyright</div>
          <ul class="flex-col hidden lg:flex-row list-none ml-auto">
            <li class="nav-item">
              <router-link to="#"> Design </router-link>
            </li>
            <li class="nav-item">
              <router-link to="#"> Our Process </router-link>
            </li>
            <li class="nav-item">
              <router-link to="#"> Inspiration Book </router-link>
            </li>
            <li class="nav-item">
              <router-link to="#"> Privacy Policy </router-link>
            </li>
            <li class="nav-item">
              <router-link to="#"> Blogs </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped>
.icons a {
  @apply mr-4;
}
.nav-item a {
  @apply md:text-sm px-3 flex items-center text-base font-medium text-gray-400 hover:text-yellow-600 leading-snug;
}
</style>