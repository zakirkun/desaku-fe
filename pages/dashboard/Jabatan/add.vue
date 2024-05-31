<script setup>
useHead({
    title: 'Tambah Jabatan',
})
</script>
<script>
export default {
    data() {
        return {
            form: {
                job: null,
            },
            loading: false
        }
    },
    methods: {
        async addJabatan() {
            const { valid } = await this.$refs.form.validate()

            if (!valid) {
                return
            }

            this.loading = true

            await $fetch(this.$config.public.API_PUBLIC_URL + '/api/jabatan', {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + useToken().token
                },
                body: this.form
            })

            this.loading = false
            this.$router.push('/dashboard/jabatan')
        },
    }
}
</script>

<template>
    <div class="grid animate-fade">
        <div class="col-12">
            <div class="card">
                <h3 class="text-2xl font-medium mb-5">Tambah Jabatan</h3>
                <v-form ref="form">
                    <div class="grid grid-cols-1 gap-3">
                        <div class="mt-3">
                            <v-text-field :rules="[v => !!v || 'Field is required']" v-model="form.job"
                                variant="outlined" hide-details="auto" label="Jabatan"></v-text-field>
                        </div>
                    </div>
                </v-form>
                <v-btn @click="addJabatan" color="#10B981" class="mt-5 text-white px-3 py-2">
                    <span class="capitalize" v-if="!loading">Submit</span>
                    <Loader v-else />
                </v-btn>
            </div>
        </div>
    </div>
</template>
