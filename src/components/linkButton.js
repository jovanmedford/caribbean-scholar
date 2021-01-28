/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function LinkButton({text, link}){
    /** Makes button act like a link
     * 
     */
    const handleClick = (e) => {
        e.preventDefault()
        window.location.href= link;
    }
    return(
        <button onClick={handleClick} sx={{
            variant: 'buttons.primary',
            backgroundColor: '#00A99D'
        }}>{text}</button>
    )
}