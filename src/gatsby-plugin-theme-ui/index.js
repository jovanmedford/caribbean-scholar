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
  colors: {
    text: '#253D5B',
    background: '#FFF8F0',
    primary: '#6A994E',
    secondary: '#FC9CC6',
    muted: '#67697C',
    cta: '#387CBD',
    title: 'white',
    modes: {
      dark: {
        text: '#FFF8F0', 
        background: '#253D5B',
        primary: '#6A994E', 
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
      }
    }
  }
}