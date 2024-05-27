<script setup>
useHead({
    title: 'Potensi Desa',
})
</script>
<script>
export default {
    data() {
        return {
            modalRemovePotensi: false,
            removedPotensiId: null,
            data: null,
            potensiCategory: [],
            headers: [
                { title: 'Title', align: 'start', sortable: false, key: 'title', width: "300px" },
                { title: 'Description', align: 'start', sortable: false, key: 'description', width: "300px" },
                { title: 'Thumbnail', align: 'start', key: 'thumbnail' },
                { title: 'Content', align: 'end', key: 'content' },
                { title: 'Actions', align: 'center', key: 'actions', sortable: false },
            ],
            headersCategory: [
                { title: 'Name', align: 'start', sortable: false, key: 'name', width: "300px" },
                { title: 'Actions', align: 'end', key: 'actions', sortable: false },
            ],
            loadingData: null,
            loadingCategory: null,
            items: [],
        }
    },
    async mounted() {
        await this.loadData()
        await this.loadPotensiCategory()
    },
    methods: {
        async loadData() {
            this.loadData = true

            const data = await $fetch(this.$config.public.API_BASE_URL + '/api/potensi-desa')
            this.items = data
            
            this.loadData = false
        },
        async loadPotensiCategory() {
            this.loadingCategory = true

            const data = await $fetch(this.$config.public.API_BASE_URL + '/api/potensi-category')
            this.potensiCategory = data

            this.loadingCategory = false
        },
        openModalRemovePotensi(id) {
            this.modalRemovePotensi = true
            this.removedPotensiId = id
        },
        async removePotensi() {
            await $fetch(this.$config.public.API_BASE_URL + '/api/potensi-desa/' + this.removedPotensiId, {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + useToken().token
                },
            })

            this.modalRemovePotensi = false
            await this.loadData()
        },
    }
}
</script>

<template>
    <v-dialog v-model="modalRemovePotensi" width="auto">
        <v-card height="auto" style="scrollbar-width: none">
            <template v-slot:title>
                <div class="flex items-center justify-between">
                    <div class="text-xl font-semibold">
                        <span>Hapus Potensi Desa?</span>
                    </div>
                    <div @click="modalRemovePotensi = false" class="cursor-pointer">
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
                    <span>Potensi Desa yang dihapus tidak bisa dikembalikan kembali.</span>
                </div>
            </template>
            <template v-slot:actions>
                <div class="w-full flex justify-end">
                    <v-btn variant="flat" @click="removePotensi" color="#FC4100"
                        class="w-fit mt-6 text-white px-3 mx-1 mb-2 py-2 text-md">
                        <span class="capitalize">Hapus</span>
                    </v-btn>
                </div>
            </template>
        </v-card>
    </v-dialog>
    <div class="flex justify-between items-center mb-3">
        <div class="text-2xl font-semibold mb-2">Potensi Desa</div>
        <div class="text-md font-semibold mb-2">
            <NuxtLink to="/dashboard/potensi-desa/add">
                <v-btn @click="updateContent" color="#10B981" class="mt-3 text-white px-3 py-2">
                    <span class="capitalize">Tambah Potensi Desa +</span>
                </v-btn>
            </NuxtLink>
        </div>
    </div>
    <div class="grid animate-fade mb-6">
        <div class="col-12">
            <div class="card">
                <v-data-table :loading="loadingData" :headers="headers" :items="items" item-key="name">
                    <template #bottom></template>
                    <template v-slot:item.content="{ value }">
                        <span v-if="value" v-html="value.slice(0, 100)"></span>
                        <span v-else>-</span>
                    </template>
                    <template v-slot:item.description="{ value }">
                        <span>{{ value.slice(0, 80) }}...</span>
                    </template>
                    <template v-slot:item.thumbnail="{ value }">
                        <v-img :src="value" width="100" height="100"></v-img>
                    </template>
                    <template v-slot:item.actions="{ item }">
                        <div class="flex justify-center">
                            <a :href="`/potensi-desa/${item.slug}`" target="_blank">
                                <div class="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                                        viewBox="0 0 24 24">
                                        <path fill="#212121"
                                            d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5" />
                                    </svg>
                                </div>
                            </a>
                            <div @click="$router.push('/dashboard/potensi-desa/edit?id=' + item.uuid)"
                                class="cursor-pointer mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                                    viewBox="0 0 24 24">
                                    <path fill="#212121" fill-rule="evenodd"
                                        d="M17.204 10.796L19 9c.545-.545.818-.818.964-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.545-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 0 0 4.023 3.977m-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9c-.14.26-.199.555-.316 1.145l-.616 3.077c-.066.332-.1.498-.005.593c.095.095.26.061.593-.005l3.077-.616c.59-.117.885-.176 1.146-.316c.26-.14.473-.352.898-.777l6.89-6.89a12.901 12.901 0 0 1-4.02-3.98"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="cursor-pointer" @click="openModalRemovePotensi(item.uuid)">
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
    <div class="flex justify-between items-center mb-3">
        <div class="text-2xl font-semibold mb-2">Kategori Potensi Desa</div>
        <div class="text-md font-semibold mb-2">
            <NuxtLink to="/dashboard/potensi-desa/category/add">
                <v-btn @click="updateContent" color="#10B981" class="mt-3 text-white px-3 py-2">
                    <span class="capitalize">Tambah Kategori +</span>
                </v-btn>
            </NuxtLink>
        </div>
    </div>
    <div class="grid animate-fade mb-6">
        <div class="col-12">
            <div class="card">
                <v-data-table :loading="loadingCategory" :headers="headersCategory" :items="potensiCategory" item-key="name">
                    <template #bottom></template>
                    <template v-slot:item.actions="{ item }">
                        <div class="flex justify-end">
                            <div @click="$router.push('/dashboard/potensi-desa/edit?id=' + item.uuid)"
                                class="cursor-pointer mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                                    viewBox="0 0 24 24">
                                    <path fill="#212121" fill-rule="evenodd"
                                        d="M17.204 10.796L19 9c.545-.545.818-.818.964-1.112a2 2 0 0 0 0-1.776C19.818 5.818 19.545 5.545 19 5c-.545-.545-.818-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.567.419-1.112.964l-1.819 1.819a10.9 10.9 0 0 0 4.023 3.977m-5.477-2.523l-6.87 6.87c-.426.426-.638.638-.778.9c-.14.26-.199.555-.316 1.145l-.616 3.077c-.066.332-.1.498-.005.593c.095.095.26.061.593-.005l3.077-.616c.59-.117.885-.176 1.146-.316c.26-.14.473-.352.898-.777l6.89-6.89a12.901 12.901 0 0 1-4.02-3.98"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="cursor-pointer" @click="openModalRemovePotensi(item.uuid)">
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
