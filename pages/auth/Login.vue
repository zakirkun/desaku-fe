<script setup>
definePageMeta({
    layout: 'app',
});

useHead({
    title: 'Login',
})
</script>

<script>
import { useToken } from '~/stores/token'

export default {
    data() {
        return {
            loading: false,
            showPassword: false,
            form: {
                email: null,
                password: null,
            },
            toastUnauthorized: false
        }
    },
    mounted() {
    },
    methods: {
        async login() {
            this.loading = true
            this.form.content = this.data

            const { valid } = await this.$refs.form.validate()

            if (valid) {
                try {
                    const resp = await $fetch(this.$config.public.API_BASE_URL + '/api/auth/login', {
                        method: "POST",
                        body: this.form
                    })

                    useToken().token = resp.token

                    this.$router.push('/dashboard/news')
                } catch (err) {
                    this.toastUnauthorized = true
                }
            }

            this.loading = false
        },
    }
}
</script>

<template>
    <v-snackbar v-model="toastUnauthorized" color="red" :timeout="3000">
        User tidak ditemukan!

        <template v-slot:actions>
            <v-btn color="white" variant="text" @click="toastUnauthorized = false">
                Tutup
            </v-btn>
        </template>
    </v-snackbar>
    <div class="bg-[#F8FAFC] flex items-center justify-center min-h-screen min-w-screen overflow-hidden">
        <div class="md:w-[400px] flex flex-column align-items-center justify-center">
            <img @click="$router.push('/')" class="cursor-pointer w-[100px] mb-6 mx-auto"
                src="https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/images/logo_header.png"
                alt="App logo" />
            <div class="bg-white px-8"
                style="border-radius: 36px; padding: 0.3rem; background: linear-gradient(180deg, #0088CC 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center mb-5 text-white">
                        <div class="text-900 text-3xl font-medium mb-3">Welcome Back!</div>
                        <span class="text-600 font-medium">Sign in to continue</span>
                    </div>

                    <v-form ref="form">
                        <div class="mt-12">
                            <label for="password1" class="block text-900 font-medium text-lg mb-4">Email</label>
                            <v-text-field :rules="[v => !!v || 'Field is required']" type="email" v-model="form.email"
                                dense variant="outlined" hide-details="auto" label="Alamat Email"></v-text-field>

                            <label for="password1" class="block text-900 font-medium text-lg my-4">Password</label>
                            <v-text-field :rules="[v => !!v || 'Field is required']"
                                :type="showPassword ? 'text' : 'password'" v-model="form.password" dense
                                variant="outlined" hide-details="auto" label="Kata Sandi">
                                <template v-slot:append-inner>
                                    <svg class="cursor-pointer" @click="showPassword = true" v-if="!showPassword"
                                        xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                                        viewBox="0 0 24 24">
                                        <path fill="black"
                                            d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                                    </svg>
                                    <svg class="cursor-pointer" @click="showPassword = false" v-else
                                        xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                                        viewBox="0 0 24 24">
                                        <path fill="black"
                                            d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7" />
                                    </svg>
                                </template>
                            </v-text-field>

                            <v-btn elevation="0" @click="login" color="#0088CC" text-color="white"
                                class="w-full mt-8 text-white px-3 py-2">
                                <span v-if="!loading">Login</span>
                                <Loader v-else />
                            </v-btn>
                        </div>
                    </v-form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}

::v-deep .v-btn__content {
    text-transform: capitalize;
    font-family: 'General Sans', sans-serif !important;
}

::v-deep .v-btn {
    font-family: 'General Sans', sans-serif !important;
}
</style>
