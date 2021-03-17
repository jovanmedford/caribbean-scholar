// example base theme from @theme-ui/presets
export default {
  fonts: {
    body: 'Montserrat, system-ui, sans-serif',
    heading: 'Montserrat, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    semibold: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [
   '1rem', '1.25rem', '1.5rem', '2rem', '3rem', '4rem',
  ],
  breakpoints: [
    '36em', '56em', '60em',
  ],
  colors: {
    background: 'white',
    text: '#484E55',
    primary: '#00A99D',
    secondary: '#FC9CC6',
    accent: '#e02067',
    cta: '#0F325A',
    ctaButton: '#00A99D',
    modes: {
      home: {
        background: 'white',
      },
      light: {
        muted: '#fffffb',   
        title: 'white',
      },
      dark: {
        text: 'white', 
        cta: '#3A93E5',
        background: '#0F325A', 
        muted: '#6d95c6',
        accent: '#38c6ff',
        ctaButton: '#0F325A'
      }
    }
  },
  buttons: {
    primary: {
      color: 'white',
      border: 'none',
      margin: '1px auto 2rem',
      width: ['10rem','18rem'],
      height: '2.2rem',
      fontSize: '1rem'
    }
  },  
  styles: {
    root: {
      fontFamily: 'body',

      h1: {
        fontFamily: 'heading',
        fontWeight:'bold',
        fontSize: [4,5],
        fontWeight: 'heading',
        lineSpacing: 'heading'
      }, 

      h2: {
        fontSize: [3,4],
        lineSpacing: 'heading'
      },

      h3: {
        fontSize: [2,3],
        lineSpacing: 'heading'
      },

      h4: {
        fontSize: 0,
        lineSpacing: 'heading'
      },

      span: {
        display: 'block',
        fontWeight: 'semibold',
        fontSize: 1
      },

      a: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'semibold'
      },

      p: {
        fontSize: 0,
        lineHeight: 'body',
        margin: 0
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