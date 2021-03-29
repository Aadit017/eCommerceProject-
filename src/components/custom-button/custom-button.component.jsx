import React from 'react'
import "./custom-button.style.scss"
function CustomButton({children , ...otherProps}) {
    return (
        <div className="custom-button" {...otherProps} >
            {children}
        </div>
    )
}
export default CustomButton;
