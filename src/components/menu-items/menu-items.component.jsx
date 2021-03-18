 import React from "react"
 import "./menu-items.styles.scss"

 export const MenuItems=({title})=>{ 
     return (
    <div className="menu-items">
        <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop</span>
        </div>
    </div>
         
     )
 }