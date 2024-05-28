<script setup>
import moment from 'moment';

const news = ref(null)

const { data } = await useAsyncData(
    () => $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/news?limit=5')
)

news.value = data.value
</script>
<template>
    <div class="flex mb-10 cursor-pointer" @click="$router.push('/berita/' + news.slug)" v-for="news in news">
        <div class="flex-none w-[140px] md:w-[240px]">
            <v-img min-width="100%" class="rounded-md h-[110px] md:h-[140px]" :src="news.thumbnail"
                alt=""/>
        </div>
        <div class="block pl-4">
            <div class="text-md md:text-xl font-semibold">
                <span>{{ news.title.slice(0, 40) }}...</span>
            </div>
            <div class="text-md flex items-center font-medium mt-1">
                <IconsDate />
                <span class="text-sm md:text-md ml-1">{{ moment(news.created_at).format("LL") }}</span>
            </div>
            <div class="mt-2 hidden md:flex">
                <span class="text-sm md:text-base font-normal">{{ news.description }}</span>
            </div>
            <div class="mt-2 flex md:hidden">
                <span class="text-sm md:text-base">{{ news.description.substring(0, 70) }}...</span>
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