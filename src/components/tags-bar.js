/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function TagsBar() {
    return (
        <div sx={{
            ul: {
                textAlign: 'center'
              },
              li: {
                listStyle: 'none',
                display: 'inline-block',
                backgroundColor: 'muted',  
                padding: '0.25rem 0.75rem',
                marginRight:'1rem',
                ':hover': {
                    backgroundColor: 'text',
                    color: 'background',
                    cursor: 'pointer'
                }
              }}}
        >
        <ul>
            <li>CAPE</li>
            <li>CSEC</li>
        </ul>
    </div>
    )
}