<script setup>
import moment from 'moment';

const activities = ref(null)
activities.value = (await $fetch('/api/kegiatan?limit=5')).data

</script>
<template>
    <div class="mb-2 py-2 flex font-medium" v-for="activity in activities">
        <div
            class="text-base px-1 py-2 font-medium text-white flex-none w-[80px] h-[60px] rounded-md my-auto text-center bg-[#0088CC]">
            <span>{{ moment(activity.created_at).format("DD MMM YYYY") }}</span>
        </div>
        <div class="block ml-3 cursor-pointer" @click="$router.push('/kegiatan/' + activity.slug)">
            <div class="text-[#0088CC] text-base">
                <span class="line-clamp-2">{{ activity.title }}</span>
            </div>
            <div class="text-base mt-1">
                <span class="line-clamp-2">{{ activity.description }}</span>
            </div>
        </div>
    </div>
</template>