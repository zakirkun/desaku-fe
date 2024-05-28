<script setup>
import moment from 'moment';

const announcements = ref(null)
const { data } = await useAsyncData(
    () => $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/announcement?limit=5')
)

announcements.value = data.value
</script>
<template>
    <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-4 text-2xl font-semibold py-3">
        <span>Pengumuman Terbaru</span>
    </div>
    <div class="mb-3">
        <div @click="$router.push('/pengumuman/' + announcement.slug)" class="cursor-pointer mb-1 py-3 flex"
            v-for="announcement in announcements">
            <div class="block">
                <div class="text-[#0088CC] text-md">
                    <span>{{ announcement.title }}</span>
                </div>
                <div class="mt-1">
                    <span>{{ moment(announcement.created_at).format("LL") }}</span>
                </div>
            </div>
        </div>
    </div>
</template>