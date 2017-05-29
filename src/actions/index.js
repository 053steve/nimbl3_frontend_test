
// export const TOGGLE_BURGER = 'TOGGLE_BURGER';
export const MENU_OPEN = 'MENU_OPEN'
export const MENU_CLOSE = 'MENU_CLOSE'

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

/**
 * Standard redux action creator
 */
// export function toggle_burger() {
//   console.log('got here')  

//   // return {
//   //   type: TOGGLE_BURGER,
//   //   bool
//   // };
// }


export function toggle_menu() {
  return (dispatch, getState) => {
    let state = getState()
    let { menuSidebarCollapsed } = state.sidebar
    if(menuSidebarCollapsed) {
      console.log('open menu')
      dispatch(menu_open())
    } else {
      console.log('close menu')
      dispatch(menu_close())
      
    }
    
  }
}