<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = ref(null)
const images = ref([])

onMounted(async () => {
    await nextTick(() => {
        if (!lightbox.value) {
            lightbox.value = new PhotoSwipeLightbox({
                gallery: '#gallery',
                children: 'a',
                pswpModule: () => import('photoswipe'),
            });
            lightbox.value.init();
        }
    })
})

const data = await $fetch('/api/image-gallery')
images.value = data

definePageMeta({
    layout: 'app'
});

useHead({
    title: "Galeri Desa"
})
</script>

<template>
    <div class="animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem] ">
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
            <div id="gallery" class="grid grid-cols-1 md:grid-cols-3 gap-[5rem] md:gap-y-[6rem]">
                <a class="w-full rounded-lg" v-for="(image, key) in images" :key="key" :href="image.url"
                    data-pswp-width="600" data-pswp-height="400" target="_blank" rel="noreferrer">
                    <v-img :lazy-src="image.url" class="w-full rounded-t-lg" height="300" :src="image.url" alt="" />
                    <div
                        class="rounded-b-lg py-3 px-2 font-medium text-base md:text-lg backdrop-blur-sm bg-white/30 shadow-sm border border-slate-100">
                        <span v-if="image.description.length > 40 && $vuetify.display.mobile">{{
                            image.description.slice(0, 40) }}...</span>
                        <span v-else>{{ image.description }}</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped>
::v-deep img {
    border-radius: 6px 0 0 0;
    width: 100%;
    object-fit: cover;
}
</style>
