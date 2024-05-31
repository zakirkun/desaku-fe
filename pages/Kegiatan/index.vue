<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: 'Kegiatan'
});

import moment from 'moment';

const news = ref(null)
const page = ref(1)
const pageLength = ref(0)

const { data, total } = await $fetch('/api/kegiatan?limit=5&page=1')

news.value = data
pageLength.value = Math.ceil(total / 5)

async function changePage() {
    const { data } = await $fetch(`/api/kegiatan?limit=5&page=${page.value}`)

    news.value = data
    document.getElementById("list_kegiatan").scrollIntoView({ behavior: 'smooth' })
}
</script>
<template>
    <div class="animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem]  pt-6">
        <BreadCrumb>
            <template v-slot:root>
                <span>Kegiatan</span>
            </template>
        </BreadCrumb>
        <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12">
            <div class="block col-span-1 md:col-span-4">
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl sm:text-2xl font-semibold py-3">
                    <span>Kegiatan <span v-if="page != 1">: Halaman {{ page }}</span></span>
                </div>
                <div @click="$router.push('/kegiatan/' + news.slug)" class="cursor-pointer animate-fade flex mb-10"
                    v-for="news in news">
                    <div class="h-[120px] sm:h-[160px] w-[140px] sm:w-[220px] md:w-[260px] flex-none">
                        <v-img :lazy-src="news.thumbnail" height="100%" aspect-ratio="4/3" :src="news.thumbnail" />
                    </div>
                    <div class="block pl-4">
                        <div class="tetx-base md:text-xl font-semibold">
                            <span class="line-clamp-2">{{ news.title }}</span>
                        </div>
                        <div class="text-xs md:text-base block md:flex items-center font-medium mt-2">
                            <IconsDate />
                            <span class="ml-1 mr-2">{{ moment(news.created_at).format("LL") }}</span>
                        </div>
                        <div class="mt-2 text-sm md:text-base">
                            <span class="line-clamp-2 sm:line-clamp-3">{{ news.description }}</span>
                        </div>
                    </div>
                </div>
                <v-pagination :size="$vuetify.display.mobile ? 'small' : 'default'" class="mt-4 mb-14" v-model="page"
                    @update:modelValue="changePage" :total-visible="5" :length="pageLength"></v-pagination>
            </div>
            <div class="col-span-2">
                <PartialsLatestActivities />
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