import {
    combineReducers
} from 'redux'
import {    
    MENU_OPEN,
    MENU_CLOSE
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


const rootReducer = combineReducers({    
    sidebar    
})


export default rootReducer