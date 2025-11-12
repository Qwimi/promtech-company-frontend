import type { DirectiveBinding, ObjectDirective } from 'vue'
import { cursorStyle, cursorPositionMode, cursorHoverStylePresets } from '../model/cursor-style'

interface CursorOptions extends Record<string, any> {
    local?: boolean
    stylePreset?: 'colorBurn' | 'backdropBlur'
}

export const vCursor: ObjectDirective = {
    mounted(el: HTMLElement, binding: DirectiveBinding<CursorOptions>) {
        const options = binding.value ?? {}

        const hoverStyles = options.stylePreset ? cursorHoverStylePresets[options.stylePreset] : Object.fromEntries(
            Object.entries(options).filter(
                ([key]) => !['local'].includes(key)
            )
        )

        const enterDelay = options.local ? 40 : 0
        const leaveDelay = options.local ? 30 : 0

        let enterTimer: ReturnType<typeof setTimeout> | null = null
        let leaveTimer: ReturnType<typeof setTimeout> | null = null

        const onEnter = () => {
            if (leaveTimer) {
                clearTimeout(leaveTimer)
                leaveTimer = null
            }

            if (options.local) {
                cursorPositionMode.localElement = el
            }

            enterTimer = setTimeout(() => {
                cursorStyle.value = hoverStyles
            }, enterDelay)
        }

        const onLeave = () => {
            if (enterTimer) {
                clearTimeout(enterTimer)
                enterTimer = null
            }

            if (options.local) {
                cursorPositionMode.localElement = null
            }

            leaveTimer = setTimeout(() => {
                cursorStyle.value = {}
            }, leaveDelay)
        }

        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
    },
}
