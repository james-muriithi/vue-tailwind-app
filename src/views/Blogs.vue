<template>
  <div class="pb-7">
    <bread-crumb :menu="breadcrumbMenu" />
    <div class="container mx-auto mt-4">
      <blog-tabs />
      <div class="mt-5">
        <div class="py-4">
          <h2 class="font-bold text-xl text-gray-900 text-center">
            Construction articles
          </h2>
        </div>
        <div class="my-3">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
            <blog-card v-for="blog in largeBlogs" :key="blog.title" :blog="blog" />
          </div>
        </div>

        <div class="my-3">
          <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
            <blog-card v-for="blog in smallBlogs" :key="blog.title" :blog="blog" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/blogs/BlogCard.vue";
import BlogTabs from "../components/blogs/BlogTabs.vue";
import BreadCrumb from "../components/UI/BreadCrumb.vue";
export default {
  components: { BreadCrumb, BlogTabs, BlogCard },
  name: "Blogs",
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
          name: "Construction",
          url: "/blogs",
        },
      ],
      largeBlogs: [
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.",
          author: "John Doe",
          preview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.",
          image: require("@/assets/images/hero-bg1.jpg"),
          category: "Construction",
          url: "/blogs/lorem-ipsum"
        },
        {
          title: "Title goes here.",
          author: "Jane Doe",
          preview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.",
          image: require("@/assets/images/hero-bg.jpg"),
          category: "Construction",
          url: "/blogs/lorem-ipsum"
        },
      ],
      smallBlogs: [
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.",
          author: "John Doe",
          preview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.",
          image: require("@/assets/images/hero-bg2.webp"),
          category: "Construction",
          url: "/blogs/lorem-ipsum"
        },
        {
          title: "Title goes here.",
          author: "Jane Doe",
          preview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.",
          image: require("@/assets/images/hero-bg3.webp"),
          category: "Construction",
          url: "/blogs/lorem-ipsum"
        },
        {
          title: "Title goes here.",
          author: "Jane Doe",
          preview:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.",
          image: require("@/assets/images/hero-bg4.webp"),
          category: "Construction",
          url: "/blogs/lorem-ipsum"
        },
      ],
    };
  },
};
</script>