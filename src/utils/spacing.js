import './convertToRem'
import convertToRem from './convertToRem'

export let Spacing = {
    desktop: {
        vertical: {
            extraLarge: convertToRem(192),
            large: convertToRem(96),
            medium: convertToRem(72),
            small: convertToRem(48),
            extraSmall: convertToRem(24)
        },
        horizontal: {
            large: convertToRem(120)
        }
    },
    tablet: {
        vertical: {
            extraLarge: convertToRem(120),
            large: convertToRem(96),
            medium: convertToRem(72),
            small: convertToRem(48),
            extraSmall: convertToRem(24)
        },
        horizontal: {
            large: convertToRem(120)
        }
    },
    mobile: {
        vertical: {
            extraLarge: convertToRem(96),
            large: convertToRem(64),
            medium: convertToRem(48),
            small: convertToRem(16),
            extraSmall: convertToRem(8)
        },
        horizontal: {
            extraLarge: convertToRem(32),
            large: convertToRem(20)
        }
    }
}
