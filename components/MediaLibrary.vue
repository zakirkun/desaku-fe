<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import { useDropzone } from "vue3-dropzone";

const loading = ref(false)
const currentTab = ref("listImage")
const images = ref([])
const imageSelected = ref(null)
const emit = defineEmits(['onImageSelected', 'onCloseModal'])

onMounted(async () => {
    await loadImages()
})

async function loadImages() {
    images.value = await $fetch(useRuntimeConfig().public.API_PUBLIC_URL + '/api/image', {
        headers: {
            Authorization: "Bearer " + useToken().token
        },
    })

    imageSelected.value = images.value["0"]
}

async function onDrop(files) {
    const formData = new FormData();
    formData.append("image", files[0]);

    loading.value = true
    await $fetch(useRuntimeConfig().public.API_PUBLIC_URL + '/api/image', {
        body: formData,
        headers: {
            Authorization: "Bearer " + useToken().token
        },
        method: "POST"
    })

    setTimeout(async () => {
        loading.value = false
        await loadImages()
        currentTab.value = 'listImage'
    }, 1000)
}

async function removeImage() {
    imageSelected.value = imageSelected.value.replace(useRuntimeConfig().public.API_PUBLIC_URL + '/storage/', '')

    await $fetch(useRuntimeConfig().public.API_PUBLIC_URL + '/api/image/' + imageSelected.value, {
        method: "DELETE",
        headers: {
            Authorization: "Bearer " + useToken().token
        },
    })

    await loadImages()
}

function useImage() {
    emit('onImageSelected', imageSelected.value);
    emit('onCloseModal')
}

const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });
</script>
<script>
export default {
    data: () => ({
        openModal: false,
    }),
    props: ['open'],
    watch: {
        open() {
            this.openModal = this.open
        }
    },
    methods: {
        closeModal() {
            this.openModal = false
            this.$emit('onCloseModal')
        },
    }
}
</script>
<template>
    <v-dialog v-model="openModal" width="75%">
        <v-card height="auto" style="scrollbar-width: none">
            <template v-slot:title>
                <div class="flex items-center border-b border-slate-200 pb-3 justify-between">
                    <div class="text-xl font-semibold">
                        <span>Pustaka Gambar</span>
                    </div>
                    <div @click="closeModal" class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                            <g fill="none" stroke="black" stroke-width="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5" />
                            </g>
                        </svg>
                    </div>
                </div>
            </template>
            <template v-slot:text>
                <div class="w-full">
                    <v-tabs align-tabs="start" v-model="currentTab" fixed-tabs>
                        <v-tab value="uploadImage">
                            Upload Gambar
                        </v-tab>
                        <v-tab value="listImage">
                            Semua Gambar
                        </v-tab>
                    </v-tabs>
                    <div v-if="currentTab == 'listImage'" class="block md:flex pt-6">
                        <div class="bg-[#F6F7F7] flex-1 px-6 pt-4">
                            <div class="text-xl font-semibold mb-4">Gambar Dipilih</div>
                            <v-img v-if="imageSelected" width="100%" class="rounded-md" aspect-ration="1"
                                :lazy-src="imageSelected" :src="imageSelected" />
                            <div class="flex pb-4">
                                <v-btn @click="useImage" color="#10B981"
                                    class="w-fit mt-6 text-white px-3 mx-1 mb-2 py-2 text-md">
                                    <span class="capitalize">Pilih Gambar</span></v-btn>
                                <v-btn @click="removeImage" color="#FC4100"
                                    class="w-fit mt-6 text-white px-1 mx-1 mb-2 py-2 text-md">
                                    <IconsTrash />
                                </v-btn>
                            </div>
                        </div>
                        <div :class="$vuetify.display.mobile ? 'mt-10' : 'mt-0'" class="w-full md:w-3/4 md:mt-1 px-3 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div @click="imageSelected = image"
                                :class="{ 'border-4 border-[#10B981]': imageSelected == image }"
                                class="relative rounded-lg cursor-pointer items-center flex" v-for="image in images">
                                <v-img width="100%" class="rounded-md" aspect-ratio="1" cover :lazy-src="image"
                                    :src="image" />
                                <svg v-if="imageSelected == image" class="rounded-md absolute right-[2px] top-0"
                                    xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16">
                                    <path fill="#10B981"
                                        d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm6.354 4.854l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 9.293l3.146-3.147a.5.5 0 0 1 .708.708" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="flex justify-center items-center h-[300px]" v-bind="getRootProps()">
                            <input v-bind="getInputProps()" />
                            <div>
                                <p class="text-xl font-semibold">Drop files to upload</p>
                                <p class="w-fit mx-auto my-3">atau</p>
                                <div class="flex justify-center">
                                    <v-btn color="#10B981">
                                        <span v-if="!loading">Upload Gambar</span>
                                        <Loader v-else />
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </v-card>
    </v-dialog>
</template>
<style>
.v-tabs--fixed-tabs .v-slide-group__content>*:first-child,
.v-tabs--align-tabs-center .v-slide-group__content>*:first-child {
    margin-inline-start: 0;
}
</style>