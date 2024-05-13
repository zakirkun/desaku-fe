<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';
const model = ref([
    {
        label: 'Menu',
        items: [
            {
                label: 'Halaman Beranda',
                icon: 'pi pi-fw pi-home',
                items: [
                    { label: 'Gambar Beranda', to: "/dashboard/gambar-beranda" },
                    { label: 'Lokasi Desa', to: "/dashboard/lokasi-desa" },
                    { label: 'Footer', to: "/dashboard/footer" },
                    { label: 'Pengaturan', to: "/dashboard/pengaturan" },
                ]
            },
            {
                label: 'Profil Desa',
                icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'Tentang Kami', to: "/dashboard/tentang-kami" },
                    { label: 'Visi & Misi', to: "/dashboard/visi-misi" },
                    { label: 'Sejarah Desa', to: "/dashboard/sejarah-desa" },
                ]
            },
            {
                label: 'Informasi Publik',
                icon: 'pi pi-fw pi-book',
                items: [
                    { label: 'Berita', to: "/dashboard/berita" },
                    { label: 'Galeri', to: "/dashboard/galeri" },
                    { label: 'Pengumuman', to: "/dashboard/pengumuman" },
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
