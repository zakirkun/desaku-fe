<script setup>
definePageMeta({
    layout: 'app'
});

const route = useRouter().currentRoute.value
const data = ref(null)

data.value = await $fetch('/api/lembaga/slug/' + route.params.id)

useHead({
    title: data.value.name + " Lembaga Desa"
})
</script>
<template>
    <div class="animate-fade flex-1 px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-[2.5rem] ">
        <BreadCrumb :child="data.name">
            <template v-slot:root>
                <span @click="navigateTo('/lembaga-desa')">Lembaga Desa</span>
            </template>
        </BreadCrumb>
        <div class="pb-8">
            <h1 class="mb-8 font-semibold text-[#0088CC] text-2xl">{{ data.name }}</h1>
            <div class="block md:flex items-center">
                <div clas="flex-none w-full">
                    <v-img :lazy-src="data.image" :src="data.image" class="rounded-md mx-auto" cover width="240" aspect-ratio="16/9"/>
                </div>
                <div class="block text-base md:text-lg font-medium description-lembaga">
                    <div class="flex py-3 border-b border-slate-300">
                        <div class="flex-none w-[140px] sm:w-[200px]">
                            Nama Lembaga
                        </div>
                        <div>
                            : {{ data.name }}
                        </div>
                    </div>
                    <div class="flex py-3 border-b border-slate-300">
                        <div class="flex-none w-[140px] sm:w-[200px]">
                            Singkatan
                        </div>
                        <div>
                            : {{ data.surname }}
                        </div>
                    </div>
                    <div class="flex py-3 border-b border-slate-300">
                        <div class="flex-none w-[140px] sm:w-[200px]">
                            Alamat Lengkap
                        </div>
                        <div>
                            : {{ data.address }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8 text-lg sm:text-xl">
                <div class="border border-[#0088CC] rounded-md">
                    <div class="bg-[#0088CC] text-white px-2 py-3 font-medium rounded-t-md">
                        Profil Lembaga
                    </div>
                    <div class="px-3 py-5 text-[14px] quill-content" v-if="data.profile" v-html="data.profile"></div>
                </div>
                <div class="border border-[#0088CC] rounded-md mt-8">
                    <div class="bg-[#0088CC] text-white px-2 py-3 font-medium rounded-t-md">
                        Visi & Misi
                    </div>
                    <div class="px-3 py-5 text-[14px] quill-content" v-if="data.visi" v-html="data.visi"></div>
                </div>
                <div class="border border-[#0088CC] rounded-md mt-8">
                    <div class="bg-[#0088CC] text-white px-2 py-3 font-medium rounded-t-md">
                        Tugas
                    </div>
                    <div class="px-3 py-5 text-[14px] quill-content" v-if="data.tugas" v-html="data.tugas"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.description-lembaga {
    margin-left: 24px;
    margin-top: 0;
}

@media screen and (max-width: 600px) {
    .description-lembaga {
        margin-left: 0;
        margin-top: 12px;
    }
}
</style>
