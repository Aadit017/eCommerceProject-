 import React from "react"
 import "./menu-items.styles.scss"

export const MenuItems=({title , imageUrl, size})=>{ 
     return (
    <div className={`${size} menu-items`}>
    <div 
        className="background-image"
        style={{
        backgroundImage:`url(${imageUrl})` 
    }} 
    />
        <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop</span>
        </div>
    </div>
         
     )
 }