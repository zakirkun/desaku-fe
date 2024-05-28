<script setup>
import moment from 'moment';

const potensi = ref([])
const latestPotensi = ref([])
const potensiCategory = ref([])

const { data } = await useAsyncData(
    () => $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/potensi-desa')
)

potensi.value = data.value.data

const { data: latestPotensiData } = await useAsyncData(
    () => $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/potensi-desa?limit=5')
)

latestPotensi.value = latestPotensiData.value.data

const { data: potensiCategoryData } = await useAsyncData(
    () => $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/potensi-category')
)

potensiCategory.value = potensiCategoryData.value

definePageMeta({
    layout: 'app'
});

useHead({
    title: 'Potensi Desa'
});
</script>

<template>
    <div class="flex-1 animate-fade block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem]  pt-6">
        <div class="flex mb-6 items-center bg-[#f0f0f0] pa-3 rounded-lg">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024">
                    <path fill="#0088CC"
                        d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5" />
                </svg>
            </div>
            <div>
                <span>/ Potensi Desa</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12 h-full">
            <div class="block col-span-1 md:col-span-4">
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3">
                    <span>Potensi Desa</span>
                </div>
                <div v-if="potensi.length > 0" @click="navigateTo('/potensi-desa/' + potensi.slug)"
                    class="cursor-pointer flex mb-[0.5rem] md:mb-2 h-[160px] md:h-[200px]" v-for="potensi in potensi">
                    <div class="w-[140px] sm:w-[240px] h-full flex-none">
                        <v-img class="h-[100px] md:h-[160px] w-full" :src="potensi.thumbnail"
                            alt=""/>
                    </div>
                    <div class="block pl-4">
                        <div class="tetx-base md:text-xl font-semibold">
                            <span class="hidden md:flex">{{ potensi.title }}</span>
                            <span class="flex md:hidden">{{ potensi.title.slice(0, 30) }}...</span>
                        </div>
                        <div class="block md:flex">
                            <div class="text-xs md:text-base flex items-center font-medium mt-2">
                                <IconsDate />
                                <span class="ml-1">{{ moment(potensi.created_at).format("LL") }}</span>
                            </div>
                            <div class="text-xs md:text-base flex items-center font-medium mt-2 sm:ml-2">
                                <IconsTag />
                                <span class="ml-1">{{ potensi.category_name }}</span>
                            </div>
                        </div>
                        <div class="mt-2 text-sm md:text-base">
                            <span class="hidden sm:flex">{{ potensi.description }}</span>
                            <span class="flex sm:hidden">{{ potensi.description.slice(0, 50) }}...</span>
                        </div>
                    </div>
                </div>
                <EmptyData v-else />
            </div>
            <div class="col-span-2">
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3">
                    <span>Kategori</span>
                </div>
                <div class="flex flex-wrap">
                    <div @click="navigateTo('/potensi-desa/category/' + category.slug)"
                        class="bg-[#0088CC] cursor-pointer font-medium text-white pa-2 mr-2 mt-2 text-sm w-fit rounded-full"
                        v-for="category in potensiCategory">
                        <span>{{ category.name }}</span>
                    </div>
                </div>
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mt-5 mb-6 text-xl md:text-2xl font-semibold py-3">
                    <span>Potensi Desa Terbaru</span>
                </div>
                <div class="mb-10">
                    <div @click="navigateTo('/potensi-desa/' + potensi.slug)" class="cursor-pointer mb-2 px-2 py-3 flex"
                        v-for="potensi in latestPotensi">
                        <div class="w-[140px] h-full flex-none">
                            <v-img :src="potensi.thumbnail" alt=""/>
                        </div>
                        <div class="block ml-3">
                            <div class="text-[#0088CC] text-base font-medium">
                                <span>{{ potensi.title }}</span>
                            </div>
                            <div class="mt-1">
                                <span>{{ moment(potensi.created_at).format("LL") }}</span>
                            </div>
                        </div>
                    </div>
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
