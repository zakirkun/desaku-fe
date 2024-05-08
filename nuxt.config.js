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
            title: 'Sakai Vue',
            script: [
                // Include jQuery from CDN
                { src: 'https://cdn.tailwindcss.com', body: true }
            ],
            link: [
                {
                    id: 'theme-css',
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: '/themes/aura-light-green/theme.css'
                }
            ]
        }
    },
    modules: ['nuxt-primevue'],
    primevue: {
        options: { ripple: true },
        components: {
            exclude: ['Editor']
        }
    },
    build: {
        transpile: ['vuetify'],
    },
    css: ['vuetify/lib/styles/main.sass', 'primeicons/primeicons.css', 'primevue/resources/primevue.min.css', '@/assets/styles.scss', '@/assets/main.css']
});
