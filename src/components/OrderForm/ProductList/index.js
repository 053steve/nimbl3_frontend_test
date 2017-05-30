import React, { Component } from 'react'

class ProductList extends Component {  
    

  render() {
    
    return  (        
        <div id="productlist-wrapper" className="columns small-12">
            <div id="productlist" className="cards">
                <table>
                  <thead>
                    <tr>
                      <th>sku</th>
                      <th>description</th>
                      <th>brand</th>
                      <th>list price</th>                      
                      <th>discount</th>
                      <th>net price</th>
                      <th>qty</th>
                      <th>total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TN SO 000015</td>
                      <td>Magnetic contactor - 9A (5.5 kW\, 7.5 HP)\, control voltage 230 Vac</td>
                      <td>Schneider Electric</td>
                      <td>THB 880</td>                      
                      <td>30%</td>
                      <td>THB 660</td>
                      <td>16</td>
                      <td>THB 50,079,8823</td>
                      <td>
                        <a href="#">
                          Remove Item
                        </a>
                      </td>                      
                    </tr>                    
                    
                  </tbody>
                </table>
            </div> 
        </div>         
    );
  }
}



export default ProductList
