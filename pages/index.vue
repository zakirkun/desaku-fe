<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = ref([Autoplay, EffectFade, Navigation, Pagination])

definePageMeta({
    layout: 'app'
});

useHead({
    title: "Beranda",
})
</script>

<script>
import moment from 'moment';

export default {
    data: () => ({
        showContent: false,
        moment: moment,
        images: [],
        videos: [],
        location: {},
        items: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
        ],
        features: [
            {
                img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/services.svg",
                name: "Layanan Masyarakat"
            },
            {
                img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/Asset186.svg",
                name: "Potensi Desa"
            },
            {
                img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/Asset187.svg",
                name: "Pembangunan Desa"
            },
            {
                img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/Asset192.svg",
                name: "Keuangan Desa"
            }
        ],
        news: [],
        announcement: [],
        acitivityData: [
            {
                "title": "Sosialisasi Penanggulangan Covid 19",
                "location": "Aula Desa"
            },
            {
                "title": "Vaksin Booster 2",
                "location": "Aula Desa"
            },
            {
                "title": "Vaksin Booster 2",
                "location": "Aula Desa"
            }
        ],
        galleryData: [
            {
                "title": "Sosialisasi Penanggulangan Covid 19",
                "location": "Aula Desa"
            },
            {
                "title": "Vaksin Booster 2",
                "location": "Aula Desa"
            },
            {
                "title": "Vaksin Booster 2",
                "location": "Aula Desa"
            }
        ],
    }),
    async mounted() {
        await this.loadImages()
        await this.loadNews()
        await this.loadVideos()
        await this.loadLocation()
        await this.loadAnnouncements()

        this.showContent = true
    },
    methods: {
        async loadImages() {
            this.images = await $fetch('http://127.0.0.1:8000/api/image-homepage')
        },
        async loadNews() {
            this.news = await $fetch('http://127.0.0.1:8000/api/news?limit=5')
        },
        async loadAnnouncements() {
            this.announcement = await $fetch('http://127.0.0.1:8000/api/announcement?limit=5')
        },
        async loadVideos() {
            this.videos = await $fetch('http://127.0.0.1:8000/api/video-gallery')
        },
        async loadLocation() {
            const data = await $fetch('http://127.0.0.1:8000/api/location')

            this.location = data
            this.location.maps = `<iframe src="${data.maps}" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        },
        backgroundImage(url) {
            return `background-image: url(${url});`
        },
    }
}
</script>

<template>
    <div class="backdrop-blur-sm bg-white/30 h-screen flex items-center justify-center w-screen fixed"
        style="z-index: 999999;" v-if="!showContent">
        <img class="bounce mr-6" width="120"
            src="https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/images/logo_header.png"
            alt="">
    </div>
    <v-layout class="block">
        <v-app>
            <Header />
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
                                class="px-5 absolute bottom-8 description left-[50%] md:left-[10rem] bg-black/40 w-fit text-center text-white text-xl">
                                <span>{{ image.description }}</span>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="bg-[#F8F9FC] block md:flex justify-between items-center px-[2rem] md:px-[14rem] pt-8 pb-3">
                <div class="block w-fit mx-auto md:mb-0 mb-10" v-for="feature in features">
                    <div class="w-fit mx-auto">
                        <img class="w-[80px] h-[80px]" :src="feature.img" alt="" srcset="">
                    </div>
                    <div class="mt-2">
                        <span>{{ feature.name }}</span>
                    </div>
                </div>
            </div>
            <div class="block px-[2rem] md:px-[14rem] bg-white pt-6">
                <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12">
                    <div class="block col-span-1 md:col-span-4">
                        <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
                            <span>Berita Terkini</span>
                        </div>
                        <div class="flex mb-10 cursor-pointer" @click="$router.push('/berita/' + news.slug)"
                            v-for="news in news">
                            <div class="w-fit flex-none">
                                <img class="w-[140px] sm:w-[200px] md:w-[250px] h-[110px] md:h-[140px]"
                                    :src="news.thumbnail" alt="">
                            </div>
                            <div class="block pl-4">
                                <div class="text-md md:text-xl font-semibold">
                                    <span>{{ news.title }}</span>
                                </div>
                                <div class="text-md flex items-center font-medium mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-1" width="1.5em" height="1.5em"
                                        viewBox="0 0 24 24">
                                        <g fill="none">
                                            <rect width="18" height="15" x="3" y="6" stroke="#A3A3A3" rx="2" />
                                            <path fill="black"
                                                d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10z" />
                                            <path stroke="#A3A3A3" stroke-linecap="round" d="M7 3v3m10-3v3" />
                                            <rect width="4" height="2" x="7" y="12" fill="#A3A3A3" rx=".5" />
                                            <rect width="4" height="2" x="7" y="16" fill="#A3A3A3" rx=".5" />
                                            <rect width="4" height="2" x="13" y="12" fill="#A3A3A3" rx=".5" />
                                            <rect width="4" height="2" x="13" y="16" fill="#A3A3A3" rx=".5" />
                                        </g>
                                    </svg>
                                    <span class="text-sm md:text-md">{{ moment(news.created_at).format("LL") }}</span>
                                </div>
                                <div class="mt-2 hidden md:flex">
                                    <span class="text-sm md:text-base">{{ news.description }}</span>
                                </div>
                                <div class="mt-2 flex md:hidden">
                                    <span class="text-sm md:text-base">{{ news.description.substring(0, 70) }}...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
                            <span>Pengumuman</span>
                        </div>
                        <div class="mb-6 bg-[#0088CC] cursor-pointer font-semibold text-white px-2 py-3 rounded-md"
                            v-for="announcement in announcement"
                            @click="$router.push('/pengumuman/' + announcement.slug)">
                            <span>{{ announcement.title }}</span>
                        </div>
                        <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
                            <span>Agenda Kegiatan</span>
                        </div>
                        <div class="mb-2 px-2 py-3 flex" v-for="activity in acitivityData">
                            <div
                                class="px-1 py-2 font-semibold text-white flex-none w-[80px] h-[60px] rounded-md my-auto text-center bg-[#0088CC]">
                                <span>Sep 02 2022</span>
                            </div>
                            <div class="block ml-3">
                                <div class="text-[#0088CC] text-lg">
                                    <span>{{ activity.title }}</span>
                                </div>
                                <div class="">
                                    <span>Lokasi {{ activity.location }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block bg-[#F8F9FC] px-[2rem] md:px-[14rem] py-10">
                <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12">
                    <div class="block col-span-4">
                        <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
                            <span>Galeri Foto & Video</span>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 mb-2 gap-6">
                            <div v-for="video in videos" class="h-full w-full md:w-[260px]">
                                <iframe width="100%" height="160" :src="video.url"></iframe>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div
                            class="text-[#0088CC] mt-5 md:mt-0 border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
                            <span>Struktur Organisasi</span>
                        </div>
                        <div class="font-semibold text-white px-2 rounded-md">
                            <swiper :autoplay="{
                                delay: 4000,
                                disableOnInteraction: false,
                            }" :spaceBetween="30" :effect="'fade'" :navigation="true" :modules="modules" class="w-full">
                                <swiper-slide><img class="h-[340px] w-full"
                                        src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide>
                                <swiper-slide><img class="h-[340px] w-full"
                                        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide>
                                <swiper-slide><img class="h-[340px] w-full"
                                        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide>
                                <swiper-slide><img class="h-[340px] w-full"
                                        src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide>
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Maps Location -->
            <div class="block md:flex px-[2rem] md:px-[14rem] w-ful l bg-white py-12">
                <div class="flex-none w-full md:w-[65%]" v-html="location.maps">
                </div>
                <div class="ml-6 flex-1 mt-10 md:mt-0">
                    <p class="text-black font-semibold text-2xl">Lokasi Desa</p>
                    <div class="block mt-3">
                        <div class="flex mb-2">
                            <div class="w-[60%]">
                                <span>Desa</span>
                            </div>
                            <div>
                                <span>: {{ location.desa }}</span>
                            </div>
                        </div>
                        <div class="flex mb-2">
                            <div class="w-[60%]">
                                <span>Kabupaten</span>
                            </div>
                            <div>
                                <span>: {{ location.kabupaten }}</span>
                            </div>
                        </div>
                        <div class="flex mb-2">
                            <div class="w-[60%]">
                                <span>Kelurahan</span>
                            </div>
                            <div>
                                <span>: {{ location.kelurahan }}</span>
                            </div>
                        </div>
                        <div class="flex mb-2">
                            <div class="w-[60%]">
                                <span>Kecamatan</span>
                            </div>
                            <div>
                                <span>: {{ location.kecamatan }}</span>
                            </div>
                        </div>
                        <div class="flex mb-2">
                            <div class="w-[60%]">
                                <span>RT/RW</span>
                            </div>
                            <div>
                                <span>: {{ location.rt }}/{{ location.rw }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </v-app>
    </v-layout>
</template>

<style>
@media screen and (max-width: 600px) {
    .description {
        transform: translate(-50%, -50%);
    }
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

.bounce {
    animation: bounce .4s ease infinite alternate;
}

@keyframes bounce {
    0% {
        text-shadow:
            0 5px 0 #ccc,
            0 2px 3px rgba(0, 0, 0, 1);
    }

    100% {
        transform: translateY(-20px);
        text-shadow: 0 50px 0 black,
            0 0px 20px rgba(0, 0, 0, .8);
    }
}
</style>
