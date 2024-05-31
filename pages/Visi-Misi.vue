<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: "Visi Misi"
})

const data = ref(null)

const { visi } = await $fetch('/api/visi')
data.value = visi
</script>
<template>
    <div
        class="animate-fade pb-6 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6">
        <BreadCrumb>
            <template v-slot:root>
                <span @click="navigateTo('visi-misi')">Visi & Misi</span>
            </template>
        </BreadCrumb>
        <div class="pb-8">
            <h1 class="mb-4 font-semibold text-[#0088CC] text-2xl">Visi & Misi</h1>
            <div class="quill-content" v-if="data" v-html="data"></div>
        </div>
    </div>
</template>