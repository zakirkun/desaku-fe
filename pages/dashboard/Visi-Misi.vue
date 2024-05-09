<script>
export default {
    data() {
        return {
            data: null,
            renderRichEditor: false
        }
    },
    async mounted() {
        const data = await $fetch('http://api.desaku.muhichsan.com/api/visi')
        this.data = data.tentang
        this.renderRichEditor = true
    },
    methods: {
        async updateContent() {
            await $fetch('http://api.desaku.muhichsan.com/api/visi', {
                method: "POST",
                body: {
                    content: this.data
                }
            })
        },
        contentChange(v){
            this.data = v
        }
    }
}
</script>

<template>
    <div class="text-2xl font-semibold mb-2">Visi Misi</div>
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
