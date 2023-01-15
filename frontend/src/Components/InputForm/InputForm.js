import "./InputForm.css"
import React, {useRef} from "react"

const InputForm = (props) => {
    const postalCodeRef = useRef(); 

    const submitHandler = (event) => {
        event.preventDefault();
    
        const postalCode = postalCodeRef.current.value
    }

    
    return (
        <form>
            <div 
            className="new-input__controls">
                <div className="new-input__control">
                    <label>Enter Postal Code</label>
                    <input
                    type="text"/>

                </div>
            </div>

        </form>
    )
}

export default InputForm