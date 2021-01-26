// example base theme from @theme-ui/presets
export default {
  fonts: {
    body: 'Montserrat, system-ui, sans-serif',
    heading: 'Montserrat, sans-serif',
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
    primary: 'aliceblue',
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
        muted: '#6d95c6'
      }
    }
  },
  buttons: {
    primary: {
      color: 'white',
      border: 'none',
      margin: '1px auto 2rem',
      width: '18rem',
      height: '2.2rem',
      fontSize: '1rem'
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
      },

      button: {
        display: 'block'
      },

      input: {
        display: 'block',
        fontSize: '1rem',
        border: 'none',

        ':focus': {
          outline: 'none'
        },
        '::placeholder': {
          color: 'lightgray'
        }
      }
    }
  }


}