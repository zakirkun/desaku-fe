<script setup>
import moment from 'moment';

definePageMeta({
    layout: 'app'
});

useHead({
    title: "Pengumuman"
})

const announcements = ref(null)
const { data } = await useAsyncData(
    () => $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/announcement')
)

announcements.value = data.value
</script>
<template>
    <div class="animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem]  pt-6">
        <BreadCrumb>
            <template v-slot:root>
                <span @click="navigateTo('/pengumuman')">Pengumuman</span>
            </template>
        </BreadCrumb>
        <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12">
            <div class="block col-span-1 md:col-span-4 pb-6">
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
                    <span>Pengumuman</span>
                </div>
                <div @click="$router.push('/pengumuman/' + announcement.slug)" class="cursor-pointer flex mb-7"
                    v-for="announcement in announcements">
                    <div class="block">
                        <div class="text-xl font-semibold">
                            <span>{{ announcement.title }}</span>
                        </div>
                        <div class="text-md flex items-center font-medium mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1" width="1.5em" height="1.5em"
                                viewBox="0 0 24 24">
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
                            <span>{{ moment(announcement.created_at).format("LL") }}</span>
                        </div>
                        <div class="mt-3">
                            <span>{{ announcement.description }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-2">
                <PartialsLatestAnnouncement />
            </div>
        </div>
    </div>
</template>
