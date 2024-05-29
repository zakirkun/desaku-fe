export default defineEventHandler(async () => {
    return await $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/tentang')
})
