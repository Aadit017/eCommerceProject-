import React,{Component} from 'react'
import "./homepage.styles.scss"
import DirectoryMenu from "../../components/directory/directory.component"
export const HomePage= () => {

    return (
        <div className="homepage">
            <DirectoryMenu />
        </div>
    )
}
