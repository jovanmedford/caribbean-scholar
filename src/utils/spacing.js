import './remCalc'
import remCalc from './remCalc'

export let Spacing = {
    desktop: {
        vertical: {
            extraLarge: remCalc(192),
            large: remCalc(96),
            medium: remCalc(72),
            small: remCalc(48),
            extraSmall: remCalc(24)
        },
        horizontal: {
            large: remCalc(120)
        }
    },
    tablet: {
        vertical: {
            extraLarge: remCalc(120),
            large: remCalc(96),
            medium: remCalc(72),
            small: remCalc(48),
            extraSmall: remCalc(24)
        },
        horizontal: {
            large: remCalc(120)
        }
    },
    mobile: {
        vertical: {
            extraLarge: remCalc(96),
            large: remCalc(64),
            medium: remCalc(48),
            small: remCalc(16),
            extraSmall: remCalc(8)
        },
        horizontal: {
            extraLarge: remCalc(32),
            large: remCalc(20)
        }
    }
}
