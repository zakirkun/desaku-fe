<script setup>
import moment from 'moment';

const news = ref(null)
news.value = (await $fetch('/api/berita?limit=5')).data
</script>
<template>
    <div class="text-[#0088CC] border-[#0088CC] border-b-2 mt-5 mb-6 text-xl sm:text-2xl font-semibold py-3">
        <span>Berita Terbaru</span>
    </div>
    <div class="mb-10">
        <div @click="$router.push('/berita/' + news.slug)"
            class="cursor-pointer px-0 py-3 flex" v-for="news in news">
            <div class="w-[140px] flex-none">
                <v-img :lazy-src="news.thumbnail" class="w-full" height="80" :src="news.thumbnail" alt="" />
            </div>
            <div class="block ml-3">
                <div class="text-[#0088CC] text-base font-medium">
                    <span class="line-clamp-2">{{ news.title }}</span>
                </div>
                <div class="mt-1">
                    <span>{{ moment(news.created_at).format("LL") }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
::v-deep img {
    border-radius: 6px;
    width: 100%;
    object-fit: cover;
}
</style>