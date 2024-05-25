export default defineNuxtPlugin(nuxtApp => {
    console.log(nuxtApp.$router.afterEach(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }))
})