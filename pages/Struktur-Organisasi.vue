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
const content = ref(null)

jabatan.value = await $fetch('/api/jabatan')
content.value = (await $fetch('/api/struktur-organisasi')).content

async function getPerangkat(id) {
    if (!id) {
        id = selectedJabatan.value
    }

    currentPerangkat.value = await $fetch('/api/jabatan/perangkat/' + id)
}
</script>

<template>
    <div
        class="animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6 min-h-[35rem]">
        <BreadCrumb>
            <template v-slot:root>
                <span>Struktur Organisasi</span>
            </template>
        </BreadCrumb>
        <div class="pb-8 block md:flex">
            <div class="hidden md:block flex-none w-[240px]">
                <div class="border-b cursor-pointer border-slate-300 py-2 flex" @click="getPerangkat(item.uuid)"
                    v-for="item in jabatan">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24">
                        <path fill="#0088CC"
                            d="m11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71" />
                    </svg>
                    <span>{{ item.name }}</span>
                </div>
            </div>
            <div class="flex md:hidden">
                <v-select v-model="selectedJabatan" @update:modelValue="getPerangkat(null)" label="Pilih Jabatan"
                    :items="jabatan" item-value="uuid" item-title="name"></v-select>
            </div>
            <div class="block flex-1 md:pl-10">
                <div v-if="!currentPerangkat">
                    <h1 class="mb-4 font-semibold text-[#0088CC] text-2xl">Struktur Organisasi</h1>
                    <div class="quill-content" v-html="content"></div>
                </div>
                <div v-else>
                    <p class="text-xl md:text-2xl mb-5 mt-4 font-semibold">{{ currentPerangkat[0]?.job ?? '-' }}</p>
                    <div class="animate-fade grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div @click="navigateTo('/perangkat-desa/' + item.slug)"
                            class="cursor-pointer rounded-lg block shadow-lg" v-for="item in currentPerangkat">
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
