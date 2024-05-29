<script setup>
useHead({
    title: 'Tambah Kategori Berita',
})
</script>
<script>
import { createSlug } from "@/helpers/createSlug" 

export default {
    data() {
        return {
            loading: false,
            form: {
                name: null,
                slug: null,
            },
        }
    },
    methods: {
        async addPotensiCategory() {
            const { valid } = await this.$refs.form.validate()

            if (!valid) {
                return
            }

            this.loading = true
            this.form.slug = createSlug(this.form.name)

            await $fetch(this.$config.public.API_PUBLIC_URL + '/api/potensi-category', {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + useToken().token
                },
                body: this.form
            })
            
            this.loading = false
            this.$router.push('/dashboard/potensi-desa')
        },
    }
}
</script>

<template>
    <div class="grid animate-fade">
        <div class="col-12">
            <div class="card">
                <h3 class="text-2xl font-medium mb-5">Tambah Kategori Potensi Desa</h3>
                <v-form ref="form">
                    <div>
                        <v-text-field :rules="[v => !!v || 'Field is required']" v-model="form.name" variant="outlined" hide-details="auto"
                            label="Kategori Potensi"></v-text-field>
                    </div>
                </v-form>
                <v-btn @click="addPotensiCategory" color="#10B981" class="mt-5 text-white px-3 py-2">
                    <span class="capitalize" v-if="!loading">Submit</span>
                    <Loader v-else />
                </v-btn>
            </div>
        </div>
    </div>
</template>
