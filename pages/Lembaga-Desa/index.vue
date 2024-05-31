<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: "Lembaga Desa"
})

const data = ref(null)

data.value = await $fetch('/api/lembaga')
</script>
<template>
    <div class="animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6">
        <BreadCrumb>
            <template v-slot:root>
                <span @click="navigateTo('/lembaga-desa')">Lembaga Desa</span>
            </template>
        </BreadCrumb>
        <div class="pb-8">
            <h1 class="mb-8 font-semibold text-[#0088CC] text-2xl">Lembaga Desa</h1>
            <div class="w-full">
                <div class="shadow rounded-lg border-b border-gray-200">
                    <table class="w-full bg-white">
                        <thead class="bg-gray-700 rounded-lg text-white">
                            <tr class="rounded-lg">
                                <th class="w-1/3 text-left py-3 px-4 font-medium text-sm">Nama Lembaga</th>
                                <th class="w-1/3 text-left py-3 px-4 font-medium text-sm">Alamat Kantor</th>
                                <th class="text-left py-3 px-4 font-medium text-sm">Logo</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-700 overflow-x-scroll">
                            <tr v-for="(item, index) in data" @click="$router.push('/lembaga-desa/' + item.slug)"
                                class="cursor-pointer" :class="index % 2 == 0 ? 'bg-gray-100' : ''">
                                <td class="text-[#0088CC] font-normal tw-1/3 text-left text-sm md:text-xl  py-3 px-4">
                                    <div>
                                        {{ item.name }}
                                    </div>
                                    <div
                                        class="bg-[#0088CC] text-white w-fit px-2 text-sm md:text-base rounded-md py-1 mt-2">
                                        {{ item.surname }}
                                    </div>
                                </td>
                                <td class="w-1/3 text-left py-3 px-4 text-sm md:text-lg">{{ item.address }}</td>
                                <td class="text-left py-3 px-4">
                                    <v-img v-if="$vuetify.display.mobile" :lazy-src="item.image" :src="item.image"
                                        class="rounded-md" cover width="100%" aspect-ratio="16/9" />
                                    <v-img v-else :lazy-src="item.image" :src="item.image"
                                        class="rounded-md" cover width="160" aspect-ratio="16/9" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
thead {
    border-radius: 10px !important;
}
</style>
