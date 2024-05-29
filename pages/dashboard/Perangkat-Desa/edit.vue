<script setup>
useHead({
    title: 'Edit Perangkat Desa',
})
</script>
<script>
import { createSlug } from "@/helpers/createSlug"

export default {
    data() {
        return {
            openMediaLibrary: false,
            image: null,
            renderRichEditor: false,
            data: null,
            form: {
                name: null,
                job: null,
                job_id: null,
                image: null,
                slug: null,
                nip: null,
                visi: null
            },
            loading: false,
            jabatan: [],
            jabatanName: [],
        }
    },
    async mounted() {
        await this.loadJabatan()
        const data = await $fetch(this.$config.public.API_PUBLIC_URL + '/api/perangkat-desa/' + this.$route.query.id)
        this.form = data
        this.renderRichEditor = true
    },
    methods: {
        async loadJabatan() {
            this.jabatan = await $fetch(this.$config.public.API_PUBLIC_URL + '/api/jabatan')
            this.jabatanName = this.jabatan.map(v => v.name)
        },
        async updatePerangkat() {
            const { valid } = await this.$refs.form.validate()

            if (!valid) {
                return
            }

            this.form.job_id = this.jabatan.filter(v => v.name == this.form.job)[0].uuid
            this.form.slug = createSlug(this.form.name)
            this.loading = true

            await $fetch(this.$config.public.API_PUBLIC_URL + '/api/perangkat-desa/' + this.$route.query.id, {
                method: "PATCH",
                headers: {
                    Authorization: "Bearer " + useToken().token
                },
                body: this.form
            })

            this.loading = false
            this.$router.push('/dashboard/perangkat-desa')
        },
        contentChange(v) {
            this.form.visi = v
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
                <h3 class="text-2xl font-medium mb-5">Edit Perangkat Desa</h3>
                <v-form ref="form">
                    <div class="grid grid-cols-1 gap-3">
                        <div class="col-span-1">
                            <v-text-field :rules="[v => !!v || 'Field is required']" v-model="form.name"
                                variant="outlined" hide-details="auto" label="Nama"></v-text-field>
                        </div>
                        <div class="col-span-1 mt-3">
                            <v-text-field v-model="form.nip" variant="outlined" hide-details="auto"
                                label="NIP (Nomor Identitas Pegawai)"></v-text-field>
                        </div>
                        <div class="mt-3">
                            <v-select :rules="[v => !!v || 'Field is required']" v-model="form.job" :items="jabatanName"
                                variant="outlined" hide-details="auto" label="Jabatan"></v-select>
                        </div>
                        <div class="mb-3 text-lg font-medium my-1">Visi & Misi</div>
                        <RichEditor v-if="renderRichEditor" :data="form.visi" @contentChange="contentChange" />
                        <div class="relative w-fit mt-4" v-if="form.image">
                            <v-img :src="form.image" width="300" />
                            <div @click="form.image = null" class="absolute cursor-pointer right-3 top-3 z-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                                    viewBox="0 0 48 48">
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
                        <div class="my-1">
                            <v-btn @click="openMediaLibrary = true" color="#10B981" class="flex-none text-white px-3 ">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em"
                                        viewBox="0 0 20 20">
                                        <path fill="white"
                                            d="M17.125 6.17L15.079.535c-.151-.416-.595-.637-.989-.492L.492 5.006c-.394.144-.593.597-.441 1.013l2.156 5.941V8.777c0-1.438 1.148-2.607 2.56-2.607H8.36l4.285-3.008l2.479 3.008zM19.238 8H4.767a.761.761 0 0 0-.762.777v9.42c.001.444.343.803.762.803h14.471c.42 0 .762-.359.762-.803v-9.42A.761.761 0 0 0 19.238 8M18 17H6v-2l1.984-4.018l2.768 3.436l2.598-2.662l3.338-1.205L18 14z" />
                                    </svg>
                                    <div class="ml-1 font-semibold">Media Library</div>
                                </div>
                            </v-btn>
                        </div>
                    </div>
                </v-form>
                <v-btn @click="updatePerangkat" color="#10B981" class="mt-5 text-white px-3 py-2">
                    <span class="capitalize" v-if="!loading">Submit</span>
                    <Loader v-else />
                </v-btn>
            </div>
        </div>
    </div>
</template>
