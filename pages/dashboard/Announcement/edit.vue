<script setup>
useHead({
    title: 'Edit Announcement',
})
</script>
<script>
export default {
    data() {
        return {
            modalRemoveThumbnail: false,
            data: null,
            image: null,
            renderRichEditor: false,
            thumbnailDeleted: false,
            loading: false,
            form: {
                title: null,
                category: null,
                description: null,
                content: null,
                thumbnail: ''
            },
        }
    },
    async mounted() {
        const data = await $fetch(this.$config.public.API_BASE_URL + '/api/announcement/' + this.$route.query.id)
        this.form = data
        this.data = data.content
        this.renderRichEditor = true
    },
    methods: {
        async updateAnnouncement() {
            this.loading = true
            if (this.thumbnailDeleted) {
                let urlImage = await this.uploadThumbnail()
                this.form.thumbnail = urlImage
            }

            this.form.content = this.data

            await $fetch(this.$config.public.API_BASE_URL + '/api/announcement/' + this.$route.query.id, {
                method: "PATCH",
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
                <h3 class="text-2xl font-medium mb-5">Ubah Pengumuman</h3>
                <div class="mb-8">
                    <v-text-field v-model="form.title" variant="outlined" hide-details="auto"
                        label="Judul Pengumuman"></v-text-field>
                </div>
                <div class="mb-8">
                    <v-text-field v-model="form.description" variant="outlined" hide-details="auto"
                        label="Deksripsi Pengumuman"></v-text-field>
                </div>
                <div class="mb-3 text-lg font-medium my-1">Konten</div>
                <RichEditor v-if="renderRichEditor" :data="data" @contentChange="contentChange" />
                <Button @click="updateAnnouncement" class="mt-5 bg-[#10B981] text-white px-3 py-2">
                    <span v-if="!loading">Ubah</span>
                    <Loader v-else />
                </Button>
            </div>
        </div>
    </div>
</template>