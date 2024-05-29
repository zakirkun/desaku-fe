<script setup>
useHead({
    title: 'Setting Homepage Image'
});
</script>
<script>
export default {
    data() {
        return {
            modalRemoveImage: false,
            removedImageId: null,
            data: null,
            headers: [
                { title: 'Description', align: 'start', sortable: false, key: 'description', width: "300px" },
                { title: 'Image', align: 'start', key: 'url' },
                { title: 'Actions', align: 'center', key: 'actions', sortable: false },
            ],
            items: [],
        }
    },
    async mounted() {
        await this.loadData()
        await this.loadNewsCategory()
    },
    methods: {
        async loadData() {
            const data = await $fetch(this.$config.public.API_PUBLIC_URL + '/api/image-homepage')
            this.items = data
        },
        openModalRemoveImage(id) {
            this.modalRemoveImage = true
            this.removedImageId = id
        },
        async removeNews() {
            await $fetch(this.$config.public.API_PUBLIC_URL + '/api/image-homepage/' + this.removedImageId, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + useToken().token
                },
            })

            this.modalRemoveImage = false
            await this.loadData()
        },
    }
}
</script>

<template>
    <v-dialog v-model="modalRemoveImage" width="auto">
        <v-card height="auto" style="scrollbar-width: none">
            <template v-slot:title>
                <div class="flex items-center justify-between">
                    <div class="text-xl font-semibold">
                        <span>Hapus Gambar?</span>
                    </div>
                    <div @click="modalRemoveImage = false" class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                            <g fill="none" stroke="black" stroke-width="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <path stroke-linecap="round" d="m14.5 9.5l-5 5m0-5l5 5" />
                            </g>
                        </svg>
                    </div>
                </div>
            </template>
            <template v-slot:text>
                <div>
                    <span>Gambar yang dihapus tidak bisa dikembalikan kembali.</span>
                </div>
            </template>
            <template v-slot:actions>
                <div class="w-full flex justify-end">
                    <v-btn @click="removeNews" variant="flat" color="#FC4100" class="mt-6 text-white px-3 py-2  text-md">
                        <span class="capitalize">Hapus</span>
                    </v-btn>
                </div>
            </template>
        </v-card>
    </v-dialog>
    <div class="flex justify-between items-center mb-3">
        <div class="text-2xl font-semibold mb-2">Gambar Beranda</div>
        <div class="text-md font-semibold mb-2">
            <NuxtLink to="/dashboard/setting/homepageimage/add">
                <v-btn color="#10B981" class="mt-3 text-white px-3 py-2 text-md">
                    <span class="capitalize">Tambah Gambar +</span>
                </v-btn>
            </NuxtLink>
        </div>
    </div>
    <div class="grid animate-fade mb-6">
        <div class="col-12">
            <div class="card">
                <v-data-table :headers="headers" :items="items" item-key="name">
                    <template #bottom></template>
                    <template v-slot:item.url="{ value }">
                        <v-img :src="value" width="100" height="100"></v-img>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <div class="flex justify-center">
                            <div class="cursor-pointer" @click="openModalRemoveImage(item.uuid)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                                    viewBox="0 0 24 24">
                                    <path fill="#212121"
                                        d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7zm4 12H8v-9h2zm6 0h-2v-9h2zm.618-15L15 2H9L7.382 4H3v2h18V4z" />
                                </svg>
                            </div>
                        </div>
                    </template>
                </v-data-table>
            </div>
        </div>
    </div>
</template>
