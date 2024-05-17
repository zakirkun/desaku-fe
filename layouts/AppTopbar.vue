<script setup>
import { ref, computed } from 'vue';
import { useLayout } from './composables/layout';
const { onMenuToggle } = useLayout();
const topbarMenuActive = ref(false);

const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
});
</script>

<template>
    <div class="layout-topbar">
        <router-link to="/dashboard" class="layout-topbar-logo">
            <img src="https://kertamulya-padalarang.desa.id/assets/files/data/website-desa-kertamulya-3217082001/images/logo_header.png"
                alt="logo" />
            <span>Dashboard</span>
        </router-link>

        <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
            <i class="pi pi-bars"></i>
        </button>
        
        <v-menu>
            <template v-slot:activator="{ props }">
                <Button v-bind="props" class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
                    <i class="pi pi-ellipsis-v"></i>
                </Button>
            </template>

            <div class="block rounded-lg cursor-pointer mt-2 bg-white border border-slate-200 pt-2">
                <div @click="$router.push('/admin-profile')"
                    class="mb-2 pt-4 flex px-7 border-b hover:bg-[#EDEDED] border-slate-300 pb-3">
                    <div class="bg-[#DBEAFE] rounded-lg flex items-center justify-center w-[40px] h-[40px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                            <path fill="#3267E3"
                                d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z" />
                        </svg>
                    </div>
                    <div class="block ml-3">
                        <div class="font-semibold">Admin Desaku</div>
                        <div>admindesaku@gmail.com</div>
                    </div>
                </div>
                <div @click="$router.push('/admin-profile')" class="mb-2 mt-2 px-7 pt-3 hover:bg-[#EDEDED] flex pb-3">
                    <div class="bg-[#FFF4F2] rounded-lg flex items-center justify-center w-[40px] h-[40px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                            <path fill="none" stroke="#CB3A31" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8m4-9l-4-4m4 4l-4 4m4-4H9" />
                        </svg>
                    </div>
                    <div class="block ml-3">
                        <div class="font-semibold">Logout</div>
                        <div>Keluar dari Dashboard</div>
                    </div>
                </div>
            </div>
        </v-menu>

        <div class="layout-topbar-menu" :class="topbarMenuClasses">
            <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                    <button @click="onTopBarMenuButton()" v-bind="props" class="p-link layout-topbar-button">
                        <i class="pi pi-user"></i>
                        <span>Profile</span>
                    </button>
                </template>

                <div class="block rounded-lg cursor-pointer mt-2 bg-white border border-slate-200 pt-2">
                    <div @click="$router.push('/admin-profile')" class="mb-2 pt-4 flex px-7 border-b hover:bg-[#EDEDED] border-slate-300 pb-3">
                        <div class="bg-[#DBEAFE] rounded-lg flex items-center justify-center w-[40px] h-[40px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path fill="#3267E3"
                                    d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5M20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1z" />
                            </svg>
                        </div>
                        <div class="block ml-3">
                            <div class="font-semibold">Admin Desaku</div>
                            <div>admindesaku@gmail.com</div>
                        </div>
                    </div>
                    <div @click="$router.push('/admin-profile')" class="mb-2 mt-2 px-7 pt-3 hover:bg-[#EDEDED] flex pb-3">
                        <div class="bg-[#FFF4F2] rounded-lg flex items-center justify-center w-[40px] h-[40px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path fill="none" stroke="#CB3A31" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8m4-9l-4-4m4 4l-4 4m4-4H9" />
                            </svg>
                        </div>
                        <div class="block ml-3">
                            <div class="font-semibold">Logout</div>
                            <div>Keluar dari Dashboard</div>
                        </div>
                    </div>
                </div>
            </v-menu>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
