<script setup>
import moment from 'moment';

const activities = ref(null)
const { data } = await useAsyncData(
    () => $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/activities?limit=5')
)

activities.value = data.value
</script>
<template>
    <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-4 text-2xl font-semibold py-3">
        <span>Kegiatan Terbaru</span>
    </div>
    <div class="mb-3">
        <div @click="$router.push('/kegiatan/' + activity.slug)" class="cursor-pointer mb-1 py-3 flex"
            v-for="activity in activities">
            <div class="block">
                <div class="text-[#0088CC] text-md">
                    <span>{{ activity.title }}</span>
                </div>
                <div class="mt-1">
                    <span>{{ moment(activity.created_at).format("LL") }}</span>
                </div>
            </div>
        </div>
    </div>
</template>