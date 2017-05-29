import React, { Component } from 'react'
import OrderInfo from './OrderInfo'
import ProductInput from './ProductInput'
import ProductList from './ProductList'
import Remarks from './Remarks'
import Calculator from './Calculator'

class OrderForm extends Component {
  render() {
    return (
      <div>
        <div className="row">        
            <h2>Orders/ TN SO 000015</h2>
        </div>
        <div className="row">        
          <OrderInfo/>
        </div>
        <div className="row">        
          <ProductInput/>
        </div>
        <div className="row">        
          <ProductList/>
        </div>
        <div className="row">        
          <Remarks/>          
        </div>
        <div className="row">        
          <Calculator/>
        </div>
      </div>
    );
  }
}

export default OrderForm;
