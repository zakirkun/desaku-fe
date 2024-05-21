<script setup>
useHead({
    title: 'Tambah Kegiatan',
})
</script>
<script>
import { createSlug } from "@/helpers/createSlug" 

export default {
    data() {
        return {
            image: null,
            renderRichEditor: false,
            data: null,
            form: {
                title: null,
                description: null,
                content: null,
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
            const { valid } = await this.$refs.form.validate()

            if (!valid) {
                return
            }

            this.loading = true
            this.form.content = this.data
            this.form.slug = createSlug(this.form.title)

            await $fetch(this.$config.public.API_BASE_URL + '/api/activities', {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + useToken().token
                },
                body: this.form
            })

            this.loading = false
            this.$router.push('/dashboard/activities')
        },
        contentChange(v) {
            this.data = v
        },
    }
}
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h3 class="text-2xl font-medium mb-5">Tambah Kegiatan</h3>
                <v-form ref="form">
                    <div class="grid grid-cols-1 gap-3">
                        <div class="col-span-1">
                            <v-text-field :rules="[v => !!v || 'Field is required']" v-model="form.title" variant="outlined" hide-details="auto"
                                label="Judul Kegiatan"></v-text-field>
                        </div>
                        <div class="mt-3">
                            <v-textarea :rules="[v => !!v || 'Field is required']" rows="3" variant="outlined" label="Deskripsi Kegiatan" clearable v-model="form.description"></v-textarea>
                        </div>
                    </div>
                </v-form>
                <div class="mb-3 text-lg font-medium my-1">Konten</div>
                <RichEditor v-if="renderRichEditor" :data="data" @contentChange="contentChange" />
                <v-btn @click="addAnnouncement" color="#10B981" class="mt-5 text-white px-3 py-2">
                    <span class="capitalize" v-if="!loading">Submit</span>
                    <Loader v-else />
                </v-btn>
            </div>
        </div>
    </div>
</template>
