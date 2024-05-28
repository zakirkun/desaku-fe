<script setup>
useHead({
    title: 'Admin Profile',
})
</script>
<script>
export default {
    data() {
        return {
            form: {
                name: null,
                email: null,
                password: null,
            },
            showPassword: false,
            loading: false
        }
    },
    async mounted() {
        await this.loadData()
    },
    methods: {
        async loadData() {
            const data = await $fetch(this.$config.public.PUBLIC_API_BASE_URL + '/api/admin', {
                headers: {
                    Authorization: "Bearer " + useToken().token
                },
            })
            this.form.name = data.name
            this.form.email = data.email
            this.form.password = data.password
        },
        async updateAdmin() {
            this.loading = true

            await $fetch(this.$config.public.PUBLIC_API_BASE_URL + '/api/admin-profile/', {
                method: "PATCH",
                headers: {
                    Authorization: "Bearer " + useToken().token
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
        <div class="text-2xl font-semibold mb-2">Admin Profile</div>
    </div>
    <div class="grid animate-fade mb-6">
        <div class="col-12">
            <div class="card">
                <v-text-field v-model="form.name" variant="outlined" hide-details="auto"
                    label="Name"></v-text-field>
                <v-text-field class="my-5" v-model="form.email" variant="outlined" hide-details="auto"
                    label="Email*"></v-text-field>
                <v-text-field :type="showPassword ? 'text' : 'password'" v-model="form.password" dense
                    variant="outlined" hide-details="auto" label="Kata Sandi">
                    <template v-slot:append-inner>
                        <svg class="cursor-pointer" @click="showPassword = true" v-if="!showPassword"
                            xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                            <path fill="black"
                                d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                        </svg>
                        <svg class="cursor-pointer" @click="showPassword = false" v-else
                            xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                            <path fill="black"
                                d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7" />
                        </svg>
                    </template>
                </v-text-field>
                <v-btn @click="updateAdmin" color="#10B981" class="mt-6 text-white px-3 py-2">
                    <span class="capitalize" v-if="!loading">Update</span>
                    <Loader v-else />
                </v-btn>
            </div>
        </div>
    </div>
</template>
