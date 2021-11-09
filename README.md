# Caribbean Scholar

Caribbean Scholar is an education company that is dedicated to delivering high-quality online courses for CXC students.

## Features

---

- [Blog](https://www.thecaribbeanscholar.com/blog/)
- Exam Schedule App

## How To Get Started

---

1. Clone the repository and run `npm install`.

2. Add faunaDB secret key to .env file.

```
FAUNA_SECRET=secret_key
```

To start the development server:

```
gatsby develop
```

To start the development server with **netlify functions**

```
netlify dev
```

## Theme & Styles

---

Theme specifications are defined using [theme-ui](https://theme-ui.com/getting-started). All styles are written using [object styles](https://theme-ui.com/guides/object-styles/).

You can edit the theme using the theme object in src/gatsby-plugin-theme-ui/theme.js.

### Styles

To apply theme-ui specified styles you must first import the jsx pragma.

```javascript
/** @jsx jsx */
import { jsx } from "theme-ui"
```

You can now apply inline styles using the `sx` prop.

```
<h1 sx={{fontSize: 0, color:"text"}}></h1>
```

### Best Practice

It is strongly reccomended that you create style objects under the main component. This makes the code easier to read than using inline styles.

For e.g

```javascript
/** @jsx jsx */
import { jsx } from "theme-ui"

export const Header = () => <header sx={headerStyle}></header>

const headerStyle = {
  backgroundColor: "background",
  padding: "2rem 1rem",
}
```

### Note

The pragma allows you to use JSX but if you need any react features you can still access them with hooks.

## Component Library

---

The components used in the project are documented using [Storybook](https://storybook.js.org/tutorials/intro-to-storybook/).

To run storybook dev server

```
npm run storybook
```

To create a new story use the `.stories.mdx` extension

```
buttons.js
buttons.stories.mdx
```

## Testing

---

The frameworks being used for testing are [jest](https://jestjs.io/) and
[react testing library](https://testing-library.com/docs/react-testing-library/intro/).
To create a new test file, use the `.test` extension.
For example:

```
buttons.js           <- main component
buttons.test.js      <- test file
```

To run all tests

```javascript
npm run test
```

To run in watch mode

```javascript
npm run -- --watch
```
