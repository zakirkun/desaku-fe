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
        class="animate-fade flex-1 block pb-[5rem] px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem]  pt-6">
        <div class="flex mb-6 items-center bg-[#f0f0f0] pa-3 rounded-lg">
            <div class="flex items-center mr-2">
                <svg class="flex-none" xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em"
                    viewBox="0 0 1024 1024">
                    <path fill="#0088CC"
                        d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3c0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8c24.9-25 24.9-65.5-.1-90.5" />
                </svg>
                <div class="ml-2 text-sm md:text-base">
                    <span class="cursor-pointer" @click="$router.push('/berita')">/ &nbsp; Potensi Desa
                        &nbsp;</span><span>/ &nbsp;{{ post.title }}</span>
                </div>
            </div>
        </div>
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