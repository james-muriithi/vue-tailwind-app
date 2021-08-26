<template>
  <div class="grid justify-items-center">
    <div
      class="
        w-5/6
        lg:w-3/4
        bg-white
        rounded-md
        shadow-md
        py-7
        px-4
        border-2
        top--50
      "
    >
      <div class="grid grid-cols-12 gap-2 lg:gap-4">
        <div class="col-span-12 text-center mb-5">
          <h2 class="font-bold text-black text-lg">Book your visit to store</h2>
        </div>
        <div class="col-span-12 sm:col-span-6 md:col-span-5">
          <input type="text" placeholder="Name" class="input-control" />
        </div>
        <div class="col-span-12 sm:col-span-6 md:col-span-5 mt-3 md:mt-0">
          <input
            type="text"
            placeholder="Mobile number"
            class="input-control"
          />
        </div>
        <div class="col-span-12 md:col-span-2 text-center mt-4 md:mt-0">
          <button class="btn">Book Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookVisit",
};
</script>

<style scoped>
.input-control {
  @apply px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white bg-white rounded 
  text-sm border-2 border-gray-200 outline-none focus:outline-none focus:border-gray-300 w-full;
}
.btn {
  @apply rounded-lg h-full px-3 py-2 bg-transparent outline-none shadow-none
  bg-yellow-600 border-solid border-2 text-white uppercase font-medium text-xs;
  min-height: 50px;
}
.top--50 {
  margin-top: -50px;
}
</style>