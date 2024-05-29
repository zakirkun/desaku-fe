<script setup>
import moment from 'moment';

const latestPotensi = ref([])

latestPotensi.value = (await $fetch('/api/potensi-desa?limit=5')).data
</script>
<template>
    <div class="text-[#0088CC] border-[#0088CC] border-b-2 mt-5 mb-6 text-xl md:text-2xl font-semibold py-3">
        <span>Potensi Desa Terbaru</span>
    </div>
    <div class="mb-10">
        <div @click="navigateTo('/potensi-desa/' + potensi.slug)" class="cursor-pointer mb-2 py-3 flex"
            v-for="potensi in latestPotensi">
            <div class="w-[140px] flex-none">
                <v-img :lazy-src="potensi.thumbnail" cover class="w-full" height="80" :src="potensi.thumbnail" alt="" />
            </div>
            <div class="block ml-3">
                <div class="text-[#0088CC] text-base font-medium">
                    <span class="line-clamp-2">{{ potensi.title }}</span>
                </div>
                <div class="mt-1">
                    <span>{{ moment(potensi.created_at).format("LL") }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
::v-deep img {
    border-radius: 6px;
    width: 100%;
}
</style>
