<script setup>
useHead({
    title: 'Setting Footer',
})
</script>
<script>
export default {
    data() {
        return {
            form: {
                profile_desa: null,
                address: null,
            },
            formSocialMedia: [
                {
                    name: "Instagram",
                    link: null
                }
            ],
            loading: false
        }
    },
    async mounted() {
        await this.loadData()
        await this.loadSocialMedia()
    },
    methods: {
        async loadData() {
            const data = await $fetch(this.$config.public.API_BASE_URL + '/api/footer')
            this.form = data
        },
        async loadSocialMedia() {
            const data = await $fetch(this.$config.public.API_BASE_URL + '/api/social-media')
            this.formSocialMedia = data
        },
        async updateFooter() {
            const { valid } = await this.$refs.form.validate()

            if (!valid) {
                return
            }

            this.loading = true

            await this.updateSocialMedia()
            await $fetch(this.$config.public.API_BASE_URL + '/api/footer', {
                method: "PATCH",
                headers: {
                    Authorization: "Bearer " + useToken().token
                },
                body: this.form
            })

            this.loading = false
        },
        async updateSocialMedia() {
            await $fetch(this.$config.public.API_BASE_URL + '/api/social-media', {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + useToken().token
                },
                body: {
                    social_media: this.formSocialMedia
                }
            })
        },
        addSocialMedia() {
            this.formSocialMedia.push({
                name: null,
                link: null
            })
        },
        removeSocialMedia(index) {
            this.formSocialMedia = this.formSocialMedia.filter((v, i) => {
                return i != index
            })
        }
    }
}
</script>

<template>
    <div class="flex justify-between items-center mb-3">
        <div class="text-2xl font-semibold mb-2">Pengaturan Footer</div>
    </div>
    <div class="grid mb-6">
        <div class="col-12">
            <div class="card">
                <v-form ref="form">
                    <v-textarea :rules="[v => !!v || 'Field is required']" rows="3" variant="outlined"
                        label="Profil Desa" clearable v-model="form.profile"></v-textarea>
                    <v-textarea :rules="[v => !!v || 'Field is required']" rows="2" variant="outlined"
                        label="Alamat Lengkap" clearable v-model="form.address"></v-textarea>
                    <div class="mb-5 text-lg font-medium my-1">Sosial Media</div>
                    <div class="block">
                        <div v-for="(sosmed, index) in formSocialMedia" class="mb-6 flex w-full">
                            <div class="w-1/3 flex-none">
                                <v-text-field :rules="[v => !!v || 'Field is required']" v-model="sosmed.name"
                                    variant="outlined" hide-details="auto" label="Nama Sosial Media"></v-text-field>
                            </div>
                            <v-text-field :rules="[v => !!v || 'Field is required']" class="mx-3" v-model="sosmed.link"
                                variant="outlined" hide-details="auto" label="Link"></v-text-field>
                            <div class="flex-none flex pt-3">
                                <v-btn v-if="index == formSocialMedia.length - 1" @click="addSocialMedia()"
                                    color="#10B981"
                                    style="height: 40px !important;width: 20px !important;padding: 0 0px !important">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em"
                                        viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14" />
                                    </svg>
                                </v-btn>
                                <v-btn v-else @click="removeSocialMedia(index)" color="#FC4100"
                                    style="height: 40px !important;width: 20px !important;padding: 0 0px !important">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em"
                                        viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="2"
                                            d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
                                    </svg>
                                </v-btn>
                            </div>
                        </div>
                    </div>
                </v-form>
                <v-btn @click="updateFooter" color="#10B981" class="mt-1 text-white px-3 py-2">
                    <span class="capitalize" v-if="!loading">Update</span>
                    <Loader v-else />
                </v-btn>
            </div>
        </div>
    </div>
</template>
