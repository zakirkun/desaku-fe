<script setup>
import moment from 'moment';

definePageMeta({
    layout: 'app'
});

useHead({
    title: "Kegiatan"
})

const activities = ref(null)
const { data } = await useAsyncData(
    () => $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/activities')
)

activities.value = data.value
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
            <div>
                <span>/ Kegiatan</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12">
            <div class="block col-span-1 md:col-span-4 pb-6">
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
                    <span>Kegiatan</span>
                </div>
                <div @click="navigateTo('/kegiatan/' + activity.slug)" class="cursor-pointer flex mb-7"
                    v-for="activity in activities">
                    <div class="block">
                        <div class="text-xl font-semibold">
                            <span>{{ activity.title }}</span>
                        </div>
                        <div class="text-md flex items-center font-medium mt-2">
                            <IconsDate />
                            <span>{{ moment(activity.created_at).format("LL") }}</span>
                        </div>
                        <div class="mt-3">
                            <span>{{ activity.description }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-2">
                <PartialsLatestActivities />
            </div>
        </div>
    </div>
</template>