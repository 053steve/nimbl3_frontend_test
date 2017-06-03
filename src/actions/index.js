
export const MENU_OPEN = 'MENU_OPEN'
export const MENU_CLOSE = 'MENU_CLOSE'
export const INPUT_FOCUS = 'INPUT_FOCUS'
export const INPUT_UNFOCUS = 'INPUT_UNFOCUS'

export function menu_open() {
  return {
    type: MENU_OPEN
  }
}

export function menu_close() {
  return {
    type: MENU_CLOSE
  }
}

export function input_focus() {
  return {
    type: INPUT_FOCUS
  }
}

export function input_unfocus() {
  return {
    type: INPUT_UNFOCUS
  }
}

export function toggle_menu() {
  return (dispatch, getState) => {
    let state = getState()
    let { menuSidebarCollapsed } = state.sidebar
    if(menuSidebarCollapsed) {      
      dispatch(menu_open())
    } else {      
      dispatch(menu_close())
    }
    
  }
}

export function focus_input() {
  return (dispatch, getState) => {
    let state = getState()
    let { inputFocusStatus } = state.textInput    
    if(inputFocusStatus) {      
      dispatch(input_unfocus())
    } else {      
      dispatch(input_focus())
    }
    
  }
}