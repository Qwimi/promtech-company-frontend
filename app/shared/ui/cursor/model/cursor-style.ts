const cursorStyle = ref<Record<string, string>>({})
const cursorPositionMode = reactive({
    localElement: null as HTMLElement | null
})
const cursorHoverStylePresets = {
    colorBurn: {
        height: '50px', width: '50px', mixBlendMode: 'color-burn'
    },
    backdropBlur: {
        height: '427px', width: '427px',
        background: 'radial-gradient(50% 50% at 50% 50%, #525FD1 0%, rgba(82, 95, 209, 0.00) 100%)',
        filter: 'blur(45.45000076293945px)',
    }
}

export { cursorStyle, cursorPositionMode, cursorHoverStylePresets }