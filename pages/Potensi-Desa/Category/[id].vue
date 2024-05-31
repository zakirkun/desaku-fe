<script setup>
import moment from 'moment';

const route = useRouter().currentRoute.value
const potensi = ref(null)
const categoryName = ref(null)

const { data, category_name } = await $fetch('/api/potensi-desa?category=' + route.params.id)

potensi.value = data
categoryName.value = category_name

definePageMeta({
    layout: 'app'
});

useHead({
    title: 'Potensi Desa: ' + category_name
});
</script>
<template>
    <div class="flex-1 animate-fade block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6">
        <BreadCrumb :child="category_name">
            <template v-slot:root>
                <span @click="navigateTo('/potensi-desa')">Potensi Desa</span>
            </template>
        </BreadCrumb>
        <div class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12">
            <div class="block col-span-1 md:col-span-4">
                <div class="text-[#0088CC] border-[#0088CC] border-b-2 mb-6 text-xl md:text-2xl font-semibold py-3">
                    <span>Potensi Desa: {{ category_name }}</span>
                </div>
                <div v-if="potensi.length > 0" @click="navigateTo('/potensi-desa/' + potensi.slug)"
                    class="cursor-pointer flex mb-[0.5rem] md:mb-2 h-[160px] md:h-[200px]" v-for="potensi in potensi">
                    <div class="h-[120px] sm:h-[160px] w-[140px] sm:w-[220px] md:w-[260px] flex-none">
                        <v-img :lazy-src="potensi.thumbnail" height="100%" aspect-ratio="4/3"
                            :src="potensi.thumbnail" />
                    </div>
                    <div class="block pl-4">
                        <div class="tetx-base md:text-xl font-semibold">
                            <span class="line-clamp-2">{{ potensi.title }}</span>
                        </div>
                        <div class="block md:flex">
                            <div class="text-xs md:text-base flex items-center font-medium mt-2">
                                <IconsDate />
                                <span class="ml-1">{{ moment(potensi.created_at).format("LL") }}</span>
                            </div>
                            <div class="text-xs md:text-base flex items-center font-medium mt-2 sm:ml-2">
                                <IconsTag />
                                <span class="ml-1">{{ potensi.category_name }}</span>
                            </div>
                        </div>
                        <div class="mt-2 text-sm md:text-base">
                            <span class="line-clamp-2 sm:line-clamp-3">{{ potensi.description }}</span>
                        </div>
                    </div>
                </div>
                <EmptyData v-else />
            </div>
            <div class="col-span-2">
                <PartialsPotensiCategory />
                <PartialsLatestPotensi />
            </div>
        </div>
    </div>
</template>
<style scoped>
::v-deep img {
    border-radius: 6px;
    width: 100%;
    object-fit: cover;
}
</style>
