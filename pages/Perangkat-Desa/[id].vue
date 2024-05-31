<script setup>
definePageMeta({
    layout: 'app'
});

const route = useRouter().currentRoute.value
const perangkatDesa = ref([])
const data = reactive({
    name: null,
    job: null,
    image: null,
    nip: null,
    visi: null,
})

const dataPerangkatDesa = await $fetch('/api/perangkat-desa/slug/' + route.params.id)

data.name = dataPerangkatDesa.name
data.job = dataPerangkatDesa.job
data.image = dataPerangkatDesa.image
data.visi = dataPerangkatDesa.visi
data.nip = dataPerangkatDesa.nip

perangkatDesa.value = await $fetch('/api/perangkat-desa?limit=5')
</script>
<template>
    <Head>
        <Title>{{ data.name }} Perangkat Desa</Title>
    </Head>
    <div
        class="animate-fade flex-1 pb-8 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6 min-h-[30rem]">
        <BreadCrumb :child="data.name">
            <template v-slot:root>
                <span @click="navigateTo('/perangkat-desa')">Perangkat Desa</span>
            </template>
        </BreadCrumb>
        <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12 gap-y-6">
            <div class="block col-span-1 md:col-span-4">
                <div class="text-[#0088CC] mb-6 text-2xl md:text-2xl font-semibold py-3">
                    <span>{{ data.name }}</span>
                </div>
                <div class="block md:flex">
                    <div class="w-full md:w-[240px]">
                        <v-img class="w-full rounded-lg flex-none mx-auto mb-6 md:mb-0" width="100%" aspect-ratio="1" :lazy-src="data.image" :src="data.image"
                            alt="" />
                    </div>
                    <div class="md:ml-6 flex-1 py-5 md:pl-4 md:pr-10 md:border rounded-md text-base sm:text-lg h-fit border-slate-300">
                        <div class="flex border-b border-slate-300 pb-3 mb-2">
                            <div class="font-semibold w-[140px]">
                                <span>Nama Lengkap</span>
                            </div>
                            <div>
                                <span>: &nbsp; {{ data.name }}</span>
                            </div>
                        </div>
                        <div class="flex border-b border-slate-300 pb-3 mb-2">
                            <div class="font-semibold w-[140px]">
                                <span>Jabatan</span>
                            </div>
                            <div>
                                <span>: &nbsp; {{ data.job }}</span>
                            </div>
                        </div>
                        <div class="flex border-b border-slate-300 pb-3 mb-2">
                            <div class="font-semibold w-[140px]">
                                <span>NIP</span>
                            </div>
                            <div>
                                <span>: &nbsp; {{ data.nip ?? '-' }}</span>
                            </div>
                        </div>
                        <div>
                            <p class="font-semibold text-base sm:text-lg mb-4 mt-3">Visi & Misi</p>
                            <div class="quill-content" v-html="data.visi ?? '-'"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-2">
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-2xl font-semibold py-3">
                    <span>Perangkat Desa Lainya</span>
                </div>
                <div class="mb-3 px-5 pt-3 rounded-md border border-slate-300">
                    <div @click="$router.push('/perangkat-desa/' + perangkat.slug)"
                        class="border-slate-300 pb-5 cursor-pointer mb-1 py-2 flex"
                        v-for="(perangkat,index) in perangkatDesa" :class="index != perangkatDesa.length - 1 ? 'border-b' : ''">
                        <div class="flex-none mr-4">
                            <v-img class="rounded-md" width="60" aspect-ratio="1" :lazy-src="perangkat.image" :src="perangkat.image" alt="" />
                        </div>
                        <div class="block">
                            <div class="font-medium text-[#0088CC] text-base md:text-lg">
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
<style scoped>
::v-deep img {
    border-radius: 6px;
    width: 100%;
    object-fit: cover;
}
</style>