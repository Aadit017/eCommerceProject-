import React from "react"
import "./header.style.scss"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import {auth} from "../../firebase/firebase.utils"
//  something important to note that this is the correct syntax of importing a svg file in react 
// because the crown svg is not a jsx file 
const Header =({currentUser})=>{ 
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
        {
            currentUser?
            (<div className="optiom" onClick={()=>auth.signOut()}>SIGN OUT</div>) :
            (<Link className="option" to="/signin">SIGN IN</Link>)
        }
        </div>
        </div>
    )
}
export default Header;
