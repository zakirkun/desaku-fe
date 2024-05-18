import { useToken } from '~/stores/token'

export default defineNuxtRouteMiddleware((to, from) => {
    let token = useToken().token

    if (to.path.includes('/dashboard') && !token) {
        return navigateTo('/auth/login')
    }
})