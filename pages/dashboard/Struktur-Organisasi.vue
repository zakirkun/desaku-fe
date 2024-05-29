<script setup>
useHead({
    title: 'Struktur Organisasi',
})
</script>
<script>
export default {
    data() {
        return {
            data: null,
            renderRichEditor: false,
            loading: false
        }
    },
    async mounted() {
        const data = await $fetch(this.$config.public.API_PUBLIC_URL + '/api/struktur-organisasi')
        this.data = data.content
        this.renderRichEditor = true
    },
    methods: {
        async updateContent() {
            this.loading = true
            await $fetch(this.$config.public.API_PUBLIC_URL + '/api/struktur-organisasi', {
                method: "PATCH",
                headers: {
                    Authorization: "Bearer " + useToken().token
                },
                body: {
                    content: this.data
                }
            })
            this.loading = false
        },
        contentChange(v){
            this.data = v
        }
    }
}
</script>

<template>
    <div class="text-2xl font-semibold mb-2">Struktur Organisasi</div>
    <div class="grid animate-fade">
        <div class="col-12">
            <div class="card">
                <h3 class="mb-3 text-xl font-medium">Konten</h3>
                <RichEditor v-if="renderRichEditor" :data="data" @contentChange="contentChange"/>
                <v-btn @click="updateContent" color="#10B981" class="mt-3 text-white px-3 py-2">
                    <span class="capitalize" v-if="!loading">Submit</span>
                    <Loader v-else />
                </v-btn>
            </div>
        </div>
    </div>
</template>
