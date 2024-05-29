<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: 'Berita'
});

import moment from 'moment';

const news = ref(null)
const page = ref(1)
const pageLength = ref(0)

const { data, total } = await $fetch('/api/berita?limit=5&page=1')

news.value = data
pageLength.value = Math.ceil(total / 5)

async function changePage() {
    const { data } = await $fetch(`/api/berita?limit=5&page=${page.value}`)

    news.value = data
    document.getElementById("list_berita").scrollIntoView({ behavior: 'smooth' })
}
</script>
<template>
    <div class="animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem]  pt-6">
        <div class="flex mb-6 items-center bg-[#f0f0f0] pa-3 rounded-lg">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024">
                    <path fill="#0088CC"
                        d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5" />
                </svg>
            </div>
            <div id="list_berita">
                <span>/ Berita</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12">
            <div class="block col-span-1 md:col-span-4">
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl sm:text-2xl font-semibold py-3">
                    <span>Berita <span v-if="page != 1">: Halaman {{ page }}</span></span>
                </div>
                <div @click="$router.push('/berita/' + news.slug)"
                    class="cursor-pointer animate-fade flex mb-10"
                    v-for="news in news">
                    <div class="h-[120px] sm:h-[160px] w-[140px] sm:w-[220px] md:w-[260px] flex-none">
                        <v-img :lazy-src="news.thumbnail" height="100%" aspect-ratio="4/3"
                            :src="news.thumbnail" />
                    </div>
                    <div class="block pl-4">
                        <div class="tetx-base md:text-xl font-semibold">
                            <span class="line-clamp-2">{{ news.title }}</span>
                        </div>
                        <div class="text-xs md:text-base block md:flex items-center font-medium mt-2">
                            <div class="flex">
                                <IconsDate />
                                <span class="ml-1 mr-2">{{ moment(news.created_at).format("LL") }}</span>
                            </div>
                            <div class="hidden sm:flex">
                                <IconsTag />
                                <span class="ml-1">{{ news.name }}</span>
                            </div>
                        </div>
                        <div class="mt-2 text-sm md:text-base">
                            <span class="line-clamp-2 sm:line-clamp-3">{{ news.description }}</span>
                        </div>
                    </div>
                </div>
                <v-pagination class="mt-4 mb-14" v-model="page" @update:modelValue="changePage" :total-visible="5"
                    :length="pageLength"></v-pagination>
            </div>
            <div class="col-span-2">
                <PartialsNewsCategory />
                <PartialsLatestNews />
            </div>
        </div>
    </div>
</template>
<style scoped>
::v-deep img {
    border-radius: 6px;
    object-fit: cover;
}
</style>