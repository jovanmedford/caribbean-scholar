export const theme = {
  fonts: {
    body: "Poppins, system-ui, sans-serif",
    heading: "Poppins, sans-serif",
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
  fontSizes: ["1em", "1.25em", "1.5em", "2em", "2.43em", "3em"],
  breakpoints: ["37.5em", "56em", "75em"],
  spacing: {
    homepageHero: {
      padding: ["3em 3em", "3em 3em", "3em 3em", "4.5em 7.5em"],
    },
  },
  myMargin: {
    outer: {
      margin: ["3em 3em", "3em 3em", "3em 3em", "4.5em 7.5em"],
    },
  },
  myPadding: {
    outer: {
      padding: ["3em 3em", "3em 3em", "3em 3em", "4.5em 7.5em"],
    },
  },
  colors: {
    background: "white",
    heading2: "#DC611B",
    formSuccess: "#4FB286",
    text: "#536272",
    primary: "#4FB286",
    secondary: "#FC9CC6",
    accent: "#E43694",
    rt: "green",
    cta: "#0F325A",
    ctaButton: "#4FB286",
    footer: "#0F325A",
    tableHeader: "#1A5599",
    tableBody: "#2477D6",
    modes: {
      home: {
        background: "white",
      },
      light: {
        background: "#FFF8F0",
        muted: "#fffffb",
        title: "white",
      },
      dark: {
        primary: "#E43694",
        text: "white",
        cta: "#29ABE2",
        rt: "yellow",
        background: "#0F325A",
        muted: "#6d95c6",
        accent: "#38c6ff",
        ctaButton: "#0F325A",
        formSuccess: "#0F325A",
        footer: "#0b1b2d",
      },
    },
  },
  buttons: {
    primary: {
      color: "white",
      border: "none",
      padding: "0.75rem 2rem",
      margin: "0 auto",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: "1em",
      backgroundColor: "primary",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      h1: {
        fontFamily: "heading",
        fontWeight: "bold",
        fontSize: [4, 5],
        fontWeight: "heading",
        lineSpacing: "heading",
        lineHeight: "125%",
      },

      h2: {
        fontSize: [3, 4],
        lineSpacing: "heading",
        lineHeight: "125%",
      },

      h3: {
        fontSize: [2, 2, 3],
        lineSpacing: "heading",
      },

      h4: {
        fontSize: 0,
        lineSpacing: "heading",
      },

      span: {
        display: "block",
        fontWeight: "semibold",
        fontSize: 1,
      },

      a: {
        color: "accent",
      },

      p: {
        fontSize: [1, 2],
        lineHeight: "body",
        margin: 0,
      },

      ul: {
        padding: "0",
      },

      li: {
        listStyle: "none",
      },

      button: {
        display: "block",
        "&:hover": {
          cursor: "pointer",
        },
      },

      label: {
        color: "white",
        fontSize: "1em",
      },

      input: {
        display: "block",
        fontSize: "1.125em",
        border: "none",
        padding: ["0.75em 0.75em", "0.75rem 1.25rem"],

        "&[type=text]": {
          width: "100%",
        },

        "::placeholder": {
          color: "#DADADA",
          fontWeight: "bold",
        },
      },
    },
  },
}
