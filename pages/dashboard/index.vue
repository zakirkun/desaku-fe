<script setup>
useHead({
    title: 'Sejarah Desa',
})
</script>
<script>
export default {
    data() {
        return {
            data: null,
            renderRichEditor: false,
            openMediaLibrary: false
        }
    },
    async mounted() {
        const data = await $fetch('http://127.0.0.1:8000/api/sejarah')
        this.data = data.sejarah
        this.renderRichEditor = true
    },
    methods: {
        async updateContent() {
            await $fetch('http://127.0.0.1:8000/api/sejarah', {
                method: "POST",
                body: {
                    content: this.data
                }
            })
        },
        contentChange(v){
            this.data = v
        },
        onImageSelected(val){
            console.log(val)
        }
    }
}
</script>

<template>
    <div class="text-2xl font-semibold mb-2">Sejarah Desa</div>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h3 class="mb-3 text-xl font-medium">Konten</h3>
                <RichEditor v-if="renderRichEditor" :data="data" @contentChange="contentChange"/>
                <Button @click="updateContent" class="mt-3 bg-[#10B981] text-white px-3 py-2" label="Submit"></Button>
            </div>
        </div>
    </div>
</template>
