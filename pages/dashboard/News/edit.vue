<script>
export default {
    data() {
        return {
            modalRemoveThumbnail: false,
            data: null,
            image: null,
            categories: [],
            renderRichEditor: false,
            thumbnailDeleted: false,
            form: {
                title: null,
                category: null,
                content: null,
                thumbnail: ''
            },
        }
    },
    async mounted() {
        await this.loadCategories()

        const data = await $fetch('http://127.0.0.1:8000/api/news/' + this.$route.query.id)
        this.form = data
        this.data = data.content
        console.log(data)
        this.renderRichEditor = true
    },
    methods: {
        async loadCategories() {
            const data = await $fetch('http://127.0.0.1:8000/api/news-category/')
            this.categories = data.map(v => v.name)
        },
        async updateNews() {
            if (this.thumbnailDeleted) {
                let urlImage = await this.uploadThumbnail()
                this.form.thumbnail = urlImage
            }

            this.form.content = this.data

            await $fetch('http://127.0.0.1:8000/api/news/' + this.$route.query.id, {
                method: "PATCH",
                body: this.form
            })

            this.$router.push('/dashboard/news')
        },
        contentChange(v) {
            this.data = v
        },
        async uploadThumbnail() {
            const formData = new FormData();
            formData.append("image", this.form.thumbnail);

            const resp = await $fetch('http://127.0.0.1:8000/api/image', {
                body: formData,
                method: "POST"
            })

            return resp.data
        },
        async removeThumbnailNews() {
            let thumbnail = this.form.thumbnail.replace('http://127.0.0.1:8000/storage/', '')

            await $fetch('http://127.0.0.1:8000/api/image/' + thumbnail, {
                method: "DELETE"
            })

            this.thumbnailDeleted = true
            this.modalRemoveThumbnail = false
        }
    }
}
</script>

<template>
    <v-dialog v-model="modalRemoveThumbnail" width="auto">
        <v-card height="auto" style="scrollbar-width: none">
            <template v-slot:title>
                <div class="flex items-center justify-between">
                    <div class="text-xl font-semibold">
                        <span>Hapus Thumbnail?</span>
                    </div>
                    <div @click="modalRemoveThumbnail = false" class="cursor-pointer">
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
                    <span>Thumbnail akan dihapus dari server, apakah anda yakin untuk menghapusnya?</span>
                </div>
            </template>
            <template v-slot:actions>
                <div class="w-full flex justify-end">
                    <Button @click="removeThumbnailNews"
                        class="w-fit mt-6 bg-[#FC4100] text-white px-3 mx-1 mb-2 py-2 text-md" label="Hapus"></Button>
                </div>
            </template>
        </v-card>
    </v-dialog>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h3 class="text-2xl font-medium mb-5">Ubah Berita</h3>
                <div class="mb-8">
                    <v-text-field v-model="form.title" variant="outlined" hide-details="auto"
                        label="Judul Berita"></v-text-field>
                </div>
                <div class="mb-2">
                    <v-select item-value="name" item-text="name" v-model="form.category" label="Kategori Berita"
                        :items="categories" variant="outlined"></v-select>
                </div>
                <div class="mb-3 text-lg font-medium my-1">Thumbnail Berita</div>
                <div class="relative w-fit" v-if="!thumbnailDeleted && form.thumbnail">
                    <v-img :src="form.thumbnail" width="300" />
                    <div @click="modalRemoveThumbnail = true" class="absolute cursor-pointer right-3 top-3 z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
                            <defs>
                                <mask id="ipSCloseOne0">
                                    <g fill="none" stroke-linejoin="round" stroke-width="4">
                                        <path fill="#fff" stroke="#fff"
                                            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                                        <path stroke="#000" stroke-linecap="round"
                                            d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314" />
                                    </g>
                                </mask>
                            </defs>
                            <path fill="#A3A3A3" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)" />
                        </svg>
                    </div>
                </div>
                <div class="mb-1 mt-6">
                    <v-file-input :clearable="false" v-if="thumbnailDeleted || !form.thumbnail" v-model="form.thumbnail"
                        label="Thumbnail Berita" variant="outlined">
                    </v-file-input>
                </div>
                <div class="mb-3 text-lg font-medium my-1">Konten</div>
                <RichEditor v-if="renderRichEditor" :data="data" @contentChange="contentChange" />
                <Button @click="updateNews" class="mt-5 bg-[#10B981] text-white px-3 py-2" label="Ubah"></Button>
            </div>
        </div>
    </div>
</template>
