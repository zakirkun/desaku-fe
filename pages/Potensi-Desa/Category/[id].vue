<script setup>
import moment from 'moment';

const route = useRouter().currentRoute.value
const potensi = ref(null)
const categoryName = ref(null)

const { data, category_name } = await $fetch('/api/potensi-desa?category=' + route.params.id)

potensi.value = data
categoryName.value = category_name

definePageMeta({
    layout: 'app'
});

useHead({
    title: 'Potensi Desa: ' + category_name
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
                <span>/ Potensi Desa / {{ category_name }}</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12">
            <div class="block col-span-1 md:col-span-4">
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
                    <span>Potensi Desa: {{ category_name }}</span>
                </div>
                <div v-if="potensi.length > 0">
                    <div @click="$router.push('/potensi-desa/' + potensi.slug)"
                        class="cursor-pointer flex mb-[0.5rem] md:mb-2 h-[160px] md:h-[200px]"
                        v-for="potensi in potensi">
                        <div class="w-[160px] md:w-[240px] h-full flex-none">
                            <img class="rounded-md h-[120px] md:h-[160px] w-full object-cover" :src="potensi.thumbnail"
                                alt="">
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
                                <div class="text-xs md:text-base flex items-center font-medium mt-2 ml-2">
                                    <IconsTag />
                                    <span class="ml-1">{{ potensi.category_name }}</span>
                                </div>
                            </div>
                            <div class="mt-2 text-sm md:text-base">
                                <span class="hidden md:flex">{{ potensi.description }}</span>
                                <span class="flex md:hidden">{{ potensi.description.slice(0, 40) }}...</span>
                            </div>
                        </div>
                    </div>
                </div>
                <EmptyData v-else />
            </div>
            <div class="col-span-2">
                <PartialsPotensiCategory />
                <PartialsLatestPotensi />
            </div>
        </div>
    </div>
</template>
