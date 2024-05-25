<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: "Tentang Desa",
    showContent: false
})
</script>
<script>
export default {
    data: () => ({
        data: null,
        showContent: false
    }),
    async mounted() {
        const data = await $fetch(this.$config.public.API_BASE_URL + '/api/tentang')
        this.data = data.tentang
        setTimeout(() => {
            this.showContent = true
        }, 5000)
    },
}
</script>

<template>
    <AnimationLoading v-if="!showContent" />
    <div v-else class="animate-fade px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem] min-h-[26rem]">
        <div class="flex mb-6 items-center bg-[#f0f0f0] pa-3 rounded-lg">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024">
                    <path fill="#0088CC"
                        d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5" />
                </svg>
            </div>
            <div>
                <span>/ Tentang Desa</span>
            </div>
        </div>
        <div class="pb-8">
            <h1 class="mb-4 font-semibold text-[#0088CC] text-3xl">Tentang Desa</h1>
            <div v-if="data" v-html="data"></div>
        </div>
    </div>
</template>