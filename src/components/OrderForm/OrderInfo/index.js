import React from 'react'

let getOrderActions = (isForSmall) => {
    let visibility = (isForSmall) ? 'show-for-small-only' : 'hide-for-small-only'

    let OrderActions = <div id="order-actions" className={`columns small-12 medium-3 ${visibility}`}> 
        <a href="" className="button column small-5 show-for-small-only">Update Order</a>                
        <div className="row align-spaced hide-for-small-only">
          <a href="" className="back column medium-3">Back</a>
          <a href="" className="button column small-4 medium-7">Update Order</a>
        </div>
    </div>

    return OrderActions

  }

  let getRandomSelect = (placeholder) => {
    return (
      <select defaultValue="placeholder">
        <option value="placeholder">{placeholder}</option>
        <option value="starbuck">Starbuck</option>
        <option value="hotdog">Hot Dog</option>
        <option value="apollo">Apollo</option>
      </select>
    )
  }

let OrderInfo = (props) => {
  return  (

    <div id="orderinfo-wrapper" className="">

      <div className="show-for-small-only mobile-order-info ">
          <div className="mobile-orderinfo-from">CPF Saraburi</div>
          <div className="mobile-orderinfo-location">Highway 2, Kaeng Khoi Saraburi Thailand</div>
          
      </div>        

      <div className="columns small-12">
        <div className="row">

          <div className="columns small-12 medium-9"> 
            <div id="orderinfo-inputs" className="cards">
              <div className="row">  

                {getOrderActions(true)}   

                <div className="columns small-12 medium-6 hide-for-small-only">                  
                  <span>
                    <div id="orderinfo-from"><span>CPF Saraburi</span></div>
                    <div id="orderinfo-location"><span>Highway 2, Kaeng Khoi Saraburi Thailand</span></div>
                    <div id="orderinfo-number"><span>+66 087 348 79 34</span></div>  
                  </span>                  
                </div>                
                <div className="columns small-12 medium-2 orderinfo-select hide-for-small-only">
                  <label> Type
                    {getRandomSelect('Retailers')}
                  </label>                  
                </div>

                <div className="columns small-12 medium-2 orderinfo-select">
                  <label>Owned By
                    {getRandomSelect('Tom Hanks')}
                  </label>
                </div>
                <div className="columns small-12 medium-2 orderinfo-select ">
                  <label>Status
                    {getRandomSelect('Pending')}
                  </label>
                </div>
              </div>
              
            </div>
          </div>

          {getOrderActions(false)}
          
        </div>
      </div>
      
    </div>
  )  
}




export default OrderInfo
