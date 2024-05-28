<script setup>
import moment from 'moment';

definePageMeta({
    layout: 'app'
});

const route = useRouter().currentRoute.value
const news = ref(null)
const newsCategory = ref(null)

const { data } = await useAsyncData(
    () => $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/news?category=' + route.params.id)
)

news.value = data.value.data
newsCategory.value = data.value.category_name
</script>
<template>
    <Head>
        <Title>Berita: {{ newsCategory }}</Title>
    </Head>
    <div class="animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem]  pt-6">
        <div class="flex mb-6 items-center bg-[#f0f0f0] pa-3 rounded-lg">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024">
                    <path fill="#0088CC"
                        d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5" />
                </svg>
            </div>
            <div>
                <div class="ml-2 text-sm md:text-base">
                    <span class="cursor-pointer" @click="$router.push('/berita')">/ &nbsp; Berita
                        &nbsp;</span><span>/ &nbsp;{{ newsCategory }}</span>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12">
            <div class="block col-span-1 md:col-span-4">
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl sm:text-2xl font-semibold py-3">
                    <span>Berita: {{ newsCategory }}</span>
                </div>
                <div @click="$router.push('/berita/' + news.slug)"
                    class="cursor-pointer flex mb-[0.5rem] md:mb-2 h-[160px] md:h-[200px]" v-for="news in news">
                    <div class="w-[160px] md:w-[240px] h-full flex-none">
                        <img class="rounded-md h-[120px] md:h-[160px] w-full object-cover" :src="news.thumbnail" alt="">
                    </div>
                    <div class="block pl-4">
                        <div class="tetx-base md:text-xl font-semibold">
                            <span class="hidden md:flex">{{ news.title }}</span>
                            <span class="flex md:hidden">{{ news.title.slice(0, 40) }}...</span>
                        </div>
                        <div class="text-sm md:text-base flex items-center font-medium mt-2">
                            <IconsDate />
                            <span class="ml-1">{{ moment(news.created_at).format("LL") }}</span>
                        </div>
                        <div class="mt-2 text-sm md:text-base">
                            <span class="hidden md:flex">{{ news.description }}</span>
                            <span class="flex md:hidden">{{ news.description.slice(0, 50) }}...</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-2">
                <PartialsNewsCategory />
                <PartialsLatestNews />
            </div>
        </div>
    </div>
</template>
