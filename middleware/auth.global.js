import { useToken } from '~/stores/token'
import user from '../data/permission/user'

export default defineNuxtRouteMiddleware((to, from) => {
    let token = useToken().token

    if (to.path.includes('/dashboard')) {
        if (!token){
            return navigateTo('/auth/login')
        }

        if (!user.includes(to.name) && !useParseJWT().value.is_admin) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Page Not Found'
            })
        }
    }
})