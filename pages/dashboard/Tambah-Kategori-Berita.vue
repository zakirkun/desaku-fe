<script>
export default {
    data() {
        return {
            data: null,
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
        const data = await $fetch('http://127.0.0.1:8000/api/news-category')
        this.items = data
        this.renderRichEditor = true
    },
    methods: {
        async addNews() {
            this.form.content = this.data

            await $fetch('http://127.0.0.1:8000/api/news-category', {
                method: "POST",
                body: this.form
            })

            this.$router.push('/dashboard/berita')
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
                <Button @click="addNews" class="mt-5 bg-[#10B981] text-white px-3 py-2" label="Submit"></Button>
            </div>
        </div>
    </div>
</template>
