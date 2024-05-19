<script>
export default {
    data: () => ({
        data: [],
    }),
    async mounted() {
        await this.loadData()
    },
    methods: {
        async loadData() {
            this.data = await $fetch(this.$config.public.API_BASE_URL + '/api/footer')
        },
    }
}
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-[6rem] gap-y-8 px-[2rem] md:px-[14rem] bg-[#0088CC] text-white py-8">
        <div class="block">
            <div class="text-xl md:text-2xl font-semibold">
                <span>Profil</span>
            </div>
            <div class="text-sm mt-3 leading-6">
                <span>
                    {{  data.profile }}
                </span>
            </div>
        </div>
        <div class="block">
            <div class="text-xl md:text-2xl font-semibold">
                <span>Sosial Media</span>
            </div>
            <div class="text-sm mt-3">
                <ul class="ml-4 list-disc">
                    <li v-if="data.instagram"><a class="text-white" target="_blank" :href="data.instagram">Instagram</a></li>
                    <li v-if="data.facebook"><a class="text-white" target="_blank" :href="data.facebook">Facebook</a></li>
                    <li v-if="data.whatsapp"><a class="text-white" target="_blank" :href="data.whatsapp">Whatsapp</a></li>
                    <li v-if="data.twitter"><a class="text-white" target="_blank" :href="data.twitter">Twitter</a></li>
                    <li v-if="data.youtube"><a class="text-white" target="_blank" :href="data.youtube">Channel Youtube</a></li>
                </ul>
            </div>
        </div>
        <div class="block">
            <div class="text-xl md:text-2xl font-semibold">
                <span>Alamat Lengkap</span>
            </div>
            <div class="text-sm mt-3">
                <span>{{ data.address }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
li {
    margin-bottom: 6px;
}
</style>