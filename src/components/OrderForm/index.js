import React, { Component } from 'react'
import OrderInfo from './OrderInfo'
import ProductInput from './ProductInput'
import ProductList from './ProductList'
import Remarks from './Remarks'
import Calculator from './Calculator'

class OrderForm extends Component {
  render() {
    return (
      <div className="">
        <div className="row expanded">                  
          <div className="order-title columns small-12 hide-for-small-only">
            <div><span className="title">Orders/ </span>TN SO 000015</div>
          </div>
        </div>
        
        <div className="row expanded">          
          <OrderInfo/>
        </div>

        <div className="row expanded show-for-small-only">          
          <Calculator isSticky={false} />
        </div>

        <div className="row expanded">        
          <ProductInput/>
        </div>

        <div className="row expanded show-for-small-only">        
          <Remarks/>    
        </div>        

        <div className="row expanded">        
          <ProductList/>
        </div>

        <div className="row expanded hide-for-small-only">        
          <Remarks/>          
        </div>

        <div className="row expanded hide-for-small-only">        
          <Calculator isSticky={true} />
        </div>

      </div>
    );
  }
}

export default OrderForm