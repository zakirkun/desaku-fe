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
            this.loading = true
            await $fetch(this.$config.public.API_BASE_URL + '/api/video-gallery', {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                },
                body: this.form
            })

            this.loading = false
            this.$router.push('/dashboard/galeri')
        },
    }
}
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h3 class="text-2xl font-medium mb-5">Tambah Gambar Galeri</h3>
                <div>
                    <v-textarea rows="2" variant="outlined" label="Deskripsi Video" clearable
                        v-model="form.description"></v-textarea>
                </div>
                <div>
                    <v-text-field v-model="form.video" variant="outlined" hide-details="auto"
                        label="Video Galeri" placeholder="https://www.youtube.com/embed/DhcIUYHiJDI?si=m46FieubiMP8R7P4"></v-text-field>
                </div>
                <v-btn @click="addVideo" color="#10B981" class="mt-5 text-white px-3 py-2">
                    <span class="capitalize" v-if="!loading">Submit</span>
                    <Loading v-else/>
                </v-btn>
            </div>
        </div>
    </div>
</template>
