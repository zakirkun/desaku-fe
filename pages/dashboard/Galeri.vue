<script>
export default {
    data() {
        return {
            modalRemoveImage: false,
            modalRemoveNewsCategory: false,
            removedNewsId: null,
            data: null,
            renderRichEditor: false,
            form: {
                title: null,
                category: null,
                content: null
            },
            headersImages: [
                { title: 'Description', align: 'start', sortable: false, key: 'description', width: "300px" },
                { title: 'Image', align: 'start', key: 'url' },
                { title: 'Actions', align: 'center', key: 'actions', sortable: false },
            ],
            headersVideos: [
                { title: 'Description', align: 'start', sortable: false, key: 'description', width: "300px" },
                { title: 'Video', align: 'start', key: 'url' },
                { title: 'Actions', align: 'end', key: 'actions', sortable: false },
            ],
            images: [],
            videos: [],
        }
    },
    async mounted() {
        await this.loadImage()
        await this.loadVideo()
    },
    methods: {
        async loadImage() {
            const data = await $fetch('http://127.0.0.1:8000/api/image-gallery')
            this.images = data
        },
        async loadVideo() {
            const data = await $fetch('http://127.0.0.1:8000/api/video-gallery')
            this.videos = data
        },
        openModalRemoveImages(id) {
            this.modalRemoveImage = true
            this.removedImageId = id
        },
        openModalRemoveVideos(id) {
            this.modalRemoveNewsCategory = true
            this.removedNewsCategoryId = id
        },
        async removeImageGallery() {
            await $fetch('http://127.0.0.1:8000/api/image-gallery/' + this.removedImageId, {
                method: "DELETE",
            })

            this.modalRemoveImage = false
            await this.loadImage()
        },
        async removeVideoGallery() {
            await $fetch('http://127.0.0.1:8000/api/video-gallery/' + this.removedNewsCategoryId, {
                method: "DELETE",
            })

            this.modalRemoveVideo = false
            await this.loadVideo()
        }
    }
}
</script>

<template>
    <v-dialog v-model="modalRemoveImage" width="auto">
        <v-card height="auto" style="scrollbar-width: none">
            <template v-slot:title>
                <div class="flex items-center justify-between">
                    <div class="text-xl font-semibold">
                        <span>Hapus Gambar?</span>
                    </div>
                    <div @click="modalRemoveImage = false" class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <g fill="none" stroke="black" stroke-width="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5" />
                            </g>
                        </svg>
                    </div>
                </div>
            </template>
            <template v-slot:text>
                <div>
                    <span>Gambar yang dihapus tidak bisa dikembalikan kembali.</span>
                </div>
            </template>
            <template v-slot:actions>
                <div class="w-full flex justify-end">
                    <Button @click="removeImageGallery"
                        class="w-fit mt-6 bg-[#FC4100] text-white px-3 mx-1 mb-2 py-2 text-md" label="Hapus"></Button>
                </div>
            </template>
        </v-card>
    </v-dialog>
    <v-dialog v-model="modalRemoveVideo" width="auto">
        <v-card height="auto" style="scrollbar-width: none" class="pa-4 px-4">
            <div class="flex items-center justify-between">
                <div class="text-xl font-semibold">
                    <span>Hapus Kategori Berita?</span>
                </div>
                <div @click="modalRemoveVideo = false" class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <g fill="none" stroke="black" stroke-width="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5" />
                        </g>
                    </svg>
                </div>
            </div>
            <div class="mt-3">
                <span>Video yang dihapus tidak bisa dikembalikan kembali.</span>
            </div>
            <template v-slot:actions>
                <Button @click="removeVideoGallery" class="mt-6 bg-[#FC4100] text-white px-3 py-2 text-md"
                    label="Hapus"></Button>
            </template>
        </v-card>
    </v-dialog>
    <div class="flex justify-between items-center mb-3">
        <div class="text-2xl font-semibold mb-2">Gambar Galeri</div>
        <div class="text-md font-semibold mb-2">
            <NuxtLink to="/dashboard/tambah-gambar-galeri">
                <Button class="mt-3 bg-[#10B981] text-white px-3 py-2 text-md" label="Tambah Gambar +"></Button>
            </NuxtLink>
        </div>
    </div>
    <div class="grid mb-6">
        <div class="col-12">
            <div class="card">
                <v-data-table :headers="headersImages" :items="images" item-key="name">
                    <template v-slot:item.url="{ value }">
                        <v-img :src="value" width="100" height="100"></v-img>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <div class="flex justify-center">
                            <div class="cursor-pointer" @click="openModalRemoveNews(item.uuid)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                                    viewBox="0 0 24 24">
                                    <path fill="#212121"
                                        d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z" />
                                </svg>
                            </div>
                        </div>
                    </template>
                </v-data-table>
            </div>
        </div>
    </div>
    <div class="flex justify-between items-center mb-3">
        <div class="text-2xl font-semibold mb-2">Video</div>
        <div class="text-md font-semibold mb-2">
            <NuxtLink to="/dashboard/tambah-video-galeri">
                <Button class="mt-3 bg-[#10B981] text-white px-3 py-2 text-md" label="Tambah Video +"></Button>
            </NuxtLink>
        </div>
    </div>
    <div class="grid mb-6">
        <div class="col-12">
            <div class="card">
                <v-data-table :headers="headersVideos" :items="videos" item-key="name">
                    <template v-slot:item.url="{ value }">
                        <iframe class="my-6" width="260" height="165"
                            :src="value"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <div class="flex float-right">
                            <div class="cursor-pointer" @click="openModalRemoveVideos(item.uuid)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                                    viewBox="0 0 24 24">
                                    <path fill="#212121"
                                        d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z" />
                                </svg>
                            </div>
                        </div>
                    </template>
                </v-data-table>
            </div>
        </div>
    </div>
</template>
