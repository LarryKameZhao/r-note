import React , { PureComponent } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
class Home extends PureComponent {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//x-note.oss-cn-beijing.aliyuncs.com/img/banner/banner1.jpg" alt=""/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {
          this.props.backShow ?  <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>: null
        }
      </HomeWrapper>
    )
  }

  componentDidMount () {
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillMount () {
    window.removeEventListener('scroll',this.props.changeScrollTopShow)

  }
  handleScrollTop() {
    window.scrollTo(0,0)
  }
  bindEvents () {
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
}
const mapStateToProps = (state) => ({
  backShow: state.getIn(['home','backShow'])
})
const mapDispatchToProps = (dispatch) => ({
  changeHomeData () {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changeScrollTopShow () {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)