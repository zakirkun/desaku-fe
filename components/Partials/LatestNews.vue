<script setup>
import moment from 'moment';

const news = ref(null)
const { data } = await useAsyncData(
    () => $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/news?limit=5')
)

news.value = data.value
</script>
<template>
    <div class="text-[#0088CC] border-[#0088CC] border-b-2 mt-5 mb-6 text-xl sm:text-2xl font-semibold py-3">
        <span>Berita Terbaru</span>
    </div>
    <div class="mb-10">
        <div @click="$router.push('/berita/' + news.slug)"
            class="cursor-pointer mb-2 px-2 py-3 flex items-center" v-for="news in news">
            <div class="w-[140px] h-full flex-none">
                <v-img min-width="100%" class="rounded-md" :src="news.thumbnail" alt="" />
            </div>
            <div class="block ml-3">
                <div class="text-[#0088CC] text-base font-medium">
                    <span v-if="news.title.length > 60">{{ news.title.slice(0, 60) }}...</span>
                    <span v-else>{{ news.title }}</span>
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
    height: 80px;
    object-fit: cover;
}
</style>