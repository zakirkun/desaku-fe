<script setup>
import moment from 'moment';

const route = useRouter().currentRoute.value
const post = reactive({
    title: null,
    content: null,
    created_at: null,
})

const data = await $fetch('/api/kegiatan/slug/' + route.params.id)

post.title = data.title
post.content = data.content
post.created_at = data.created_at

definePageMeta({
    layout: 'app'
});
</script>
<template>
    <Head>
        <Title>{{ post.title }}</Title>
    </Head>
    <div class="animate-fade block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-6">
        <BreadCrumb :child="post.title">
            <template v-slot:root>
                <span @click="navigateTo('/kegiatan')">Kegiatan</span>
            </template>
        </BreadCrumb>
        <div class="pb-12 grid grid-cols-1 md:grid-cols-6 md:gap-x-12 gap-y-8 ">
            <div class="block col-span-1 md:col-span-4">
                <div class="text-[#0088CC] mb-2 text-2xl md:text-2xl font-semibold py-3">
                    <span>{{ post.title }}</span>
                </div>
                <div class="text-md flex items-center font-medium mt-2 mb-4">
                    <IconsDate />
                    <span class="ml-1">{{ moment(post.created_at).format("LL") }}</span>
                </div>
                <div class="quill-content" v-html="post.content"></div>
            </div>
            <div class="col-span-2">
                <PartialsLatestActivities />
            </div>
        </div>
    </div>
</template>
