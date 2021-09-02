<template>
    <div class="card rounded-md">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "SingleBlogCard",
}
</script>

<style scoped>
.card{
    @apply p-5 shadow-sm w-full bg-white;
}
</style>