<script setup>
useHead({
    title: 'Edit Kategori Berita',
})
</script>
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
        const data = await $fetch('http://api.desaku.muhichsan.com/api/news-category/' + this.$route.query.id)
        this.form.name = data.name
    },
    methods: {
        async updateNews() {
            this.form.content = this.data

            await $fetch('http://api.desaku.muhichsan.com/api/news-category/' + this.$route.query.id, {
                method: "PATCH",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                },
                body: this.form
            })

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
                <h3 class="text-2xl font-medium mb-5">Ubah Kategori Berita</h3>
                <div>
                    <v-text-field v-model="form.name" variant="outlined" hide-details="auto"
                        label="Kategori Berita"></v-text-field>
                </div>
                <Button @click="updateNews" class="mt-5 bg-[#10B981] text-white px-3 py-2" label="Ubah"></Button>
            </div>
        </div>
    </div>
</template>
