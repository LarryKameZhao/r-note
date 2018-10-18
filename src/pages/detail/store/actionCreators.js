import * as constants from './constants'
import axios from 'axios'

export const changeArticleDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+id).then((res)=>{
      const data = res.data.data
      dispatch(getArticleDetail(data))
    }, (fail)=>{
      console.log('fail: '+fail)
    })
  }
}

const getArticleDetail = (data) => ({
  type: constants.GET_ARTICLE_DETAIL,
  title: data.title,
  content: data.content
})