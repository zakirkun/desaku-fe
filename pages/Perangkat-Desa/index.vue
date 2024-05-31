<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: "Perangkat Desa"
})

const perangkat = ref([])

perangkat.value = await $fetch('/api/perangkat-desa')
</script>

<template>
    <div class="animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6 min-h-[30rem]">
        <BreadCrumb>
            <template v-slot:root>
                <span @click="navigateTo('/perangkat-desa')">Perangkat Desa</span>
            </template>
        </BreadCrumb>
        <h1 class="mb-4 font-semibold text-[#0088CC] text-2xl">Perangkat Desa</h1>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-5 pb-8 gap-x-8 gap-y-10">
            <div class="rounded-lg block shadow-lg cursor-pointer" @click="$router.push('/perangkat-desa/' + item.slug)" v-for="item in perangkat">
                <div class="w-full h-[180px]">
                    <v-img :src="item.image" class="w-full h-full rounded-t-lg" />
                </div>
                <div class="bg-[#0088CC] rounded-b-lg text-white text-base font-medium pa-2">
                    <span>{{ item.name }}</span>
                    <br>
                    <span class="text-sm font-normal">{{ item.job }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
::v-deep img {
    width: 100%;
    object-fit: cover;
}
</style>