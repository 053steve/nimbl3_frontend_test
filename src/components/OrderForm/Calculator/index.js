import React, { Component } from 'react'

class Calculator extends Component {  
    

  render() {
    
    return  (
              
        <div id="calculator-wrapper" className="columns small-12 medium-offset-8 medium-4">            
          <div id="calculator" className="cards">
              <div className="row align-justify">
                <div className="column small-7">
                  <label>Estimated Delivery Date</label>
                </div>
                <div className="column small-5">
                  <div className="right-value">
                    <div className="right-value-box"> 14-10-2016</div>
                  </div>
                </div>
              </div>

              <hr/>
              <div className="middle-calculator">
              
                  <div className="row align-justify">
                    <div className="column small-7">
                      <label className="right inline">Sub-total</label>
                    </div>
                    <div className="column small-5">
                      <div className="right-value">
                        40,033
                      </div>
                    </div>
                  </div>

                  <div className="row align-justify">
                    <div className="column small-7">
                      <label className="right inline">Shipping</label>
                    </div>
                    <div className="column small-5">
                      <div className="right-value">
                        <div className="right-value-box"> 0</div>
                      </div>
                    </div>
                  </div>

                  <div className="row align-justify">
                    <div className="column small-7">
                      <label className="right inline">Special Discount</label>
                    </div>
                    <div className="column small-5">
                      <div className="right-value">
                        <div className="right-value-box"> 9,999.999</div>
                      </div>
                    </div>
                  </div>

                  <div className="row align-justify">
                    <div className="column small-7">
                      <label className="right inline">Tax</label>
                    </div>
                    <div className="column small-5">
                      <div className="right-value">
                        <div className="row align-left">
                          <div className="column small-3">
                            <div className="right-value-box">7</div>                            
                          </div>
                          <div className="column small-3 tax-output">                            
                            %1,826.00
                          </div>
                          
                        </div>                    
                      </div>
                    </div>
                  </div>
              </div>
              <hr/>

              <div className="row align-justify">
                <div className="column small-7">
                  <label className="right inline total-label">Total</label>
                </div>
                <div className="column small-5">
                  <div className="right-value">
                    <div className="highlight"> THB 41,585.31</div>
                    
                  </div>
                </div>
              </div>
          </div> 
        </div>      
      
    );
  }
}



export default Calculator
