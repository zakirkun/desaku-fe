<script>
import { createSlug } from "@/helpers/createSlug" 

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
                thumbnail: null,
                slug: null
            },
        }
    },
    async mounted() {
        const data = await $fetch(this.$config.public.API_PUBLIC_URL + '/api/announcement/' + this.$route.query.id)
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
            this.form.slug = createSlug(this.form.title)

            await $fetch(this.$config.public.API_PUBLIC_URL + '/api/announcement/' + this.$route.query.id, {
                method: "PATCH",
                headers: {
                    Authorization: "Bearer " + useToken().token
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
    <Head>
        <Title>Edit Pengumuman</Title>
    </Head>
    <div class="grid animate-fade">
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
                <v-btn @click="updateAnnouncement" color="#10B981" class="mt-5 text-white px-3 py-2">
                    <span class="capitalize" v-if="!loading">Ubah</span>
                    <Loader v-else />
                </v-btn>
            </div>
        </div>
    </div>
</template>