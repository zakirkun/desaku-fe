<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';
const model = ref([
    {
        label: 'Menu',
        items: [
            {
                label: 'Profil Desa',
                icon: 'pi pi-fw pi-users',
                items: [
                    { label: 'Tentang Kami', to: "/dashboard/profile/about" },
                    { label: 'Visi & Misi', to: "/dashboard/profile/visi" },
                    { label: 'Sejarah Desa', to: "/dashboard/profile/history" },
                ]
            },
            {
                label: 'Informasi Publik',
                icon: 'pi pi-fw pi-book',
                items: [
                    { label: 'Berita', to: "/dashboard/news" },
                    { label: 'Galeri', to: "/dashboard/gallery" },
                    { label: 'Pengumuman', to: "/dashboard/announcement" },
                ]
            },
            {
                label: 'Pengaturan',
                icon: 'pi pi-fw pi-cog',
                items: [
                    { label: 'Gambar Beranda', to: "/dashboard/setting/homepageimage" },
                    { label: 'Lokasi Desa', to: "/dashboard/setting/location" },
                    { label: 'Footer', to: "/dashboard/setting/footer" },
                    { label: 'Header', to: "/dashboard/setting/header" },
                    // { label: 'Pengaturan', to: "/dashboard/pengaturan" },
                ]
            },
        ]
    },
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
