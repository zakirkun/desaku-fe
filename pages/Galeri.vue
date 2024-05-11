<script setup>
const headerActive = ref(false)

onMounted(() => {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            headerActive.value = true
        } else {
            headerActive.value = false
        }
    })
})

definePageMeta({
    layout: 'app'
});
</script>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default {
    data: () => ({
        lightbox: null,
        images: [
            {
                largeURL:
                    'https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pembangunan_tpt.jpg',
                thumbnailURL:
                    'https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pembangunan_tpt.jpg',
                width: 600,
                height: 600,
            },
            {
                largeURL:
                    'https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pemberdayaan_masyarakat.jpg',
                thumbnailURL:
                    'https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pemberdayaan_masyarakat.jpg',
                width: 600,
                height: 600,
            },
            {
                largeURL:
                    'https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pembangunan_tpt.jpg',
                thumbnailURL:
                    'https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pembangunan_tpt.jpg',
                width: 600,
                height: 600,
            },
            {
                largeURL:
                    'https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pemberdayaan_masyarakat.jpg',
                thumbnailURL:
                    'https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pemberdayaan_masyarakat.jpg',
                width: 600,
                height: 600,
            },
            {
                largeURL:
                    'https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pembangunan_tpt.jpg',
                thumbnailURL:
                    'https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pembangunan_tpt.jpg',
                width: 600,
                height: 600,
            },
            {
                largeURL:
                    'https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pemberdayaan_masyarakat.jpg',
                thumbnailURL:
                    'https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/gallery/pemberdayaan_masyarakat.jpg',
                width: 600,
                height: 600,
            },
        ],
    }),
    mounted() {
        if (!this.lightbox) {
            this.lightbox = new PhotoSwipeLightbox({
                gallery: '#gallery',
                children: 'a',
                pswpModule: () => import('photoswipe'),
            });
            this.lightbox.init();
        }
    },
    unmounted() {
        if (this.lightbox) {
            this.lightbox.destroy();
            this.lightbox = null;
        }
    },
}
</script>

<template>
    <Header />
    <!-- Content -->
    <div class="px-[2rem] md:px-[14rem] pt-[2.5rem] min-h-[26rem]">
        <div class="flex mb-6 items-center bg-[#f0f0f0] px-2 py-3 rounded-lg">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024">
                    <path fill="#0088CC"
                        d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5" />
                </svg>
            </div>
            <div>
                <span>/ Galeri</span>
            </div>
        </div>
        <div class="pb-8">
            <h1 class="mb-4 font-semibold text-[#0088CC] text-3xl">Galeri Video</h1>
            <div class="grid grid-cols-1 md:grid-cols-4 mb-2 gap-8">
                <div v-for="i in 8" class="h-full">
                    <iframe class="w-full md:w-[260px]" height="160"
                        src="https://www.youtube.com/embed/UEqLiwV2zw0?si=2SqWo6wMW14srfhM"></iframe>
                    <div class="mt-3 font-semibold text-lg">
                        <span>Pembukaan Acara Halal Bihalal</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-8">
            <h1 class="mb-4 font-semibold text-[#0088CC] text-3xl">Galeri Foto</h1>
            <div id="gallery">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <a class="w-fit" v-for="(image, key) in images" :key="key" :href="image.largeURL"
                        data-pswp-width="500" data-pswp-height="400" target="_blank" rel="noreferrer">
                        <img :src="image.thumbnailURL" alt="" />
                        <div class="mt-3 font-semibold text-lg">
                            <span>Pembukaan Acara Halal Bihalal</span>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style>
.animation {
    animation: fade-out 0.5s ease-out;
}

@keyframes fade-out {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
