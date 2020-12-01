// example base theme from @theme-ui/presets
export default {
  fonts: {
    body: 'Lato, system-ui, sans-serif',
    heading: 'Avenir Next, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64,
  ],
  breakpoints: [
    '36em', '56em', '60em',
  ],
  colors: {
    text: '#253D5B',
    background: '#fafaf2',
    primary: '#f6ff7247',
    secondary: '#FC9CC6',
    accent: '#6ddc94',
    muted: '#fffffb',
    cta: '#387CBD',
    title: 'white',
    modes: {
      dark: {
        text: '#fafaf2', 
        background: '#253D5B',
        primary: '#387CBD', 
        muted: '#2b415d'
      }
    }
  },
  styles: {
    root: {
      fontFamily: 'body',

      h1: {
        fontFamily: 'heading',
        fontSize: '2rem',
        fontWeight: 'heading'
      }, 

      ul: {
        padding: '0'
      },

      li: {
        listStyle: 'none'
      }
    }
  }


}