<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = ref([Autoplay, EffectFade, Navigation, Pagination])
const images = ref(null)
const perangkatDesa = ref(null)

images.value = await $fetch('/api/image-homepage')
perangkatDesa.value = await $fetch('/api/perangkat-desa')

function backgroundImage(url) {
    return `background-image: url(${url});`
}

definePageMeta({
    layout: 'app'
});

useHead({
    title: "Beranda",
})
</script>
<template>
    <div class="animate-fade flex-1">
        <div id="hero" class="flex flex-column overflow-hidden">
            <swiper :autoplay="{
                delay: 4000,
                disableOnInteraction: false,
            }" :spaceBetween="30" :effect="'fade'" :navigation="true" :pagination="{
                clickable: true,
            }" :modules="modules" class="w-full h-[500px] md:h-[600px]">
                <swiper-slide v-for="image in images">
                    <div class="w-screen h-full bg-cover relative bg-center" :style="backgroundImage(image.url)">
                        <div
                            class="px-5 absolute bottom-8 description left-[50%] md:left-[10rem] bg-black/40 w-fit text-center text-white text-base md:text-xl">
                            <span>{{ image.description }}</span>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <HomeFeatures />
        <div class="block pb-6 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] bg-white pt-6">
            <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12">
                <div class="block col-span-1 md:col-span-4">
                    <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3">
                        <span>Berita Terkini</span>
                    </div>
                    <HomeLatestNews />
                </div>
                <div class="col-span-2">
                    <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3">
                        <span>Pengumuman</span>
                    </div>
                    <HomeLatestAnnouncement />
                    <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3">
                        <span>Agenda Kegiatan</span>
                    </div>
                    <HomeLatestActivities />
                </div>
            </div>
        </div>
        <div class="block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] py-10">
            <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12">
                <HomeGallery />
                <div class="col-span-2">
                    <div
                        class="text-[#0088CC] struktur border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3">
                        <span>Struktur Organisasi</span>
                    </div>
                    <div class="font-medium text-white px-2 rounded-md">
                        <swiper :autoplay="{
                            delay: 4000,
                            disableOnInteraction: false,
                        }" :spaceBetween="30" :effect="'fade'" :navigation="true" :modules="modules" class="w-full">
                            <swiper-slide v-for="item in perangkatDesa" class="relative">
                                <v-img class="rounded-md" cover width="100%" aspect-ratio="1" :lazysrc="item.image" :src="item.image" />
                                <div
                                    class="text-sm sm:text-base font-normal rounded-b-md z-50 py-1 backdrop-blur-xl opacity-90 pl-2 bg-[#0088CC] bottom-0 absolute w-full text-white">
                                    <span>{{ item.name }} - {{ item.job }}</span>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
        <HomeLocation />
    </div>
</template>

<style>
@media screen and (max-width: 600px) {
    .description {
        transform: translate(-50%, -50%);
    }

    .struktur {
        margin-top: 10px;
    }
}

.struktur {
    margin-top: 0;
}

.v-layout {
    display: block;
}

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
