import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
const changeHomeData = (result) => ({
  type: constants.GET_HOME_LIST,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
})
export const getHomeInfo = () => {
  return (dispatch) =>{
    axios.get('/api/home.json').then((res)=>{
      const result = res.data.data
      console.log(result)
      dispatch(changeHomeData(result))
    },(fail)=>{
      console.log(fail)
    })
  }
}

const changeList = (list,nextPage) => ({
  type: constants.GET_MORE_LIST,
  list: fromJS(list),
  nextPage
})

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_FLAG,
  backShow: show
})

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+page).then((res)=>{
      const data = res.data.data
      console.log(data)
      dispatch(changeList(data, page+1))
    },(fail)=>{
      console.log('fail info:' + fail)
    })
  }
}