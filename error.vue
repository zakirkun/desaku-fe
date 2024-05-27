<template>
    <div class="w-full min-h-screen flex justify-center items-center">
        <div>
            <img @click="$router.push('/')" class="cursor-pointer mx-auto mb-3" width="100"
                src="https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/images/logo_header.png"
                alt="">
            <h1 class="font-semibold text-2xl">Upss... Halaman tidak Ditemukan</h1>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: "404 Not Found"
})
</script>