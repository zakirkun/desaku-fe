export default defineNuxtConfig({
    ssr: true,
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    typescript: false,
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                {
                    id: 'theme-css',
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: '/themes/main.css'
                }
            ]
        }
    },
    modules: [ '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
    primevue: {
        options: { ripple: true },
        components: {
            exclude: ['Editor']
        }
    },
    build: {
        transpile: ['vuetify'],
        client: false
    },
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL,
            API_PUBLIC_URL: process.env.API_PUBLIC_URL,
        },
    },
    plugins: [
        { src: '~/plugins/scrollTo.js', mode: 'client' },
    ],
    css: ['vuetify/lib/styles/main.sass', 'primeicons/primeicons.css', '@/assets/styles.scss', '@/assets/main.css'],
});
