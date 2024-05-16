<script setup>
useHead({
    title: 'Add Homepage Image'
});
</script>

<script>
export default {
    data() {
        return {
            data: null,
            form: {
                description: null,
                image: null
            },
        }
    },
    methods: {
        async addImageHomepage() {
            this.form.image = await this.uploadImage()

            await $fetch('http://127.0.0.1:8000/api/image-homepage', {
                method: "POST",
                body: this.form
            })

            this.$router.push('/dashboard/setting/homepageimage')
        },
        async uploadImage() {
            const formData = new FormData();
            formData.append("image", this.form.image);

            const resp = await $fetch('http://127.0.0.1:8000/api/image', {
                body: formData,
                method: "POST"
            })

            return resp.data
        },
    }
}
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h3 class="text-2xl font-medium mb-5">Tambah Gambar Beranda</h3>
                <div>
                    <v-textarea rows="2" variant="outlined" label="Deskripsi Gambar" clearable
                        v-model="form.description"></v-textarea>
                </div>
                <v-file-input :clearable="false" v-if="!thumbnailUploaded" v-model="form.image"
                    label="Gambar" variant="outlined">
                </v-file-input>
                <Button @click="addImageHomepage" class="mt-5 bg-[#10B981] text-white px-3 py-2"
                    label="Submit"></Button>
            </div>
        </div>
    </div>
</template>
