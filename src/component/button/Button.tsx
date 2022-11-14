import React from "react";

type Props = {
    name: string
    onClick: () => {}
    classes : string
    disabled: boolean
}


const Button = (props:Props) => {
    const {name,onClick,classes,disabled = false} = props
    return (
        <button onClick={() => onClick} className={classes} disabled={disabled}>{name}</button>
    )
}

export default Button