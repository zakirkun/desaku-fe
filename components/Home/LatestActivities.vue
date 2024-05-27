<script setup>
import moment from 'moment';

const activities = ref(null)
const { data } = await useAsyncData(
    () => $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/activities?limit=5')
)

activities.value = data.value
</script>
<template>
    <div class="mb-2 py-2 flex cursor-pointer font-medium" @click="$router.push('/kegiatan/' + activity.slug)"
        v-for="activity in activities">
        <div
            class="px-1 py-2 font-semibold text-white flex-none w-[80px] h-[60px] rounded-md my-auto text-center bg-[#0088CC]">
            <span>{{ moment(activity.created_at).format("DD MMM YYYY") }}</span>
        </div>
        <div class="block ml-3">
            <div class="text-[#0088CC] text-lg">
                <span>{{ activity.title }}</span>
            </div>
            <div class="">
                <span>Lokasi {{ activity.location }}</span>
            </div>
        </div>
    </div>
</template>