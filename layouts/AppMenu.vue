<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';
const model = ref([
    {
        label: 'Menu',
        items: [
            {
                label: 'Profil Desa',
                icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'Tentang Kami', to: "/dashboard/tentang-kami" },
                    { label: 'Visi & Misi', to: "/dashboard/visi-misi" },
                    { label: 'Sejarah Desa', to: "/dashboard/sejarah-desa" },
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
