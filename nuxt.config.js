// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    typescript: false,
    app: {
        head: {
            titleTemplate: '%s - Desaku',
            // script: [
            //     { src: 'https://cdn.tailwindcss.com', body: true }
            // ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                {
                    id: 'theme-css',
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: '/themes/aura-light-green/theme.css'
                }
            ]
        }
    },
    modules: ['nuxt-primevue', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
    primevue: {
        options: { ripple: true },
        components: {
            exclude: ['Editor']
        }
    },
    build: {
        transpile: ['vuetify'],
    },
    runtimeConfig: {
        public: {
            API_BASE_URL: 'http://api.desaku.muhichsan.com',
        },
    },
    css: ['vuetify/lib/styles/main.sass', 'primeicons/primeicons.css', 'primevue/resources/primevue.min.css', '@/assets/styles.scss', '@/assets/main.css']
});
