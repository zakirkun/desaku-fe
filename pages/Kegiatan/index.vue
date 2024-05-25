<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: "Kegiatan"
})
</script>

<script>
import moment from 'moment';

export default {
    data: () => ({
        activities: [],
        moment: moment,
        showContent: false
    }),
    async mounted() {
        await this.loadData()
        this.showContent = true
    },
    methods: {
        async loadData() {
            const data = await $fetch(this.$config.public.API_BASE_URL + '/api/activities?limit=5')
            this.activities = data
        },
    }
}
</script>

<template>
    <AnimationLoading v-if="!showContent" />
    <div v-else class="animate-fade block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] bg-[#F8F9FC] pt-6">
        <div class="flex mb-6 items-center bg-[#f0f0f0] pa-3 rounded-lg">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024">
                    <path fill="#0088CC"
                        d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5" />
                </svg>
            </div>
            <div>
                <span>/ Kegiatan</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12">
            <div class="block col-span-1 md:col-span-4">
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
                    <span>Kegiatan</span>
                </div>
                <div @click="$router.push('/kegiatan/' + activity.slug)" class="cursor-pointer flex mb-7"
                    v-for="activity in activities">
                    <div class="block">
                        <div class="text-xl font-semibold">
                            <span>{{ activity.title }}</span>
                        </div>
                        <div class="text-md flex items-center font-medium mt-2">
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
                            <span>{{ moment(activity.created_at).format("LL") }}</span>
                        </div>
                        <div class="mt-3">
                            <span>{{ activity.description }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-2 pb-6">
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
                    <span>Kegiatan Terbaru</span>
                </div>
                <div class="mb-3">
                    <div @click="$router.push('/kegiatan/' + activity.slug)"
                        class="cursor-pointer mb-1 py-3 flex" v-for="activity in activities">
                        <div class="block">
                            <div class="text-[#0088CC] text-md">
                                <span>{{ activity.title }}</span>
                            </div>
                            <div class="mt-1">
                                <span>{{ moment(activity.created_at).format("LL") }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
