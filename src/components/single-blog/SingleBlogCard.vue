<template>
    <div class="card">
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
    @apply p-5 shadow-sm w-full rounded-md bg-white;
}
</style>