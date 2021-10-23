import React from "react";
import "./styles.css"

const Button = (({children, ...otherProps})=> {
    return (
        <button className="btns" {...otherProps}>
            {children}
        </button>
    )
})

export default Button;