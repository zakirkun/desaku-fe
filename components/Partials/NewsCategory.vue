<script setup>
const newsCategory = ref(null)

newsCategory.value = await $fetch('/api/news-category?allow_empty=false')
</script>
<template>
    <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-4 text-xl sm:text-2xl font-semibold py-3">
        <span>Kategori</span>
    </div>
    <div class="flex flex-wrap">
        <div @click="$router.push('/berita/category/' + category.slug)" class="bg-[#0088CC] cursor-pointer font-medium text-white pa-2 mr-2 mt-2 text-sm w-fit rounded-full"
            v-for="category in newsCategory">
            <span>{{ category.name }}</span>
        </div>
    </div>
</template>