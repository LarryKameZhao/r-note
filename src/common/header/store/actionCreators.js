import * as actionTypes from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})

export const changeMouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})
export const changeMouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})
export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})
const changeList = (data) => ({
  type: actionTypes.GET_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res)=>{
      const data = res.data.data
      dispatch(changeList(data))
    },(failed)=>{
      console.log('failed:'+failed)
    }).catch((error)=>{
      console.log(error)
    })
  }
}