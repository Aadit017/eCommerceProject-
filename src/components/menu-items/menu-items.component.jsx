import React from "react"
import "./menu-items.styles.scss"
import {withRouter} from "react-router-dom"

const MenuItems=({title , imageUrl, size})=>{ 
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
 // by wrapping this component with history we get access to the 
 // history prop here 
 export default withRouter(MenuItems)