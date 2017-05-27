import {
    combineReducers
} from 'redux'
import {    
    CHANGE_BAZ
} from '../actions'

function app(state = {}, action) {    
    switch (action.type) {
        case CHANGE_BAZ:
            return {
                ...state,
                baz: action.payload,
            };
        default:
            return state
    }
}



const rootReducer = combineReducers({    
    app    
})


export default rootReducer