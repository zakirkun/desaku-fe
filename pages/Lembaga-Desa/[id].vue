<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: "Lembaga Desa"
})
</script>
<script>
export default {
    data: () => ({
        data: {
            name: null,
        },
        showContent: false
    }),
    async mounted() {
        const data = await $fetch(this.$config.public.API_BASE_URL + '/api/lembaga/slug/' + this.$route.params.id)
        this.data = data
        this.showContent = true
    },
}
</script>

<template>
    <AnimationLoading v-if="!showContent" />
    <div v-else class="animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem] ">
        <div class="flex mb-6 items-center bg-[#f0f0f0] px-3 py-3 rounded-lg">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024">
                    <path fill="#0088CC"
                        d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5" />
                </svg>
            </div>
            <div>
                <span>/ Lembaga Desa / {{ data.name }}</span>
            </div>
        </div>
        <div class="pb-8">
            <h1 class="mb-8 font-semibold text-[#0088CC] text-2xl md:text-3xl">{{ data.name }}</h1>
            <div class="block md:flex">
                <div clas="flex-none w-full md:w-[300px]">
                    <img class="w-full md:w-[300px] rounded-md" :src="data.image" alt="">
                </div>
                <div class="block description-lembaga">
                    <div class="flex text-lg md:text-xl font-medium py-3 border-b border-slate-300">
                        <div class="flex-none w-[200px]">
                            Nama Lembaga
                        </div>
                        <div>
                            : {{ data.name }}
                        </div>
                    </div>
                    <div class="flex text-lg md:text-xl font-medium py-3 border-b border-slate-300">
                        <div class="flex-none w-[200px]">
                            Singkatan
                        </div>
                        <div>
                            : {{ data.surname }}
                        </div>
                    </div>
                    <div class="flex text-lg md:text-xl font-medium py-3 border-b border-slate-300">
                        <div class="flex-none w-[200px]">
                            Alamat Lengkap
                        </div>
                        <div>
                            : {{ data.address }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8">
                <div class="border border-[#0088CC] rounded-md">
                    <div class="bg-[#0088CC] text-white px-2 text-xl py-3 font-medium rounded-t-md">
                        Profil Lembaga
                    </div>
                    <div class="px-3 py-5" v-if="data.profile" v-html="data.profile"></div>
                </div>
                <div class="border border-[#0088CC] rounded-md mt-8">
                    <div class="bg-[#0088CC] text-white px-2 text-xl py-3 font-medium rounded-t-md">
                        Visi & Misi
                    </div>
                    <div class="px-3 py-5" v-if="data.visi" v-html="data.visi"></div>
                </div>
                <div class="border border-[#0088CC] rounded-md mt-8">
                    <div class="bg-[#0088CC] text-white px-2 text-xl py-3 font-medium rounded-t-md">
                        Tugas
                    </div>
                    <div class="px-3 py-5" v-if="data.tugas" v-html="data.tugas"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.description-lembaga {
    margin-left: 24px;
    margin-top: 0;
}

@media screen and (max-width: 600px) {
    .description-lembaga {
        margin-left: 0;
        margin-top: 12px;
    }
}
</style>
