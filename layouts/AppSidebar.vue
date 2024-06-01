<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Menu',
        items: [
            {
                user: false,
                label: 'Profil Desa',
                icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'Tentang Desa', to: "/dashboard/profile/about" },
                    { label: 'Visi & Misi', to: "/dashboard/profile/visi" },
                    { label: 'Sejarah Desa', to: "/dashboard/profile/history" },
                ]
            },
            {
                user: true,
                label: 'Informasi Publik',
                icon: 'pi pi-fw pi-book',
                items: [
                    { label: 'Berita', to: "/dashboard/news" },
                    { label: 'Galeri', to: "/dashboard/gallery" },
                    { label: 'Pengumuman', to: "/dashboard/announcement" },
                    { label: 'Kegiatan', to: "/dashboard/activities" },
                    { label: 'Potensi Desa', to: "/dashboard/potensi-desa" },
                ]
            },
            {
                user: false,
                label: 'Pemerintahan',
                icon: 'pi pi-fw pi-sitemap',
                items: [
                    { label: 'Perangkat Desa', to: "/dashboard/perangkat-desa" },
                    { label: 'Jabatan', to: "/dashboard/jabatan" },
                    { label: 'Lembaga', to: "/dashboard/lembaga" },
                    { label: 'Struktur Organisasi', to: "/dashboard/struktur-organisasi" },
                ]
            },
            {
                user: false,
                label: 'Pengaturan',
                icon: 'pi pi-fw pi-cog',
                items: [
                    { label: 'Gambar Beranda', to: "/dashboard/setting/homepageimage" },
                    { label: 'Lokasi Desa', to: "/dashboard/setting/location" },
                    { label: 'Footer', to: "/dashboard/setting/footer" },
                    { label: 'Header', to: "/dashboard/setting/header" },
                ]
            },
            // {
            //     user: false,
            //     label: 'Admin',
            //     icon: 'pi pi-fw pi-users',
            //     to: '/dashboard/admin'
            // },
        ]
    },
]);

model.value[0].items = model.value[0].items.filter((v) => {
    if (useParseJWT().value.is_admin == 1) {
        return v
    } else {
        return v.user
    }
})
</script>


<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-else class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
