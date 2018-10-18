import { fromJS } from 'immutable'
import * as constatns from './constants'
const defaultState = fromJS({
  login: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constatns.CHANGE_LOGIN:
      return state.set('login',action.value)
    case constatns.LOG_OUT:
      return state.set('login',action.value)
    default:
      return state
  }
}