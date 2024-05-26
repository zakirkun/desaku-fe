export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.$router.afterEach(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    })
})