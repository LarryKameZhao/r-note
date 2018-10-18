import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS ({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  backShow: false
})

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    recommendList: fromJS(action.recommendList),
    articleList: fromJS(action.articleList)
  })
}
const changeArticleList = (state, action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(action.list),
    'articlePage': action.nextPage
  })
}
export default (state = defaultState, action) =>{
  switch(action.type) {
    case constants.GET_HOME_LIST:
      return changeHomeData(state, action)
    case constants.GET_MORE_LIST:
      return changeArticleList(state, action)
    case constants.TOGGLE_FLAG:
      return state.set('backShow', action.backShow)
    default:
      return state
  }
}