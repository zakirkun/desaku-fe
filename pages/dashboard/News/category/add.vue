<script setup>
useHead({
    title: 'Tambah Kategori Berita',
})
</script>
<script>
export default {
    data() {
        return {
            data: null,
            loading: false,
            renderRichEditor: false,
            form: {
                name: null,
            },
            headers: [
                { title: 'Title', align: 'start', sortable: false, key: 'title' },
                { title: 'Category', align: 'start', key: 'category' },
                { title: 'Content', align: 'end', key: 'content' },
            ],
            items: [],
        }
    },
    async mounted() {
        const data = await $fetch(this.$config.public.API_BASE_URL + '/api/news-category')
        this.items = data
        this.renderRichEditor = true
    },
    methods: {
        async addNews() {
            this.loading = true
            this.form.content = this.data

            await $fetch(this.$config.public.API_BASE_URL + '/api/news-category', {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                },
                body: this.form
            })
            this.loading = false

            this.$router.push('/dashboard/news')
        },
        contentChange(v) {
            this.data = v
        }
    }
}
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h3 class="text-2xl font-medium mb-5">Tambah Kategori Berita</h3>
                <div>
                    <v-text-field v-model="form.name" variant="outlined" hide-details="auto"
                        label="Kategori Berita"></v-text-field>
                </div>
                <v-btn @click="addNews" color="#10B981" class="mt-5 text-white px-3 py-2">
                    <span class="capitalize" v-if="!loading">Submit</span>
                    <Loader v-else />
                </v-btn>
            </div>
        </div>
    </div>
</template>
