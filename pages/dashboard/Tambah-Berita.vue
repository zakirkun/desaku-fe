<script>
export default {
    data() {
        return {
            data: null,
            renderRichEditor: false,
            form: {
                title: null,
                category: null,
                content: null
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
        const data = await $fetch('http://127.0.0.1:8000/api/news')
        this.items = data
        this.renderRichEditor = true
    },
    methods: {
        async addNews() {
            this.form.content = this.data

            await $fetch('http://127.0.0.1:8000/api/news', {
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
                <h3 class="text-2xl font-medium mb-5">Tambah Berita</h3>
                <div class="grid grid-cols-2 gap-x-6 mt-2">
                    <div>
                        <v-text-field v-model="form.title" variant="outlined" hide-details="auto"
                            label="Judul Berita"></v-text-field>
                    </div>
                    <div>
                        <v-select v-model="form.category" label="Kategori Berita"
                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                            variant="outlined"></v-select>
                    </div>
                </div>
                <div class="mb-3 text-lg font-medium my-1">Konten</div>
                <RichEditor v-if="renderRichEditor" :data="data" @contentChange="contentChange" />
                <Button @click="addNews" class="mt-5 bg-[#10B981] text-white px-3 py-2" label="Submit"></Button>
            </div>
        </div>
    </div>
</template>
