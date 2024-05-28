<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: "Struktur Organisasi"
})

const jabatan = ref([])
const selectedJabatan = ref(null)
const currentPerangkat = ref(null)

onMounted(async () => {
    await loadJabatan()
    showContent.value = true
})

async function loadJabatan() {
    const { data } = await useAsyncData(
        () => $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/jabatan')
    )

    jabatan.value = data.value
}

async function getPerangkat(id) {
    if (!id) {
        id = selectedJabatan.value
    }

    const { data } = await useAsyncData(
        () => $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/jabatan/perangkat/' + id)
    )
    currentPerangkat.value = data.value
}
</script>

<template>
    <div
        class="animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem] min-h-[35rem]">
        <div class="flex mb-6 items-cent</div>er bg-[#f0f0f0] px-2 py-3 rounded-lg">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024">
                    <path fill="#0088CC"
                        d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5" />
                </svg>
            </div>
            <div>
                <span>/ Struktur Organisasi</span>
            </div>
        </div>
        <div class="pb-8 block md:flex">
            <div v-if="!$vuetify.display.mobile" class="md:block flex-none w-[240px] hidden">
                <div class="border-b cursor-pointer border-slate-300 py-2 flex" @click="getPerangkat(item.uuid)"
                    v-for="item in jabatan">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                        <path fill="#0088CC"
                            d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71" />
                    </svg>
                    <span>{{ item.name }}</span>
                </div>
            </div>
            <div v-else>
                <v-select v-model="selectedJabatan" @update:modelValue="getPerangkat(null)" label="Pilih Jabatan"
                    :items="jabatan" item-value="uuid" item-title="name"></v-select>
            </div>

            <div class="block flex-1" :class="$vuetify.display.mobile ? 'pl-0' : 'pl-10'">
                <div v-if="!currentPerangkat">
                    <h1 class="mb-4 font-semibold text-[#0088CC] text-3xl">Struktur Organisasi</h1>
                    <img
                        src="https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/struktur_org_desa.png">
                </div>
                <div v-else>
                    <p class="text-2xl mb-5 font-semibold">{{ currentPerangkat[0]?.job ?? '-' }}</p>
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div @click="" class="cursor-pointer rounded-lg block shadow-lg"
                            v-for="item in currentPerangkat">
                            <div class="w-full h-[180px]">
                                <img :src="item.image" class="w-full h-full object-cover rounded-t-lg" />
                            </div>
                            <div class="bg-[#0088CC] rounded-b-lg text-white text-base font-medium pa-2">
                                <span>{{ item.name }}</span>
                                <br>
                                <span class="text-sm font-normal">{{ item.job }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
