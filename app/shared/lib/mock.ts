import { useRuntimeConfig } from '#imports'

export const isMockEnabled = (): boolean => {
    const config = useRuntimeConfig()
    const value = (config.public as { __MOCK__?: boolean | string }).__MOCK__

    if (typeof value === 'string') {
        return value === 'true'
    }

    return value ?? false
}








