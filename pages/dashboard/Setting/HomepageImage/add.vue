<script setup>
useHead({
    title: 'Tambah Gambar Beranda'
});
</script>

<script>
export default {
    data() {
        return {
            data: null,
            form: {
                description: null,
                image: null
            },
            openMediaLibrary: false,
            loading: false
        }
    },
    methods: {
        async addImageHomepage() {
            const { valid } = await this.$refs.form.validate()

            if (!valid) {
                return
            }

            this.loading = true
            await $fetch(this.$config.public.API_PUBLIC_URL + '/api/image-homepage', {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + useToken().token
                },
                body: this.form
            })
            this.loading = false

            this.$router.push('/dashboard/setting/homepageimage')
        },
        onImageSelected(val) {
            this.form.image = val
        }
    }
}
</script>

<template>
    <MediaLibrary @onImageSelected="onImageSelected" @onCloseModal="openMediaLibrary = false"
        :open="openMediaLibrary" />
    <div class="grid animate-fade">
        <div class="col-12">
            <div class="card">
                <h3 class="text-2xl font-medium mb-5">Tambah Gambar Beranda</h3>
                <v-form ref="form">
                    <div>
                        <v-textarea :rules="[v => !!v || 'Field is required']" rows="2" variant="outlined"
                            label="Deskripsi Gambar" clearable v-model="form.description"></v-textarea>
                    </div>
                </v-form>
                <div class="relative w-fit" v-if="form.image">
                    <v-img :src="form.image" width="300" />
                    <div @click="form.image = null" class="absolute cursor-pointer right-3 top-3 z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48">
                            <defs>
                                <mask id="ipSCloseOne0">
                                    <g fill="none" stroke-linejoin="round" stroke-width="4">
                                        <path fill="#fff" stroke="#fff"
                                            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                                        <path stroke="#000" stroke-linecap="round"
                                            d="M29.657 18.343L18.343 29.657m0-11.314l11.314 11.314" />
                                    </g>
                                </mask>
                            </defs>
                            <path fill="#10B981" d="M0 0h48v48H0z" mask="url(#ipSCloseOne0)" />
                        </svg>
                    </div>
                </div>
                <div class="my-3">
                    <v-btn @click="openMediaLibrary = true" color="#10B981" class="flex-none text-white px-3 ">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 20 20">
                                <path fill="white"
                                    d="M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z" />
                            </svg>
                            <div class="ml-1 font-semibold">Media Library</div>
                        </div>
                    </v-btn>
                </div>
                <v-btn @click="addImageHomepage" color="#10B981" class="mt-5 text-white px-3 py-2">
                    <span class="capitalize" v-if="!loading">Submit</span>
                    <Loader v-else />
                </v-btn>
            </div>
        </div>
    </div>
</template>
