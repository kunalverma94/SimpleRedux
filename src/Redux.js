import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
const rr = (state = [], action) => {
  switch (action.type) {
    case 'www':
      return { ...state, w: 99 }
    default:
      return { ...state, x: 99 }
  }
}
export const ss = createStore(
  combineReducers({ rr }),
  {},
  applyMiddleware(thunk)
)
