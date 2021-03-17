import React,{Component} from 'react'
import "./homepage.styles.scss"
export const HomePage= () => {
    return (
        <div className="homepage">
            <div className="content">
                <div className="directory-menu">
                    <div className="menu-items">
                    <div className="content">
                           <h1 className="title">HATS</h1>
                            <span className="subtitle">Shop</span>
                        </div>
                        </div>
                <div className="menu-items">
                    <div className="content">
                        <h1 className="title">Jackets</h1>
                        <span className="subtitle">Shop</span>
                    </div>
                </div>
                <div className="menu-items">
                    <div className="content">
                        <h1 className="title">women</h1>
                        <span className="subtitle">Shop</span>
                    </div>
                </div>
                <div className="menu-items">
                    <div className="content">
                        <h1 className="title">men</h1>
                        <span className="subtitle">Shop</span>
                    </div>
                </div>
                <div className="menu-items">
                    <div className="content">
                        <h1 className="title">sneakers</h1>
                        <span className="subtitle">Shop</span>
                    </div>
                </div>
                </div>  
            </div>
        </div>
    )
 
    }
