import { useJwt } from '@vueuse/integrations/useJwt'
import { useToken } from '~/stores/token'

export const useParseJWT = () => {
    const encodedJwt = ref(useToken().token)
    const { payload } = useJwt(encodedJwt)
    return useState('is_admin', () => payload.value)
}