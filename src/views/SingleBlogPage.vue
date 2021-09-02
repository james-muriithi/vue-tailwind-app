<template>
  <div class="pb-7 px-3">
    <bread-crumb :menu="breadcrumbMenu" />
    <div class="container mx-auto mt-9">
      <div class="grid grid-cols-1 gap-3 md:grid-cols-12">
        <div class="md:col-span-3 order-3 md:order-1 mt-5 md:mt-0">
          <div ref="left_side" class="left">
            <quick-links class="rounded-xl" />
            <explore-categories class="mt-7 rounded-xl" />
          </div>
        </div>
        <div class="md:col-span-6 order-1 md:order-2 mt-5 md:mt-0" ref="blog">
          <single-blog class="rounded-xl" />
        </div>
        <div class="md:col-span-3 order-2 md:order-3 mt-5 md:mt-0">
          <div ref="right_side" class="right">
            <book-visit class="rounded-xl" />
            <explore-products class="mt-7 rounded-xl" />
          </div>
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
  computed: {
    leftSide() {
      return this.$refs.left_side;
    },
    rightSide() {
      return this.$refs.right_side;
    },
    leftSideOffset() {
      return this.leftSide.offsetTop;
    },
    blogOffsetHeIght() {
      return this.$refs.blog.offsetHeight;
    },
  },
  methods: {
    removeSticky() {
      const deviceWidth =
        window.innerWidth > 0 ? window.innerWidth : screen.width;
      if (deviceWidth < 768) {
        this.leftSide.classList.remove("sticky");
        this.rightSide.classList.remove("sticky");
      } else {
        this.addSticky();
      }
    },
    addSticky() {
      const deviceWidth =
        window.innerWidth > 0 ? window.innerWidth : screen.width;

      this.rightSide.style.marginTop = 0;

      if (window.pageYOffset > this.leftSideOffset - 50 && deviceWidth > 768) {
        this.leftSide.classList.add("sticky");
        this.rightSide.classList.add("sticky");
      } else {
        this.leftSide.classList.remove("sticky");
        this.rightSide.classList.remove("sticky");
      }
    },
  },
  created() {
    const self = this;
    window.onscroll = function () {
      self.addSticky();
    };

    window.onresize = function () {
      console.log(window.innerWidth);
      self.removeSticky();
    };
  },
};
</script>

<style scoped>
.sticky {
  position: fixed;
  top: 50px;
  width: 300px;
}
@media screen and (max-width: 1200px) {
  .sticky {
    width: 250px;
  }
  .left {
    left: 30px;
  }
}
@media screen and (max-width: 976px) {
  .sticky {
    width: 220px;
  }
}
@media screen and (max-width: 914px) {
  .sticky {
    width: 190px;
  }
  .left {
    left: 10px;
  }
}
@media screen and (max-width: 768px) {
  .sticky {
    width: 180px;
  }
  .left {
    left: 10px;
  }
}
</style>