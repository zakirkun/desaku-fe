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
        <BreadCrumb>
            <template v-slot:root>
                <span>Kegiatan</span>
            </template>
        </BreadCrumb>
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