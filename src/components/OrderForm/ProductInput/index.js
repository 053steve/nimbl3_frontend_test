import React, { Component } from 'react'
import iconPlus from '../../../assets/icons/icon_plus.svg';

class ProductInput extends Component {  
    

  render() {
    
    return  (
        <div id="productinput-wrapper" className="columns small-12">
            <div className="input-container">
              <input type="text" id="productinput" className="cards" placeholder="Add Products"/> 
              <img src={iconPlus} className="icon plus-icon" alt="plus-icon"/>
            </div>
        </div>      
    );
  }
}



export default ProductInput
