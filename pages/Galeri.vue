<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: "Galeri Desa"
})
</script>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default {
    data: () => ({
        lightbox: null,
        images: [],
        showContent: false
    }),
    async mounted() {
        await this.loadImages()

        this.showContent = true

        await this.$nextTick(() => {
            if (!this.lightbox) {
                this.lightbox = new PhotoSwipeLightbox({
                    gallery: '#gallery',
                    children: 'a',
                    pswpModule: () => import('photoswipe'),
                });
                this.lightbox.init();
            }
        })
    },
    unmounted() {
        if (this.lightbox) {
            this.lightbox.destroy();
            this.lightbox = null;
        }
    },
    methods: {
        async loadImages() {
            const data = await $fetch(this.$config.public.API_BASE_URL + '/api/image-gallery')
            this.images = data
        },
    }
}
</script>

<template>
    <AnimationLoading v-if="!showContent" />
    <div v-else
        class="animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem] ">
        <div class="flex mb-6 items-center bg-[#f0f0f0] px-2 py-3 rounded-lg">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024">
                    <path fill="#0088CC"
                        d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5" />
                </svg>
            </div>
            <div class="text-[#0088CC]">
                <span>/ Galeri Desa</span>
            </div>
        </div>
        <div class="pb-[6rem]">
            <h1 class="mb-4 font-semibold text-[#0088CC] text-2xl">Galeri Desa</h1>
            <div id="gallery" class="grid grid-cols-1 md:grid-cols-3 gap-[4rem] md:gap-8">
                <a class="w-fit rounded-lg" v-for="(image, key) in images" :key="key" :href="image.url" data-pswp-width="600"
                    data-pswp-height="400" target="_blank" rel="noreferrer">
                    <img class="w-full h-full rounded-t-lg" :src="image.url" alt="" />
                    <div class="rounded-b-lg py-3 px-2 font-semibold text-lg bg-[#F0F0F0]">
                        <span>{{ image.description }}</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
