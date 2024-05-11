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
</script>

<script>
export default {
    data: () => ({
        images: [],
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
        newsData: [
            {
                img: "https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/24391a1104f17cf51db1567b5cfe0e2f.jpg",
                description: "Menguji / Melakukan Diagnosa Koneksi Jaringan Internet Di Komputer Anda Ke Aplikasi Web SIDEKA-NG Melalui Syntax PING & TRACEROUTE by Mochamad Wendy.",
                title: "Melakukan Diagnosa Koneksi Jaringan Internet Di Komputer Anda Ke Aplikasi Web Melalui Syntaks PING dan TRACEROUTE",
                date: "Mar 17, 2024"
            },
            {
                img: "https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/24391a1104f17cf51db1567b5cfe0e2f.jpg",
                description: "Menguji / Melakukan Diagnosa Koneksi Jaringan Internet Di Komputer Anda Ke Aplikasi Web SIDEKA-NG Melalui Syntax PING & TRACEROUTE by Mochamad Wendy.",
                title: "Melakukan Diagnosa Koneksi Jaringan Internet Di Komputer Anda Ke Aplikasi Web Melalui Syntaks PING dan TRACEROUTE",
                date: "Mar 17, 2024"
            },
            {
                img: "https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/24391a1104f17cf51db1567b5cfe0e2f.jpg",
                description: "Menguji / Melakukan Diagnosa Koneksi Jaringan Internet Di Komputer Anda Ke Aplikasi Web SIDEKA-NG Melalui Syntax PING & TRACEROUTE by Mochamad Wendy.",
                title: "Melakukan Diagnosa Koneksi Jaringan Internet Di Komputer Anda Ke Aplikasi Web Melalui Syntaks PING dan TRACEROUTE",
                date: "Mar 17, 2024"
            },
            {
                img: "https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/24391a1104f17cf51db1567b5cfe0e2f.jpg",
                description: "Menguji / Melakukan Diagnosa Koneksi Jaringan Internet Di Komputer Anda Ke Aplikasi Web SIDEKA-NG Melalui Syntax PING & TRACEROUTE by Mochamad Wendy.",
                title: "Melakukan Diagnosa Koneksi Jaringan Internet Di Komputer Anda Ke Aplikasi Web Melalui Syntaks PING dan TRACEROUTE",
                date: "Mar 17, 2024"
            }
        ],
        announcementData: [
            {
                "title": "Vaksin Booster 2",
                "url": "/mantab"
            },
            {
                "title": "Vaksin Booster 2",
                "url": "/mantab"
            },
            {
                "title": "Vaksin Booster 2",
                "url": "/mantab"
            }
        ],
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
        locationData: [
            {
                "title": "Desa",
                "value": "Aula Desa"
            },
            {
                "title": "Kecamatan",
                "value": "Aula Desa"
            },
            {
                "title": "Kabupaten",
                "value": "Aula Desa"
            },
            {
                "title": "Provinsi",
                "value": "DIY Yogyakarta"
            }
        ],
        navigation: [
            {
                title: "Profil Desa",
                children: [
                    {
                        title: "Tentang Kami",
                        link: "/tentang-kami"
                    }
                ]
            }
        ]
    }),
    async mounted() {
        await this.loadImages()
        await this.loadLocation()
    },
    methods: {
        async loadImages() {
            this.images = await $fetch('http://127.0.0.1:8000/api/image-homepage')
        },
        async loadLocation(){
            const data = await $fetch('http://127.0.0.1:8000/api/location')
            this.location = data
        },
        backgroundImage(url){
            return `background-image: url(${url});`
        }
    }
}
</script>

<template>
    <v-layout>
        <Header />
        <div id="hero" class="flex flex-column overflow-hidden">
            <swiper :autoplay="{
                delay: 4000,
                disableOnInteraction: false,
            }" :spaceBetween="30" :effect="'fade'" :navigation="true" :pagination="{
                clickable: true,
            }" :modules="modules" class="w-full h-[600px]">
                <swiper-slide v-for="image in images">
                    <div class="w-screen h-full bg-cover relative bg-center"
                        :style="backgroundImage(image.url)">
                        <div class="px-8 absolute bottom-8 left-[10rem] bg-black/40 w-fit text-white">
                            <span>{{ image.description }}</span>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="bg-[#F8F9FC] block md:flex justify-between items-center px-[2rem] md:px-[14rem] pt-8">
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
                    <div class="flex mb-2 h-[200px]" v-for="news in newsData">
                        <div class="w-[600px] h-full">
                            <img :src="news.img" alt="">
                        </div>
                        <div class="block pl-4">
                            <div class="text-xl font-semibold">
                                <span>{{ news.title }}</span>
                            </div>
                            <div class="mt-2">
                                <span>{{ news.description }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
                        <span>Pengumuman</span>
                    </div>
                    <div class="mb-6 bg-[#0088CC] font-semibold text-white px-2 py-3 rounded-md"
                        v-for="announcement in announcementData">
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
        <div class="block px-[2rem] md:px-[14rem] py-6">
            <div class="grid grid-cols-1 md:grid-cols-6 gap-x-12">
                <div class="block col-span-4">
                    <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
                        <span>Galeri Foto & Video</span>
                    </div>
                    <div class="grid grid-cols-3 mb-2 gap-x-6">
                        <div v-for="i in 6" class="h-full">
                            <iframe width="240" height="160"
                                src="https://www.youtube.com/embed/UEqLiwV2zw0?si=2SqWo6wMW14srfhM"></iframe>
                        </div>
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
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
        <div class="block md:flex px-[2rem] md:px-[14rem] bg-white py-8">
            <div class="flex-none w-full md:w-[65%]" v-html="location.maps">
            </div>
            <div class="ml-6 flex-1">
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
    </v-layout>
</template>

<style>
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
