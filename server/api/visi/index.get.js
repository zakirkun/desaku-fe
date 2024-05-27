export default defineEventHandler(async (event) => {
    const data = await $fetch(useRuntimeConfig().public.API_BASE_URL + '/api/visi')
    return data
})