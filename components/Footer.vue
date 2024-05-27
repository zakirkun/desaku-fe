<script>
export default {
    data: () => ({
        data: [],
        socialMedia: []
    }),
    async mounted() {
        await this.loadData()
        await this.loadSocialMedia()
    },
    methods: {
        async loadData() {
            this.data = await $fetch(this.$config.public.API_BASE_URL + '/api/footer')
        },
        async loadSocialMedia() {
            const data = await $fetch(this.$config.public.API_BASE_URL + '/api/social-media')
            this.socialMedia = data
        },
    }
}
</script>
<template>
    <div class="flex-none">
        <div
            class="grid grid-cols-1 md:grid-cols-3 gap-x-[6rem] gap-y-8 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] bg-[#0088CC] text-white py-8">
            <div class="block">
                <div class="text-xl md:text-2xl font-semibold">
                    <span>Profil</span>
                </div>
                <div class="text-sm mt-3 leading-6">
                    <span>
                        {{ data.profile }}
                    </span>
                </div>
            </div>
            <div class="block">
                <div class="text-xl md:text-2xl font-semibold">
                    <span>Sosial Media</span>
                </div>
                <div class="text-sm mt-3">
                    <ul class="text-base">
                        <li v-for="item in socialMedia" class="flex items-center">
                            <IconsInstagram v-if="item.name == 'Instagram'" />
                            <IconsFacebook v-if="item.name == 'Facebook'" />
                            <IconsTwitter v-if="item.name == 'Twitter'" />
                            <IconsWhatsapp v-if="item.name == 'Whatsapp'" />
                            <IconsYoutube v-if="item.name == 'Youtube'" />
                            <a class="ml-1 text-white" target="_blank" :href="item.link">{{ item.name }}</a>
                        </li>
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
        <div class="bg-[#0077B3] px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] text-white py-5">
            <p class="text-base">{{ data.copyright }}</p>
        </div>
    </div>
</template>
<style scoped>
li {
    margin-bottom: 6px;
}
</style>