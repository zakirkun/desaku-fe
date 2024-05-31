<script setup>
import moment from 'moment';

const route = useRouter().currentRoute.value
const categoryName = ref(null)
const post = reactive({
    title: null,
    content: null
})

const { title, name, content } = await $fetch('/api/potensi-desa/slug/' + route.params.id)

post.title = title
post.content = content
categoryName.value = name

definePageMeta({
    layout: 'app'
});
</script>
<template>
    <Head>
        <Title>{{ post.title }}</Title>
    </Head>
    <div
        class="animate-fade flex-1 block pb-[5rem] px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6">
        <BreadCrumb :child="post.title">
            <template v-slot:root>
                <span @click="navigateTo('/potensi-desa')">Potensi Desa</span>
            </template>
        </BreadCrumb>
        <div :class="$vuetify.display.mobile ? 'pb-12' : 'pb-4'"
            class="grid grid-cols-1 md:grid-cols-6 md:gap-x-12 gap-y-8">
            <div class="block col-span-1 md:col-span-4">
                <div class="text-[#0088CC] text-2xl mb-2 font-semibold py-3">
                    <span>{{ post.title }}</span>
                </div>
                <div class="text-md flex items-center font-medium mt-2 mb-4">
                    <IconsDate />
                    <span class="mx-2">{{ moment(post.created_at).format("LL") }}</span>
                    <IconsTag />
                    <span class="ml-1">{{ categoryName }}</span>
                </div>
                <div class="w-full font-normal quill-content" v-html="post.content"></div>
            </div>
            <div class="col-span-2">
                <PartialsPotensiCategory />
                <PartialsLatestPotensi />
            </div>
        </div>
    </div>
</template>