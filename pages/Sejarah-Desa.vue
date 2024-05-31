<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: "Sejarah Desa"
})

const data = ref(null)

const { sejarah } = await $fetch('/api/sejarah')
data.value = sejarah
</script>
<template>
    <div class="animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6">
        <BreadCrumb>
            <template v-slot:root>
                <span>Sejarah Desa</span>
            </template>
        </BreadCrumb>
        <div class="pb-8">
            <h1 class="mb-4 font-semibold text-[#0088CC] text-2xl">Sejarah Desa</h1>
            <div class="quill-content" v-if="data" v-html="data"></div>
        </div>
    </div>
</template>