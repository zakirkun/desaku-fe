<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: "Perangkat Desa"
})
</script>

<script>
export default {
    data: () => ({
        data: {
            nama: null,
            job: null,
            nip: null,
            image: null
        },
        perangkatDesa: [],
        showContent: false
    }),
    async mounted() {
        await this.loadData()
        await this.loadPerangkatDesa()
        this.showContent = true
    },
    methods: {
        async loadData() {
            const data = await $fetch(this.$config.public.API_BASE_URL + '/api/perangkat-desa/slug/' + this.$route.params.id)
            this.data = data
        },
        async loadPerangkatDesa() {
            const data = await $fetch(this.$config.public.API_BASE_URL + '/api/perangkat-desa')
            this.perangkatDesa = data
        }
    }
}
</script>

<template>
    <AnimationLoading v-if="!showContent" />
    <div v-else
        class="animate-fade pb-8 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem] min-h-[30rem]">
        <div class="flex mb-6 items-center bg-[#f0f0f0] px-2 py-3 rounded-lg">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024">
                    <path fill="#0088CC"
                        d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5" />
                </svg>
            </div>
            <div>
                <span>/ Perangkat Desa / {{ data.name }}</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12 gap-y-6">
            <div class="block col-span-1 md:col-span-4">
                <div class="text-[#0088CC] mb-6 text-2xl md:text-3xl font-semibold py-3">
                    <span>{{ data.name }}</span>
                </div>
                <div class="block md:flex">
                    <img class="w-[200px] h-full rounded-lg flex-none mx-auto mb-6 md:mb-0" :src="data.image" alt="">
                    <div class="md:ml-6 flex-1 py-5 md:pl-4 md:pr-10 md:border rounded-md h-fit border-slate-300">
                        <div class="flex border-b border-slate-300 pb-3 text-base md:text-lg mb-2">
                            <div class="font-semibold w-[140px]">
                                <span>Nama Lengkap</span>
                            </div>
                            <div>
                                <span>: &nbsp; {{ data.name }}</span>
                            </div>
                        </div>
                        <div class="flex border-b border-slate-300 pb-3 text-base md:text-lg mb-2">
                            <div class="font-semibold w-[140px]">
                                <span>Jabatan</span>
                            </div>
                            <div>
                                <span>: &nbsp; {{ data.job }}</span>
                            </div>
                        </div>
                        <div class="flex border-b border-slate-300 pb-3 text-base md:text-lg mb-2">
                            <div class="font-semibold w-[140px]">
                                <span>NIP</span>
                            </div>
                            <div>
                                <span>: &nbsp; {{ data.nip ?? '-' }}</span>
                            </div>
                        </div>
                        <div>
                            <p class="font-semibold mb-4 mt-3">Visi & Misi</p>
                            <div v-html="data.visi"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-2">
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
                    <span>Perangkat Desa Lainya</span>
                </div>
                <div class="mb-3 bg-white px-5 py-3 rounded-md border border-slate-300">
                    <div @click="$router.push('/perangkat-desa/' + perangkat.slug)" class="border-b border-slate-300 pb-5 cursor-pointer mb-1 py-2 flex"
                        v-for="perangkat in perangkatDesa">
                        <div class="flex-none mr-4">
                            <img class="w-[75px] h-[60px] rounded-md" :src="perangkat.image" alt="">
                        </div>
                        <div class="block">
                            <div class="font-medium text-[#0088CC] text-base md:text-xl">
                                <span>{{ perangkat.name }}</span>
                            </div>
                            <div class="font-medium text-sm md:text-base">
                                <span>{{ perangkat.job }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>