<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: "Visi Misi"
})

const data = ref(null)

const { data: dataVisi } = await useAsyncData(
    () => $fetch('http://127.0.0.1:8000/api/visi')
)

data.value = dataVisi.value.visi
</script>
<template>
    <div
        class="animate-fade pb-6 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem] ">
        <div class="flex mb-6 items-center bg-[#f0f0f0] px-3 py-3 rounded-lg">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024">
                    <path fill="#0088CC"
                        d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5" />
                </svg>
            </div>
            <div>
                <span>/ Visi Misi</span>
            </div>
        </div>
        <div class="pb-8">
            <h1 class="mb-4 font-semibold text-[#0088CC] text-2xl">Visi & Misi</h1>
            <div class="quill-content" v-if="data" v-html="data"></div>
        </div>
    </div>
</template>