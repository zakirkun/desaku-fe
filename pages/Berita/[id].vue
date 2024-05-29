<script setup>
import moment from 'moment';

definePageMeta({
    layout: 'app'
});

const post = ref(null)
const route = useRouter().currentRoute.value

post.value = await $fetch('/api/berita/slug/' + route.params.id)
</script>
<template>
    <Head>
        <Title>{{ post.title }}</Title>
    </Head>
    <div
        class="animate-fade flex-1 block px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem]  pt-6">
        <BreadCrumb :child="post.title">
            <template v-slot:root>
                <span>Berita</span>
            </template>
        </BreadCrumb>
        <div :class="$vuetify.display.mobile ? 'pb-12' : 'pb-4'" class="grid grid-cols-1 md:grid-cols-6 gap-y-8 md:gap-x-12">
            <div class="block col-span-1 md:col-span-4">
                <div class="text-[#0088CC] text-2xl mb-2 md:text-2xl font-semibold py-3">
                    <span>{{ post.title }}</span>
                </div>
                <div class="text-md flex items-center font-medium mt-2 mb-4">
                    <IconsDate />
                    <span class="ml-1">{{ moment(post.created_at).format("LL") }}</span>
                </div>
                <div class="w-full font-normal quill-content" v-html="post.content"></div>
            </div>
            <div class="col-span-2">
                <PartialsNewsCategory />
                <PartialsLatestNews />
            </div>
        </div>
    </div>
</template>