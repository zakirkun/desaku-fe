<script setup>
definePageMeta({
    layout: 'app'
});

useHead({
    title: "Lembaga Desa"
})
</script>
<script>
export default {
    data: () => ({
        data: null,
        headerActive: false,
        showContent: false
    }),
    async mounted() {
        const data = await $fetch(this.$config.public.API_BASE_URL + '/api/lembaga')
        this.data = data
        this.showContent = true
    },
}
</script>

<template>
    <AnimationLoading v-if="!showContent" />
    <div v-else class="animate-fade px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem] min-h-[26rem]">
        <div class="flex mb-6 items-center bg-[#f0f0f0] px-3 py-3 rounded-lg">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 1024 1024">
                    <path fill="#0088CC"
                        d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5" />
                </svg>
            </div>
            <div>
                <span>/ Lembaga Desa</span>
            </div>
        </div>
        <div class="pb-8">
            <h1 class="mb-8 font-semibold text-[#0088CC] text-3xl">Lembaga Desa</h1>
            <div class="w-full">
                <div class="shadow overflow-hidden rounded border-b border-gray-200">
                    <table class="min-w-full bg-white">
                        <thead class="bg-gray-700 text-white">
                            <tr>
                                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Nama Lembaga</th>
                                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Alamat Kantor</th>
                                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Logo</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-700">
                            <tr v-for="(item, index) in data" @click="$router.push('/lembaga-desa/' + item.slug)" class="cursor-pointer" :class="index % 2 == 0 ? 'bg-gray-100' : ''">
                                <td class="text-[#0088CC] font-normal text-xl tw-1/3 text-left py-3 px-4">
                                    <div>
                                        {{ item.name }}
                                    </div>
                                    <div class="bg-[#0088CC] text-white w-fit px-2 rounded-md text-sm py-1 mt-2">
                                        {{  item.surname }}
                                    </div>
                                </td>
                                <td class="w-1/3 text-left py-3 px-4">{{ item.address }}</td>
                                <td class="text-left py-3 px-4">
                                    <img :src="item.image" width="160" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
