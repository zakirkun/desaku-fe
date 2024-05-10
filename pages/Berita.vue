<script setup>
definePageMeta({
    layout: false
});
</script>

<script>
export default {
    data: () => ({
        news: []
    }),
    async mounted() {
        await this.loadData()
    },
    methods: {
        async loadData() {
            const data = await $fetch('http://127.0.0.1:8000/api/news')
            this.news = data
        },
    }
}
</script>

<template>
    <Header />
    <div class="block px-[2rem] md:px-[14rem] bg-[#F8F9FC] pt-6">
        <div class="flex mb-6 items-center bg-[#f0f0f0] pa-3 rounded-lg">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024">
                    <path fill="#0088CC"
                        d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5" />
                </svg>
            </div>
            <div>
                <span>/ Berita</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12">
            <div class="block col-span-1 md:col-span-4">
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
                    <span>Berita</span>
                </div>
                <div class="flex mb-2 h-[200px]" v-for="news in news">
                    <div class="w-[600px] h-full">
                        <img class="rounded-md" :src="news.thumbnail" alt="">
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
