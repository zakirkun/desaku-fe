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
            form: {
                description: null,
                video: null
            },
        }
    },
    methods: {
        async addVideo() {
            await $fetch('http://127.0.0.1:8000/api/video-gallery', {
                method: "POST",
                body: this.form
            })

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
                <Button @click="addVideo" class="mt-5 bg-[#10B981] text-white px-3 py-2"
                    label="Submit"></Button>
            </div>
        </div>
    </div>
</template>
