/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function FormInput(props) {
    const {forName, text, handleInputChange, id, value, name, placeholder, errorMessage} = props;
    let borderColor = errorMessage ? 'red' : 'none'
    return(
        <div>
            <label for={forName}>{text}</label> 
            <span className="error-message">{errorMessage}</span>
            <input
              type="text"
              id={id}
              onChange={handleInputChange}
              name={name}
              placeholder={placeholder}
              required
              value={value}
              sx={{
                border: `2px solid ${borderColor}`
              }}
            />
        </div>
        
    )
}

FormInput.defaultProps = {
    errorMessage: ''
}