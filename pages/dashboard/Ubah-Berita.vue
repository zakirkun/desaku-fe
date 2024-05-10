<script>
export default {
    data() {
        return {
            data: null,
            categories: [],
            renderRichEditor: false,
            form: {
                title: null,
                category: null,
                content: null
            },
        }
    },
    async mounted() {
        await this.loadCategories()

        const data = await $fetch('http://127.0.0.1:8000/api/news/' + this.$route.query.id)
        this.form = data
        this.data = data.content
        this.renderRichEditor = true
    },
    methods: {
        async loadCategories() {
            const data = await $fetch('http://127.0.0.1:8000/api/news-category/')
            this.categories = data.map(v => v.name)
        },
        async updateNews() {
            this.form.content = this.data

            await $fetch('http://127.0.0.1:8000/api/news/' + this.$route.query.id, {
                method: "PATCH",
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
                <h3 class="text-2xl font-medium mb-5">Ubah Berita</h3>
                <div class="grid grid-cols-2 gap-x-6 mt-2">
                    <div>
                        <v-text-field v-model="form.title" variant="outlined" hide-details="auto"
                            label="Judul Berita"></v-text-field>
                    </div>
                    <div>
                        <v-select item-value="name" item-text="name" v-model="form.category"  label="Kategori Berita" :items="categories"
                            variant="outlined"></v-select>
                    </div>
                </div>
                <div class="mb-3 text-lg font-medium my-1">Konten</div>
                <RichEditor v-if="renderRichEditor" :data="data" @contentChange="contentChange" />
                <Button @click="updateNews" class="mt-5 bg-[#10B981] text-white px-3 py-2" label="Ubah"></Button>
            </div>
        </div>
    </div>
</template>
