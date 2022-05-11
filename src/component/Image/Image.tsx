import React from "react";

const Image = ({path,size,alt=""}:any) => {
    return (
        <img className={size} src={path.default} alt={alt}/>
    )
}

export default Image