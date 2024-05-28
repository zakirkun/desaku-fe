<script setup>
const announcement = ref(null)

const { data } = await useAsyncData(
    () => $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/announcement?limit=5')
)

announcement.value = data.value
</script>
<template>
    <div class="mb-4 bg-[#0088CC] cursor-pointer font-semibold text-white px-2 py-3 rounded-md text-sm md:text-base"
        v-for="announcement in announcement" @click="$router.push('/pengumuman/' + announcement.slug)">
        <span>{{ announcement.title }}</span>
    </div>
</template>