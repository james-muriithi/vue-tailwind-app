<template>
  <nav class="nav">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div
        class="
          w-full
          relative
          flex
          justify-between
          md:w-auto
          px-4
          md:px-2
          md:static
          md:block
          md:justify-start
        "
      >
        <router-link class="logo" to="/">
          <span class="sr-only">Keja</span>
          <img
            class="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
        </router-link>
        <button class="btn" type="button">
          <span class="sr-only">Open Menu</span>
          <span class="block relative w-6 h-px rounded-sm bg-black"></span>
          <span class="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
          <span class="block relative w-6 h-px rounded-sm bg-black mt-1"></span>
        </button>
      </div>
      <div
        class="hidden md:flex flex-grow items-center"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col md:flex-row list-none ml-auto">
          <li class="nav-item">
            <router-link to="#"> Design </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#"> Our Process </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#"> Sustainability </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#"> Store </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#"> Inspiration Book </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#"> Cost Estimator </router-link>
          </li>
          <li class="nav-item">
            <router-link to="#"> Blogs </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  @apply relative flex flex-wrap items-center justify-between px-2 py-3 bg-white w-full;
}
.nav-item a {
  @apply md:text-sm px-3 py-2 flex items-center text-base font-medium text-gray-900 hover:text-yellow-600 leading-snug;
}

.router-link-active.router-link-exact-active{
  /* @apply text-yellow-600 */
}

.btn {
  @apply cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none;
}
.logo {
  @apply text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap;
}
</style>