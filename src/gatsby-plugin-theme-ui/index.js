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
   '1em', '1.25em', '1.56em', '1.96em', '2.44em', '3.05em',
  ],
  breakpoints: [
    '48em', '64em', '75em',
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
    formSuccess: '#00A99D',
    text: '#484E55',
    primary: '#00A99D',
    secondary: '#FC9CC6',
    accent: '#e02067',
    rt: 'green',
    cta: '#0F325A',
    ctaButton: '#00A99D',
    footer: '#0F325A',
    modes: {
      home: {
        background: 'white',
      },
      light: {
        muted: '#fffffb',   
        title: 'white',
      },
      dark: {
        primary: '#E43694',
        text: 'white', 
        cta: '#29ABE2',
        rt: 'yellow',
        background: '#0F325A', 
        muted: '#6d95c6',
        accent: '#38c6ff',
        ctaButton: '#0F325A',
        formSuccess: '#0F325A',
        footer: '#0b1b2d'
      }
    }
  },
  buttons: {
    primary: {
      color: 'white',
      border: 'none',
      padding: '0.75rem 2rem',
      margin: '0 auto',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1em',
      backgroundColor: 'primary',
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
        display: 'block',
        '&:hover': {
          cursor: 'pointer'
        }
      },

      label: {
        color: 'white',
        fontSize: '1em'
      },

      input: {
        display: 'block',
        fontSize: '1.125em',
        border: 'none',
        padding: ['0.75em 0.75em','0.75rem 1.25rem'],
        
        '&[type=text]': {
          width: '100%'
        },

        '::placeholder': {
          color: '#DADADA',
          fontWeight: 'bold',
        }
      }
    }
  }


}