<script setup>
useHead({
    title: 'Tambah Video Galeri',
})
</script>
<script>
export default {
    data() {
        return {
            data: null,
            loading: false,
            form: {
                description: null,
                video: null
            },
        }
    },
    methods: {
        async addVideo() {
            const { valid } = await this.$refs.form.validate()

            if (!valid) {
                return
            }

            this.loading = true
            await $fetch(this.$config.public.API_PUBLIC_URL + '/api/video-gallery', {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + useToken().token
                },
                body: this.form
            })

            this.loading = false
            this.$router.push('/dashboard/gallery')
        },
    }
}
</script>

<template>
    <div class="grid animate-fade">
        <div class="col-12">
            <div class="card">
                <h3 class="text-2xl font-medium mb-5">Tambah Gambar Galeri</h3>
                <v-form ref="form">
                    <div>
                        <v-textarea :rules="[v => !!v || 'Field is required']" rows="2" variant="outlined" label="Deskripsi Video" clearable
                            v-model="form.description"></v-textarea>
                    </div>
                    <div>
                        <v-text-field :rules="[v => !!v || 'Field is required']" v-model="form.video" variant="outlined" hide-details="auto" label="Video Galeri"
                            placeholder="https://www.youtube.com/embed/DhcIUYHiJDI?si=m46FieubiMP8R7P4"></v-text-field>
                    </div>
                </v-form>
                <v-btn @click="addVideo" color="#10B981" class="mt-5 text-white px-3 py-2">
                    <span class="capitalize" v-if="!loading">Submit</span>
                    <Loader v-else />
                </v-btn>
            </div>
        </div>
    </div>
</template>
