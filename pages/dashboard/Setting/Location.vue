<script setup>
useHead({
    title: 'Setting Location',
})
</script>
<script>
export default {
    data() {
        return {
            loading: false,
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
            const data = await $fetch(this.$config.public.API_BASE_URL + '/api/location')
            this.form = data
        },
        async updateLocation() {
            this.loading = true
            await $fetch(this.$config.public.API_BASE_URL + '/api/location', {
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
        <div class="text-2xl font-semibold mb-2">Lokasi Desa</div>
    </div>
    <div class="grid mb-6">
        <div class="col-12">
            <div class="card">
                <div class="grid grid-cols-2 gap-x-4">
                    <div>
                        <v-text-field v-model="form.desa" variant="outlined" hide-details="auto"
                            label="Desa"></v-text-field>
                    </div>
                    <div>
                        <v-text-field v-model="form.kabupaten" variant="outlined" hide-details="auto"
                            label="Kabupaten"></v-text-field>
                    </div>
                </div>
                <div class="grid grid-cols-2 my-5 gap-x-4">
                    <div>
                        <v-text-field v-model="form.kecamatan" variant="outlined" hide-details="auto"
                            label="Kecamatan"></v-text-field>
                    </div>
                    <div>
                        <v-text-field v-model="form.kelurahan" variant="outlined" hide-details="auto"
                            label="Kelurahan"></v-text-field>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-x-4">
                    <div>
                        <v-text-field v-model="form.rt" variant="outlined" hide-details="auto"
                            label="RT"></v-text-field>
                    </div>
                    <div>
                        <v-text-field v-model="form.rw" variant="outlined" hide-details="auto"
                            label="RW"></v-text-field>
                    </div>
                </div>
                <div class="mb-3 text-lg font-medium my-1 mt-6">Embed Maps Desa</div>
                <div class="mt-5 w-full">
                    <v-text-field v-model="form.maps" variant="outlined" hide-details="auto"
                        label="Koordinat Desa" placeholder="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13775.689247611277!2d110.4623105457275!3d-7.719445311589754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5b002c9e90df%3A0x23b5967fa1ba0b53!2sKledoan%20joglo&#39;s%20Villa!5e0!3m2!1sen!2sid!4v1715591524593!5m2!1sen!2sid">
                        <template v-slot:prepend-inner>
                            <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.2em"
                                viewBox="0 0 256 367">
                                <path fill="#34a853"
                                    d="M70.585 271.865a370.712 370.712 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z" />
                                <path fill="#fbbc04"
                                    d="M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z" />
                                <path fill="#4285f4"
                                    d="M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z" />
                                <path fill="#1a73e8"
                                    d="M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z" />
                                <path fill="#ea4335"
                                    d="M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z" />
                            </svg>
                        </template>
                    </v-text-field>
                    <div class="mx-auto mt-6 flex justify-center" v-html="form.maps" v-if="form.maps"></div>
                </div>
                <v-btn @click="updateLocation" color="#10B981" class="mt-5 text-white px-3 py-2">
                    <span class="capitalize" v-if="!loading">Update</span>
                    <Loader v-else/>
                </v-btn>
            </div>
        </div>
    </div>
</template>
