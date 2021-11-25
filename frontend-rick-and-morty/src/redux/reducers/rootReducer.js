import {
  //SET_LOGGED,
} from '../actions/constants'

const initialState = {
  //logged: false,
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_LOGGED:
    //   return { ...state, logged: action.payload }
      
    default:
      return state
  }
}

export default rootReducer
