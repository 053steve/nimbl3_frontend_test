import React, { Component } from 'react'
import iconPlus from '../../../assets/icons/icon_plus.svg';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { focus_input } from '../../../actions'
import onClickOutside from 'react-onclickoutside' //module for listening to outside clicks

const isFocusClass = 'input_focus'

class ProductInput extends Component { 

  constructor(props) {
    super(props);
    this.state = {      
      containerFocusClass: ''
    }
  }  

  componentWillReceiveProps = nextProps => {    
     if (nextProps.inputFocusStatus !== this.props.inputFocusStatus) {
      let { inputFocusStatus } = nextProps
      this.handleFocus(inputFocusStatus)
    }
  }

  handleFocus = (isFocus) => {
    (isFocus) ? this.setState({containerFocusClass: isFocusClass }) : this.setState({containerFocusClass: '' })
  }

  handleClickOutside = evt => {    
    let { dispatch, inputFocusStatus } = this.props            
    if(inputFocusStatus) {
      dispatch(focus_input())
    }
  }
  


  render() {
    let { containerFocusClass } = this.state
    return  (
        <div id="productinput-wrapper" className="columns small-12">
            <div className={`input-container ${containerFocusClass}`}>              
              <input 
                type="text" 
                id="productinput" 
                className="cards" 
                ref={(c) => {this.ref = c;}}
                onFocus={() => {                  
                  this.props.dispatch(focus_input())
                }}
                placeholder="Add Products"/> 
              <img src={iconPlus} className="icon plus-icon" alt="plus-icon"/>
            </div>
        </div>      
    );
  }
}

ProductInput.propTypes = {  
  dispatch: PropTypes.func.isRequired  
}

function mapStateToProps(state) {    
  const { inputFocusStatus } = state.textInput
  
  return {
    inputFocusStatus
  }
}

export default connect(mapStateToProps)(onClickOutside(ProductInput))

