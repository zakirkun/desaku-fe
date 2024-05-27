<template>
    <v-layout>
        <v-app>
            <div class="min-h-screen flex flex-col bg-[#F8F9FC]">
                <Header />
                <router-view :key="$route.fullPath"></router-view>
                <Footer />
            </div>
        </v-app>
    </v-layout>
</template>