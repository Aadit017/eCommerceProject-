import React from "react"
import "./header.style.scss"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg"
//  something important to note that this is the correct syntax of importing a svg file in react 
// because the crown svg is not a jsx file 
const Header =()=>{ 
    return(
        <div className="header">
            <Link to="/">
                <Logo className="logo" />
            </Link>
        </div>
    )
}
export default Header;
