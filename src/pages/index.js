/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from '../components/header'
import Hero from '../components/hero'


export default function BlogHome() {
  return (
    <div sx={{fontFamily: 'heading'}}>
      <Header />
      <Hero />
    </div>
  )
}
