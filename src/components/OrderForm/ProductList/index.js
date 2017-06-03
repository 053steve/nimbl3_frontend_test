import React, { Component } from 'react'
import editIcon from '../../../assets/icons/icon_edit.svg'


let ProductList = (props) => {
  return  (        
        <div id="productlist-wrapper" className="columns small-12 table-scroll"> 
          <table id="productlist" className="cards">            
            <thead>
              <tr>
                {props.theadList.map(function(title) {
                  return <th key={title}>{title}</th>;
                })}
                <th></th>
              </tr>
            </thead>
            <tbody>              
              {props.listObject.map((listobj) => { 
                  let rows = []
                  let pricesTd, netTd, totalTd                  

                  if(listobj.listprice) {
                    pricesTd = <td className="list-price">{listobj.listprice}</td>                      
                    netTd = <td className="net-price">{listobj.listprice}</td>
                    totalTd = <td className="total">{listobj.total}</td>
                  } else {
                    let alert = <td className="list-price price-set-alert"><a href="#">Set Price</a></td> 
                    pricesTd = alert
                    netTd = alert
                    totalTd = alert
                  }

                  let tr = <tr>
                      <td className="sku">{listobj.sku}</td>
                      <td className="desc">{listobj.desc}</td>
                      <td className="brand">{listobj.brand}</td>
                      {pricesTd}
                      <td className="discount-price">{listobj.discountprice}</td>
                      {netTd}
                      <td className="qty">
                        {listobj.qty} <img src={editIcon} className="icon edit-icon" alt="edit-icon"/>
                      </td>
                      {totalTd}
                      <td className="remove-item">
                        <a href="#">
                          Remove Item
                        </a>
                      </td>                      
                    </tr>  

                  rows.push(tr)
                    
                  return rows        
              })}
              
            </tbody>
          </table>
      </div> 
  )  
}



ProductList.defaultProps = {
  theadList: ['sku', 'description', 'brand', 'list price', 'discount price', 'net price', 'qty', 'total'],
  listObject: [
      {
        sku: 'TN SO 000015', 
        desc: 'Magnetic contactor - 9A (5.5 kW, 7.5 HP), control voltage 230 Vac',
        brand: 'Schneider Electric',
        listprice: 'THB 880',
        discountprice: '30%',
        netprice: 'THB 660',
        qty: 16,
        total: 'THB 50,079,8823'
      },
      {
        sku: 'TN SO 000015', 
        desc: 'Magnetic contactor - 9A (5.5 kW, 7.5 HP), control voltage 230 Vac',
        brand: 'Schneider Electric',
        listprice: 'THB 880',
        discountprice: '30%',
        netprice: 'THB 660',
        qty: 16,
        total: 'THB 50,079,8823'
      },
      {
        sku: 'TN SO 000015', 
        desc: 'Magnetic contactor - 9A (5.5 kW, 7.5 HP), control voltage 230 Vac',
        brand: 'Schneider Electric',
        listprice: 'THB 880',
        discountprice: '30%',
        netprice: 'THB 660',
        qty: 16,
        total: 'THB 50,079,8823'
      },
      {
        sku: 'TN SO 000015', 
        desc: 'Magnetic contactor - 9A (5.5 kW, 7.5 HP), control voltage 230 Vac',
        brand: 'Schneider Electric',
        listprice: '',
        discountprice: '30%',
        netprice: '',
        qty: 16,
        total: ''
      },
      {
        sku: 'TN SO 000015', 
        desc: 'Magnetic contactor - 9A (5.5 kW, 7.5 HP), control voltage 230 Vac',
        brand: 'Schneider Electric',
        listprice: 'THB 880',
        discountprice: '30%',
        netprice: 'THB 660',
        qty: 16,
        total: 'THB 50,079,8823'
      }

  ]
}


export default ProductList
