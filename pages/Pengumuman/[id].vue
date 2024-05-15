<script setup>
import { ref, onMounted } from 'vue'

definePageMeta({
    layout: 'app'
});

const route = useRoute()
const post = reactive({
    title: null,
    content: null,
})

onMounted(async () => {
    const data = await $fetch('http://127.0.0.1:8000/api/announcement/slug/' + route.params.id)
    post.title = data.title
    post.content = data.content

    useHead({
        title: post.title,
    })
})
</script>
<script>
import moment from 'moment';

export default {
    data: () => ({
        announcements: [],
        moment: moment,
    }),
    async mounted() {
        await this.loadData()
    },
    methods: {
        async loadData() {
            const data = await $fetch('http://127.0.0.1:8000/api/announcement')
            this.announcements = data
        },
    }
}
</script>
<template>
    <Header />
    <!-- Content -->
    <div class="block px-[2rem] md:px-[14rem] bg-[#F8F9FC] pt-6">
        <div class="pb-12 grid grid-cols-1 md:grid-cols-6 md:gap-x-12">
            <div class="block col-span-1 md:col-span-4">
                <div class="text-[#0088CC] mb-2 text-3xl font-semibold py-3">
                    <span>{{ post.title }}</span>
                </div>
                <div class="text-md flex items-center font-medium mt-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-1" width="1.5em" height="1.5em" viewBox="0 0 24 24">
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
                    <span>{{ moment(post.created_at).format("LL") }}</span>
                </div>
                <div v-html="post.content"></div>
            </div>
            <div class="col-span-2">
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mt-5 mb-6 text-2xl font-semibold py-3">
                    <span>Pengumuman Terbaru</span>
                </div>
                <div @click="$router.push('/pengumuman/' + announcement.slug)" class="cursor-pointer mb-2 px-2 py-3 flex" v-for="announcement in announcements">
                    <div class="w-[160px] h-full">
                        <img class="rounded-md" :src="announcement.thumbnail" alt="">
                    </div>
                    <div class="block ml-3">
                        <div class="text-[#0088CC] text-md">
                            <span>{{ announcement.title }}</span>
                        </div>
                        <div class="mt-1">
                            <span>{{ moment(announcement.created_at).format("LL") }}</span>
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
