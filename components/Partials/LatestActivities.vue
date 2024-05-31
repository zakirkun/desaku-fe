<script setup>
import moment from 'moment';

const activities = ref(null)
activities.value = (await $fetch('/api/kegiatan?limit=5')).data
</script>
<template>
    <div :class="$vuetify.display.mobile ? 'mt-5' : 'mt-0'" class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl sm:text-2xl font-semibold py-3">
        <span>Kegiatan Terbaru</span>
    </div>
    <div class="mb-10">
        <div @click="$router.push('/kegiatan/' + activity.slug)"
            class="cursor-pointer px-0 py-3 flex" v-for="activity in activities">
            <div class="w-[140px] flex-none">
                <v-img :lazy-src="activity.thumbnail" class="w-full" height="80" :src="activity.thumbnail" alt="" />
            </div>
            <div class="block ml-3">
                <div class="text-[#0088CC] text-base font-medium">
                    <span class="line-clamp-2">{{ activity.title }}</span>
                </div>
                <div class="mt-1">
                    <span>{{ moment(activity.created_at).format("LL") }}</span>
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