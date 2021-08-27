<template>
  <div class="pb-7 px-3">
    <bread-crumb :menu="breadcrumbMenu" />
    <div class="container mx-auto mt-7">
      <div class="grid grid-cols-1 gap-3 md:grid-cols-12">
        <div class="lg:col-span-2 md:col-span-3 order-3 md:order-1 mt-5 md:mt-0">
          <quick-links />
          <explore-categories class="mt-7" />
        </div>
        <div class="lg:col-span-8 md:col-span-6 order-1 md:order-2 mt-5 md:mt-0">
          <single-blog />
        </div>
        <div class="lg:col-span-2 md:col-span-3 order-2 md:order-3 mt-5 md:mt-0">
          <book-visit />
          <explore-products class="mt-7" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookVisit from "../components/single-blog/BookVisit.vue";
import QuickLinks from "../components/single-blog/QuickLinks.vue";
import SingleBlog from "../components/single-blog/SingleBlog.vue";
import ExploreCategories from "../components/single-blog/ExploreCategories.vue";
import ExploreProducts from "../components/single-blog/ExploreProducts.vue";

export default {
  name: "SingleBlogPage",
  components: {
    QuickLinks,
    BookVisit,
    SingleBlog,
    ExploreCategories,
    ExploreProducts,
  },
  data() {
    return {
      breadcrumbMenu: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "Blogs",
          url: "/blogs",
        },
        {
          name: "Single Blog",
          url: "#",
        },
      ],
    };
  },
};
</script>
