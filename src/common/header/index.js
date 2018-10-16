import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {actionCreators}   from './store'
import {CSSTransition} from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";

class Header extends PureComponent {
  render () {
    const { focused, handleFocused, handleBlur, list } = this.props
    return (
      <HeaderWrapper>
          <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>退出</NavItem>
             <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-Aa"></use>
            </svg>
          </NavItem>
          <SearchWrapper>
              <CSSTransition
              timeout={200}
              in={focused}
              classNames="slide"
              >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={()=>{handleFocused (list)}}
                onBlur={handleBlur}
              ></NavSearch>
              </CSSTransition>
            <svg className={this.props.focused ? 'icon focused zoom' : 'icon zoom'} aria-hidden="true">
              <use xlinkHref="#icon-search"></use>
            </svg>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'>
            <svg className="icon">
            <use xlinkHref="#icon-pencil2"></use>
            </svg>
              写文章
            </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
  getListArea () {
    const { focused, list, page, totalPage, handleMouseEnter,
      handleMouseLeave, mouseEnter, handleChangePage } = this.props
    const pageList = []
    const newList = list.toJS()
    if (newList.length) {
      for (let i = (page-1)*10;i < page*10; i++) {
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
      }
    }
    if (focused || mouseEnter) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter}
        onMouseLeave ={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={()=>{handleChangePage(page,totalPage, this.spinIcon)}}>
              <svg className="icon spin"
                   ref={(icon)=>{this.spinIcon = icon}}
              >
                <use xlinkHref="#icon-refresh"></use>
              </svg>换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null
    }
  }

}


const mapStateToProps = (state) => {
  return {
      focused: state.getIn(['header','focused']),
      list: state.getIn(['header','list']),
      page: state.getIn(['header','page']),
      totalPage: state.getIn(['header','totalPage']),
      mouseEnter: state.getIn(['header','mouseEnter'])
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocused (list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleBlur () {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter () {
      dispatch(actionCreators.changeMouseEnter())
    },
    handleMouseLeave () {
      dispatch(actionCreators.changeMouseLeave())
    },
    handleChangePage (page, totalPage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/ig,'')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      }
      else {
        originAngle = 0
      }
      spinIcon.style.transform = `rotate(${originAngle + 360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)