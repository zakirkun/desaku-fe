<script setup>
useHead({
    title: 'Tambah Pengumuman',
})
</script>
<script>
import { createSlug } from "@/helpers/createSlug" 

export default {
    data() {
        return {
            modalRemoveThumbnail: false,
            image: null,
            categories: [],
            renderRichEditor: false,
            thumbnailDeleted: false,
            thumbnailUploaded: false,
            data: null,
            form: {
                title: null,
                description: null,
                content: null,
                thumbnail: null
            },
            headers: [
                { title: 'Title', align: 'start', sortable: false, key: 'title' },
                { title: 'Content', align: 'end', key: 'content' },
            ],
            items: [],
            loading: false
        }
    },
    async mounted() {
        this.renderRichEditor = true
    },
    methods: {
        async addAnnouncement() {
            this.loading = true
            this.form.content = this.data
            this.form.slug = createSlug(this.form.title)

            await $fetch(this.$config.public.API_BASE_URL + '/api/announcement', {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                },
                body: this.form
            })

            this.loading = false
            this.$router.push('/dashboard/announcement')
        },
        contentChange(v) {
            this.data = v
        },
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
                <h3 class="text-2xl font-medium mb-5">Tambah Pengumuman</h3>
                <div class="grid grid-cols-1 gap-3">
                    <div class="col-span-1">
                        <v-text-field v-model="form.title" variant="outlined" hide-details="auto"
                            label="Judul Pengumuman"></v-text-field>
                    </div>
                </div>
                <div class="mt-5">
                    <v-textarea rows="3" variant="outlined" label="Deskripsi Pengumuman" clearable v-model="form.description"></v-textarea>
                </div>
                <div class="mb-3 text-lg font-medium my-1">Konten</div>
                <RichEditor v-if="renderRichEditor" :data="data" @contentChange="contentChange" />
                <v-btn @click="addAnnouncement" color="#10B981" class="mt-3 text-white px-3 py-2">
                    <span class="capitalize" v-if="!loading">Submit</span>
                    <Loader v-else />
                </v-btn>
            </div>
        </div>
    </div>
</template>
