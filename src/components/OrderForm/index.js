import React, { Component } from 'react'
import OrderInfo from './OrderInfo'
import ProductInput from './ProductInput'
import ProductList from './ProductList'
import Remarks from './Remarks'
import Calculator from './Calculator'

class OrderForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row expanded">                  
          <div className="order-title columns small-12">
            <div><span className="title">Orders/ </span>TN SO 000015</div>
          </div>
            
        </div>
        <div className="row expanded">        
          <OrderInfo/>
        </div>
        <div className="row expanded">        
          <ProductInput/>
        </div>
        <div className="row expanded">        
          <ProductList/>
        </div>
        <div className="row expanded">        
          <Remarks/>          
        </div>
        <div className="row expanded">        
          <Calculator/>
        </div>
      </div>
    );
  }
}

export default OrderForm;