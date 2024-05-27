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
        <div class="w-fit flex-none">
            <img class="rounded-md w-[140px] sm:w-[200px] md:w-[250px] h-[110px] md:h-[140px]" :src="news.thumbnail"
                alt="">
        </div>
        <div class="block pl-4">
            <div class="text-md md:text-xl font-semibold">
                <span>{{ news.title }}</span>
            </div>
            <div class="text-md flex items-center font-medium mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                    <g fill="none">
                        <rect width="18" height="15" x="3" y="6" stroke="#A3A3A3" rx="2" />
                        <path fill="black"
                            d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10z" />
                        <path stroke="#A3A3A3" stroke-linecap="round" d="M7 3v3m10-3v3" />
                        <rect width="4" height="2" x="7" y="12" fill="#A3A3A3" rx=".5" />
                        <rect width="4" height="2" x="7" y="16" fill="#A3A3A3" rx=".5" />
                        <rect width="4" height="2" x="13" y="12" fill="#A3A3A3" rx=".5" />
                        <rect width="4" height="2" x="13" y="16" fill="#A3A3A3" rx=".5" />
                    </g>
                </svg>
                <span class="text-sm md:text-md">{{ moment(news.created_at).format("LL") }}</span>
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