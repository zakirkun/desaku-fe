<script>
export default {
    data() {
        return {
            form: {
                desa: null,
                kecamatan: null,
                kelurahan: null,
                rt: null,
                rw: null,
                kabupaten: null,
                maps: null,
            },
        }
    },
    async mounted() {
        await this.loadData()
    },
    methods: {
        async loadData() {
            const data = await $fetch('http://127.0.0.1:8000/api/location')
            this.form = data
        },
        async updateLocation() {
            await $fetch('http://127.0.0.1:8000/api/location', {
                method: "PATCH",
                body: this.form
            })
        },
    }
}
</script>

<template>
    <div class="flex justify-between items-center mb-3">
        <div class="text-2xl font-semibold mb-2">Lokasi Desa</div>
    </div>
    <div class="grid mb-6">
        <div class="col-12">
            <div class="card">
                <v-textarea rows="3" variant="outlined" label="Profil Desa" clearable
                    v-model="form.profile"></v-textarea>
                <v-textarea rows="2" variant="outlined" label="Alamat Lengkap" clearable
                    v-model="form.address"></v-textarea>
                <div class="mb-3 text-lg font-medium my-1">Sosial Media</div>
                <div class="mb-6 flex w-full items-center" v-for="i in 4">
                    <div class="flex-auto grid grid-cols-2 gap-x-6">
                        <v-text-field v-model="form.title" variant="outlined" hide-details="auto"
                            label="Sosial Media"></v-text-field>
                        <v-text-field v-model="form.title" variant="outlined" hide-details="auto"
                            label="Link"></v-text-field>
                    </div>
                    <div class="flex-none ml-6">
                        <Button @click="updateLocation" class="bg-[#10B981] text-white text-2xl pa-2" label="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M5 12h14m-7-7v14" />
                            </svg>
                        </Button>
                    </div>
                </div>
                <Button @click="updateLocation" class="mt-5 bg-[#10B981] text-white px-3 py-2" label="Submit"></Button>
            </div>
        </div>
    </div>
</template>
