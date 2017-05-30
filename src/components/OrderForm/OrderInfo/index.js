import React, { Component } from 'react'

class OrderInfo extends Component {  
    

  render() {
    
    return  (
      <div id="orderinfo-wrapper" className="columns small-12">
        <div className="row">

          <div className="columns small-12 medium-9"> 
            <div id="orderinfo-inputs" className="cards">
              <div className="row">              
                <div className="columns small-12 medium-6">                  
                  <span>
                    <div id="orderinfo-from"><span>CPF Saraburi</span></div>
                    <div id="orderinfo-location"><span>Highway 2, Kaeng Khoi Saraburi Thailand</span></div>
                    <div id="orderinfo-number"><span>+66 087 348 79 34</span></div>  
                  </span>
                  
                  
                </div>
                <div className="columns ">
                  <label>Select Box
                    <select>
                      <option value="husker">Husker</option>
                      <option value="starbuck">Starbuck</option>
                      <option value="hotdog">Hot Dog</option>
                      <option value="apollo">Apollo</option>
                    </select>
                  </label>
                </div>
                <div className="columns ">
                  <label>Select Box
                    <select>
                      <option value="husker">Husker</option>
                      <option value="starbuck">Starbuck</option>
                      <option value="hotdog">Hot Dog</option>
                      <option value="apollo">Apollo</option>
                    </select>
                  </label>
                </div>
                <div className="columns ">
                  <label>Select Box
                    <select>
                      <option value="husker">Husker</option>
                      <option value="starbuck">Starbuck</option>
                      <option value="hotdog">Hot Dog</option>
                      <option value="apollo">Apollo</option>
                    </select>
                  </label>
                </div>
              </div>
              
            </div>
          </div>
          <div id="order-actions" className="columns small-12 medium-3"> 
            <a href="#" className="custom-button-class">Back</a>
            <a href="#" className="button">Update Order</a>
          </div>
        </div>
      </div>
    );
  }
}



export default OrderInfo
