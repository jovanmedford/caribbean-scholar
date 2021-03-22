import "@fontsource/poppins"
import "@fontsource/poppins/700.css"

// example base theme from @theme-ui/presets
export default {
  fonts: {
    body: 'Poppins, system-ui, sans-serif',
    heading: 'Poppins, sans-serif',
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
   '1em', '1.25em', '1.5em', '2em', '3em', '4em',
  ],
  breakpoints: [
    '37.5em','56em', '75em',
  ],
  spacing: {
    homepageHero: {
      padding: ['3em 3em','3em 3em','3em 3em','4.5em 7.5em']
      
    }
  },
  myMargin: {
    outer: {
      margin: ['3em 3em','3em 3em','3em 3em','4.5em 7.5em']
    }
  },
  myPadding: {
    outer: {
      padding: ['3em 3em','3em 3em','3em 3em', '4.5em 7.5em']
    }
  },
  colors: {
    background: 'white',
    heading2: '#DC611B',
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
      padding: '1rem 3rem',
      margin: '0 auto',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1em'
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
        lineSpacing: 'heading',
        lineHeight: '125%'
      }, 

      h2: {
        fontSize: [3,4],
        lineSpacing: 'heading',
        lineHeight: '125%'
      },

      h3: {
        fontSize: [2,2,3],
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
        fontSize: [1,2],
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