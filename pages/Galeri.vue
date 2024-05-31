<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = ref(null)
const images = ref([])
const videos = ref([])
const page = ref(1)
const pageLength = ref(0)
const reRenderVideos = ref(false)

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

images.value = await $fetch('/api/image-gallery')
const { data, total } = await $fetch(`/api/video-gallery?limit=3&page=${page.value}`)

videos.value = data
pageLength.value = Math.ceil(total / 3)

async function changePage() {
    const { data } = await $fetch(`/api/video-gallery?limit=3&page=${page.value}`)
    videos.value = data
}

definePageMeta({
    layout: 'app'
});

useHead({
    title: "Galeri Desa"
})
</script>

<template>
    <div class="animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem] ">
        <BreadCrumb>
            <template v-slot:root>
                <span>Galeri Desa</span>
            </template>
        </BreadCrumb>
        <div class="pb-[1rem]">
            <h1 class="mb-2 font-semibold text-[#0088CC] text-2xl">Galeri Video</h1>
            <div class="grid grid-cols-1 md:grid-cols-3 md:gap-[2rem]">
                <a class="w-full rounded-lg animate-fade" v-for="(video, key) in videos" :key="key" target="_blank" rel="noreferrer">
                    <iframe class="my-6 rounded-lg shadow-sm" width="100%" height="245" loading="lazy" :src="video.url" title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </a>
            </div>
            <v-pagination :size="$vuetify.display.mobile ? 'small' : 'default'" class="mt-4 mb-6 md:mb-10" v-model="page"
                @update:modelValue="changePage" :total-visible="5" :length="pageLength"></v-pagination>
        </div>
        <div class="pb-[6rem]">
            <h1 class="mb-8 font-semibold text-[#0088CC] text-2xl">Galeri Foto</h1>
            <div id="gallery" class="grid grid-cols-1 md:grid-cols-3 gap-[2rem] md:gap-y-[2rem]">
                <a class="w-full cursor-pointer rounded-lg" v-for="(image, key) in images" :key="key" :href="image.url"
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
