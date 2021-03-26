import React from "react"
import "./form-input.style.scss"

const FormInput =({handleChange,label,...otherprops})=>{
    return (
        <div className="group">
            <input type="text" className="form-input" 
            onChange={handleChange} {...otherprops}
            />
            {
                label ? 
                (<label className={`${otherprops.value.length} ? 'shrink' :''}form-input`} >
                {label}
                </label>)
                : null 
            }
        </div>
    )
}
export default FormInput;