<script setup>
const features = ref([
    {
        img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/services.svg",
        name: "Pengumuman",
        href: "/pengumuman"
    },
    {
        img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/Asset186.svg",
        name: "Potensi Desa",
        href: "/potensi-desa"
    },
    {
        img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/Asset187.svg",
        name: "Berita Desa",
        href: "/berita"
    },
    {
        img: "https://kertamulya-padalarang.desa.id/themes/default/assets/images/illustrator/Asset192.svg",
        name: "Keuangan Desa"
    }
],)
</script>
<template>
    <div
        class=" block md:flex justify-between items-center px-[2rem] sm:px-[6rem] md:px-[3rem] lg:px-[10rem] xl:px-[14rem] pt-8 pb-3">
        <div @click="$router.push(feature.href)" class="cursor-pointer block w-fit mx-auto md:mb-0 mb-4"
            v-for="feature in features">
            <div class="w-fit mx-auto">
                <img class="w-[80px] h-[80px]" :src="feature.img" alt="" srcset="">
            </div>
            <div class="mt-2 text-center font-medium text-base md:text-lg">
                <span>{{ feature.name }}</span>
            </div>
        </div>
    </div>
</template>