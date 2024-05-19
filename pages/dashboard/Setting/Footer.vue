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
                instagram: null,
                twitter: null,
                youtube: null,
                whatsapp: null,
                facebook: "Facebook",
            },
            sosmed: {
                instagram: "Instagram",
                twitter: "Twitter",
                youtube: "Youtube",
                whatsapp: "Whatsapp",
                facebook: "Facebook",
            },
            loading: false
        }
    },
    async mounted() {
        await this.loadData()
    },
    methods: {
        async loadData() {
            const data = await $fetch(this.$config.public.API_BASE_URL + '/api/footer')
            this.form = data
        },
        async updateFooter() {
            const { valid } = await this.$refs.form.validate()

            if (!valid) {
                return
            }

            this.loading = true

            await $fetch(this.$config.public.API_BASE_URL + '/api/footer', {
                method: "PATCH",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                },
                body: this.form
            })

            this.loading = false
        },
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
                    <div class="mb-3 text-lg font-medium my-1">Sosial Media</div>
                    <div class="mb-6 flex w-full items-center">
                        <div class="flex-auto grid grid-cols-2 gap-x-6">
                            <v-text-field readonly v-model="sosmed.instagram" variant="outlined" hide-details="auto"
                                label="Instagram"></v-text-field>
                            <v-text-field v-model="form.instagram" variant="outlined" hide-details="auto"
                                label="Link"></v-text-field>
                        </div>
                    </div>
                    <div class="mb-6 flex w-full items-center">
                        <div class="flex-auto grid grid-cols-2 gap-x-6">
                            <v-text-field readonly v-model="sosmed.twitter" variant="outlined" hide-details="auto"
                                label="Twitter"></v-text-field>
                            <v-text-field v-model="form.twitter" variant="outlined" hide-details="auto"
                                label="Link"></v-text-field>
                        </div>
                    </div>
                    <div class="mb-6 flex w-full items-center">
                        <div class="flex-auto grid grid-cols-2 gap-x-6">
                            <v-text-field readonly v-model="sosmed.facebook" variant="outlined" hide-details="auto"
                                label="Twitter"></v-text-field>
                            <v-text-field v-model="form.facebook" variant="outlined" hide-details="auto"
                                label="Link"></v-text-field>
                        </div>
                    </div>
                    <div class="mb-6 flex w-full items-center">
                        <div class="flex-auto grid grid-cols-2 gap-x-6">
                            <v-text-field readonly v-model="sosmed.youtube" variant="outlined" hide-details="auto"
                                label="Channel Youtube"></v-text-field>
                            <v-text-field v-model="form.youtube" variant="outlined" hide-details="auto"
                                label="Link"></v-text-field>
                        </div>
                    </div>
                    <div class="mb-6 flex w-full items-center">
                        <div class="flex-auto grid grid-cols-2 gap-x-6">
                            <v-text-field readonly v-model="sosmed.whatsapp" variant="outlined" hide-details="auto"
                                label="Whatsapp"></v-text-field>
                            <v-text-field v-model="form.whatsapp" variant="outlined" hide-details="auto"
                                placeholder="62897882637329" label="Link"></v-text-field>
                        </div>
                    </div>
                </v-form>
                <Button @click="updateFooter" class="mt-1 bg-[#10B981] text-white px-3 py-2">
                    <span v-if="!loading">Update</span>
                    <Loader v-else />
                </Button>
            </div>
        </div>
    </div>
</template>
