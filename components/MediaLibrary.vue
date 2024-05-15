<script>
export default {
    data: () => ({
        openModal: false,
        currentTab: "uploadImage",
        images: [],
        imageSelected: null
    }),
    props: ['open'],
    watch: {
        open() {
            this.openModal = this.open
        }
    },
    async mounted(){
        await this.loadImages()
    },
    methods: {
        async loadImages(){
            this.images = await $fetch('http://127.0.0.1:8000/api/image')
        },
        closeModal() {
            this.openModal = false
            this.$emit('onCloseModal')
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
                    {{  currentTab }}
                    <div class="grid grid-cols-4 gap-8" v-if="currentTab == 'listImage'">
                        <div @click="imageSelected = image" :class="{'border-4 border-[#10B981]' : imageSelected == image}" class="cursor-pointer h-[148px] items-center flex" v-for="image in images">
                            <img class="object-cover" style="height: 140px;" :src="image"/>
                        </div>
                    </div>
                </div>
            </template>
        </v-card>
    </v-dialog>
</template>
<style>
.v-tabs--fixed-tabs .v-slide-group__content > *:first-child, .v-tabs--align-tabs-center .v-slide-group__content > *:first-child {
    margin-inline-start: 0;
}
</style>