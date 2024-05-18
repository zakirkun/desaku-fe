<script setup>
useHead({
    title: 'Setting Header',
})
</script>
<script>
export default {
    data() {
        return {
            form: {
                no_telp: null,
                email: null,
            },
            loading: false
        }
    },
    async mounted() {
        await this.loadData()
    },
    methods: {
        async loadData() {
            const data = await $fetch('http://api.desaku.muhichsan.com/api/header')
            this.form = data
        },
        async updateHeader() {
            this.loading = true

            await $fetch('http://api.desaku.muhichsan.com/api/header', {
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
        <div class="text-2xl font-semibold mb-2">Pengaturan Header</div>
    </div>
    <div class="grid mb-6">
        <div class="col-12">
            <div class="card">
                <v-text-field v-model="form.no_telp" variant="outlined" hide-details="auto" label="No Telepon"></v-text-field>
                <v-text-field class="my-4" v-model="form.email" variant="outlined" hide-details="auto" label="Email"></v-text-field>
                <Button @click="updateHeader" class="mt-1 bg-[#10B981] text-white px-3 py-2">
                    <span v-if="!loading">Update</span>
                    <Loader v-else />
                </Button>
            </div>
        </div>
    </div>
</template>
