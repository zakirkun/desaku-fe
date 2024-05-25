<template>
    <v-layout>
        <v-app>
            <div class="min-h-screen">
                <Header />
                <router-view :key="$route.fullPath"></router-view>
                <Footer />
            </div>
        </v-app>
    </v-layout>
</template>