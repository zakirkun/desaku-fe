<script setup>
import moment from 'moment';

definePageMeta({
    layout: 'app'
});

useHead({
    title: "Pengumuman"
})

const page = ref(1)
const pageLength = ref(0)
const announcements = ref(null)

const { data, total } = await $fetch('/api/pengumuman?limit=5&page=1')

announcements.value = data
pageLength.value = Math.ceil(total / 5)

async function changePage() {
    const { data } = await $fetch(`/api/pengumuman?limit=5&page=${page.value}`)

    announcements.value = data

    if (navigator.userAgent.includes("Chrome")) {
        window.scrollTo({ behavior: "smooth", top: 0, left: 0 })
        return
    }

    windowScrollTo(window, { behavior: "smooth", top: 0, left: 0 });
}
</script>
<template>
    <div class="animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6">
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
                        <div class="text-lg md:text-xl font-semibold">
                            <span class="line-clamp-2">{{ announcement.title }}</span>
                        </div>
                        <div class="text-md flex items-center font-medium mt-2">
                            <IconsDate />
                            <span class="ml-1">{{ moment(announcement.created_at).format("LL") }}</span>
                        </div>
                        <div class="mt-3">
                            <span class="line-clamp-2 sm:line-clamp-3">{{ announcement.description }}</span>
                        </div>
                    </div>
                </div>
                <v-pagination :size="$vuetify.display.mobile ? 'small' : 'default'" class="mt-4 mb-14" v-model="page"
                    @update:modelValue="changePage" :total-visible="5" :length="pageLength"></v-pagination>
            </div>
            <div class="col-span-2">
                <PartialsLatestAnnouncement />
            </div>
        </div>
    </div>
</template>
