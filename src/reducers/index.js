import {
    combineReducers
} from 'redux'
import {    
    MENU_OPEN,
    MENU_CLOSE,
    INPUT_FOCUS,
    INPUT_UNFOCUS
} from '../actions'


function sidebar(state = {    
    menuSidebarCollapsed: true

}, action) {
    
    switch (action.type) {
        case MENU_OPEN:            
            return Object.assign({}, state, {                
                menuSidebarCollapsed: false
            }) 
        case MENU_CLOSE:
            return Object.assign({}, state, {                
                menuSidebarCollapsed: true
            }) 
        default:
            return state
    }

}

function textInput(state = {    
    inputFocusStatus: false

}, action) {
    
    switch (action.type) {
        case INPUT_FOCUS:            
            return Object.assign({}, state, {                
                inputFocusStatus: true
            }) 
        case INPUT_UNFOCUS:
            return Object.assign({}, state, {                
                inputFocusStatus: false
            }) 
        default:
            return state
    }

}


const rootReducer = combineReducers({    
    sidebar,
    textInput    
})


export default rootReducer