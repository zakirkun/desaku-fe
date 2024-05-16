<script>
export default {
    data: () => ({
        openModal: false,
        currentTab: "listImage",
        images: [],
        imageSelected: null
    }),
    props: ['open'],
    watch: {
        open() {
            this.openModal = this.open
        }
    },
    async mounted() {
        await this.loadImages()
    },
    methods: {
        async loadImages() {
            this.images = await $fetch('http://127.0.0.1:8000/api/image')
            this.imageSelected = this.images["1"]
        },
        closeModal() {
            this.openModal = false
            this.$emit('onCloseModal')
        },
        useImage() {
            this.$emit('onImageSelected', this.imageSelected);
            this.openModal = false
            this.$emit('onCloseModal')
        },
        async removeImage() {
            this.imageSelected = this.imageSelected.replace('http://127.0.0.1:8000/storage/', '')

            await $fetch('http://127.0.0.1:8000/api/image/' + this.imageSelected, {
                method: "DELETE"
            })

            await this.loadImages()
        }
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
                    <div class="flex pt-6">
                        <div class="w-3/4 px-8 grid grid-cols-4 gap-8" v-if="currentTab == 'listImage'">
                            <div @click="imageSelected = image"
                                :class="{ 'border-4 border-[#10B981]': imageSelected == image }"
                                class="relative cursor-pointer h-[146px] items-center flex" v-for="image in images">
                                <img class="object-cover w-full" style="height: 139px;" :src="image" />
                                <svg v-if="imageSelected == image" class="absolute right-[2px] top-0"
                                    xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16">
                                    <path fill="#10B981"
                                        d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm6.354 4.854l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 9.293l3.146-3.147a.5.5 0 0 1 .708.708" />
                                </svg>
                            </div>
                        </div>
                        <div class="bg-[#F6F7F7] flex-1 px-6 pt-4">
                            <div class="text-xl font-semibold mb-4">Gambar Dipilih</div>
                            <img v-if="imageSelected" :src="imageSelected" />
                            <div class="flex">
                                <Button @click="useImage"
                                    class="w-fit mt-6 bg-[#10B981] text-white px-3 mx-1 mb-2 py-2 text-md"
                                    label="Pilih Gambar"></Button>
                                <Button @click="removeImage"
                                    class="w-fit mt-6 bg-[#FC4100] text-white px-3 mx-1 mb-2 py-2 text-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em"
                                        viewBox="0 0 36 36">
                                        <path fill="white"
                                            d="M6 9v22a2.93 2.93 0 0 0 2.86 3h18.23A2.93 2.93 0 0 0 30 31V9Zm9 20h-2V14h2Zm8 0h-2V14h2Z"
                                            class="clr-i-solid clr-i-solid-path-1" />
                                        <path fill="white"
                                            d="M30.73 5H23V4a2 2 0 0 0-2-2h-6.2A2 2 0 0 0 13 4v1H5a1 1 0 1 0 0 2h25.73a1 1 0 0 0 0-2"
                                            class="clr-i-solid clr-i-solid-path-2" />
                                        <path fill="none" d="M0 0h36v36H0z" />
                                    </svg></Button>
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