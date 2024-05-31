<script setup>
const announcement = ref(null)
announcement.value = (await $fetch('/api/pengumuman?limit=5')).data
</script>
<template>
    <div class="mb-4 bg-[#0088CC] cursor-pointer font-semibold text-white px-2 py-3 rounded-md text-sm md:text-base"
        v-for="announcement in announcement" @click="$router.push('/pengumuman/' + announcement.slug)">
        <span class="line-clamp-2">{{ announcement.title }}</span>
    </div>
</template>