import React from "react"
import "./preview-collection.styles.scss"

const Preview =({title,items})=>{
    return (
    <div className="collection=preview">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.map((item)=>(
                    <div key={item.id} >
                        {item.name}
                    </div>
                ))
            }
        </div>
    </div>
    )
}
export default Preview;
