import React, { Component } from 'react'
import ShopData from "./shop.data"
import Preview from "./../../components/preview-collection/preview-collection.component"
class ShopPage extends Component {
    constructor(props){
        super(props)
            this.state={
                collections:ShopData
            }
        }
    render(){
        const {collections}=this.state;
        // ! with this we wont have to write this.state again 
        return(
            <div className="shop-page">
                {
                    collections.map(({id , ...otherItems})=>(
                        <Preview key={id} {...otherItems} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;


