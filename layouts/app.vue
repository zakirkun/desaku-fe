<script setup lang="ts">
useHead({
    titleTemplate: '%s - Desaku',
})
</script>

<template>
    <v-layout>
        <v-app>
            <div class="min-h-screen flex flex-col bg-[#F8F9FC]">
                <Header />
                <div class="min-h-screen">
                    <router-view :key="$route.fullPath"></router-view>
                </div>
                <Footer />
            </div>
        </v-app>
    </v-layout>
</template>