<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const images = ref(null)
const lightbox = ref(null)

images.value = await $fetch('/api/image-gallery?limit=6')

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
</script>
<template>
    <div class="block col-span-4">
        <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3">
            <span>Galeri Desa</span>
        </div>
        <div id="gallery" class="rounded-lg grid grid-cols-1 md:grid-cols-3 mb-2 gap-6">
            <a class="rounded-lg h-full w-full relative" v-for="(image, key) in images" :key="key" :href="image.url"
                data-pswp-width="600" data-pswp-height="400" target="_blank" rel="noreferrer">
                <v-img :lazy-src="image.url" class="rounded-md" cover width="100%" aspect-ratio="1" :src="image.url" />
                <div
                    class="rounded-b-lg z-10 py-1 backdrop-blur-xl opacity-90 pl-2 bg-[#0088CC] bottom-0 absolute w-full text-white">
                    <p class="truncate text-sm md:text-base">{{ image.description }}</p>
                </div>
            </a>
        </div>
    </div>
</template>
<style scoped>
::v-deep img {
    border-radius: 6px;
    width: 100%;
    object-fit: cover;
}
</style>