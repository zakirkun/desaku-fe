<script>
export default {
    data: () => ({
        data: [],
    }),
    async mounted() {
        await this.loadData()
    },
    methods: {
        async loadData() {
            this.data = await $fetch(this.$config.public.API_BASE_URL + '/api/footer')
        },
    }
}
</script>
<template>
    <div
        class="grid grid-cols-1 md:grid-cols-3 gap-x-[6rem] gap-y-8 px-[2rem] md:px-[14rem] bg-[#0088CC] text-white py-8">
        <div class="block">
            <div class="text-xl md:text-2xl font-semibold">
                <span>Profil</span>
            </div>
            <div class="text-sm mt-3 leading-6">
                <span>
                    {{ data.profile }}
                </span>
            </div>
        </div>
        <div class="block">
            <div class="text-xl md:text-2xl font-semibold">
                <span>Sosial Media</span>
            </div>
            <div class="text-sm mt-3">
                <ul>
                    <li v-if="data.instagram" class="flex items-center">
                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em"
                            viewBox="0 0 1024 1024">
                            <path fill="white"
                                d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3S645.3 585.4 645.3 512S585.4 378.7 512 378.7M911.8 512c0-55.2.5-109.9-2.6-165c-3.1-64-17.7-120.8-64.5-167.6c-46.9-46.9-103.6-61.4-167.6-64.5c-55.2-3.1-109.9-2.6-165-2.6c-55.2 0-109.9-.5-165 2.6c-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6c46.9 46.9 103.6 61.4 167.6 64.5c55.2 3.1 109.9 2.6 165 2.6c55.2 0 109.9.5 165-2.6c64-3.1 120.8-17.7 167.6-64.5c46.9-46.9 61.4-103.6 64.5-167.6c3.2-55.1 2.6-109.8 2.6-165M512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9S717.1 398.5 717.1 512S625.5 717.1 512 717.1m213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9s47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9" />
                        </svg>
                        <a class="text-white" target="_blank" :href="data.instagram">Instagram</a>
                    </li>
                    <li v-if="data.facebook" class="flex items-center">
                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em"
                            viewBox="0 0 24 24">
                            <path fill="white"
                                d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02" />
                        </svg>
                        <a class="text-white" target="_blank" :href="data.facebook">Facebook</a>
                    </li>
                    <li v-if="data.whatsapp" class="flex items-center">
                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em"
                            viewBox="0 0 16 16">
                            <path fill="white"
                                d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z" />
                        </svg>
                        <a class="text-white" target="_blank" :href="data.whatsapp">Whatsapp</a>
                    </li>
                    <li v-if="data.twitter" class="flex items-center">
                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 14 14">
                            <g fill="none">
                                <g clip-path="url(#primeTwitter0)">
                                    <path fill="white"
                                        d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z" />
                                </g>
                                <defs>
                                    <clipPath id="primeTwitter0">
                                        <path fill="#fff" d="M0 0h14v14H0z" />
                                    </clipPath>
                                </defs>
                            </g>
                        </svg>
                        <a class="text-white" target="_blank" :href="data.twitter">Twitter</a>
                    </li>
                    <li v-if="data.youtube" class="flex items-center">
                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
                            <path fill="white" fill-rule="evenodd"
                                d="M6.989 4.89a64.248 64.248 0 0 1 10.022 0l2.24.176a2.725 2.725 0 0 1 2.476 2.268c.517 3.09.517 6.243 0 9.332a2.725 2.725 0 0 1-2.475 2.268l-2.24.175a64.24 64.24 0 0 1-10.023 0l-2.24-.175a2.725 2.725 0 0 1-2.476-2.268a28.315 28.315 0 0 1 0-9.332a2.725 2.725 0 0 1 2.475-2.268zM10 14.47V9.53a.3.3 0 0 1 .454-.257l4.117 2.47a.3.3 0 0 1 0 .514l-4.117 2.47A.3.3 0 0 1 10 14.47"
                                clip-rule="evenodd" />
                        </svg>
                        <a class="text-white" target="_blank" :href="data.youtube">Channel
                            Youtube</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="block">
            <div class="text-xl md:text-2xl font-semibold">
                <span>Alamat Lengkap</span>
            </div>
            <div class="text-sm mt-3">
                <span>{{ data.address }}</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
li {
    margin-bottom: 6px;
}
</style>