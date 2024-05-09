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
        },
        contentChange(v) {
            this.data = v
        }
    }
}
</script>

<template>
    <div class="text-2xl font-semibold mb-2">Berita</div>
    <div class="grid mb-6">
        <div class="col-12">
            <div class="card">
                <h3 class="mb-3 text-xl font-medium">List Berita</h3>
                <v-data-table :headers="headers" :items="items" density="compact" item-key="name">
                    <template v-slot:item.content="{ value }">
                        <span v-html="value.slice(0, 100)"></span>
                    </template>
                </v-data-table>
            </div>
        </div>
    </div>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h3 class="mb-3 text-xl font-medium">Tambah Berita</h3>
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
                <div class="mb-3 text-lg font-medium my-2">Konten</div>
                <RichEditor v-if="renderRichEditor" :data="data" @contentChange="contentChange" />
                <Button @click="addNews" class="mt-3 bg-[#10B981] text-white px-3 py-2" label="Submit"></Button>
            </div>
        </div>
    </div>
</template>
