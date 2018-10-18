import React , { PureComponent } from 'react'
import { connect } from 'react-redux'
import {actionCreators} from '../store'
import { Link } from 'react-router-dom'
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'
class List extends PureComponent {
  render () {
    const { articleList, handleMoreList, page } = this.props
    return (
      <div>
        {
          articleList.map((item, index)=>{
            return (
              <Link key={index} to={'/detail/'+item.get('id')}>
                <ListItem>
                  <img className='pic' src={item.get('imgUrl')} alt=""/>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={()=>{handleMoreList(page)}}>加载更多</LoadMore>
      </div>

    )
  }
}
const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  page: state.getIn(['home','articlePage'])
})

const mapDispatchToProps = (dispatch) =>{
  return {
    handleMoreList (page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)