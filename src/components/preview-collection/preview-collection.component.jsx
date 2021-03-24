import React from "react"
import "./preview-collection.styles.scss"
import CollectionItem from "../collection-item/collection-item.component"
const Preview =({title,items})=>{
    return (
    <div className="collection-preview">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                // without the filter option we get basically all the items in the json data list 
                // we only require 4 items on the preview component 
                // for that we would use the filter method 
                items
                .filter((item,idx) => idx < 4)
                // not recommended as this filter method might prove to be slow on weaker devices 
                .map(({id, ...otherItemProps})=>(
                    <CollectionItem key={id}
                        {...otherItemProps}
                    />                    
                ))
            }
        </div>
    </div>
    )
    //  checking sth 
}
export default Preview;
