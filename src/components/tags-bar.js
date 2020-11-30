/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function TagsBar() {
    return (
        <div sx={{
            ul: {
                padding: '1rem 0',
                width: '95%',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-around'
          
              },
              li: {
                listStyle: 'none',
                display: 'inline-block',
              }}}
        >
        <ul>
            <li>Spanish</li>
            <li>Business</li>
            <li>Accounts</li>
            <li>Economics</li>
        </ul>
    </div>
    )
}