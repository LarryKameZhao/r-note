import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style";

class Header extends PureComponent {

  render () {

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
              in={this.props.focused}
              classNames="slide"
              >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleFocused}
                onBlur={this.props.handleBlur}
              ></NavSearch>
              </CSSTransition>
            <svg className={this.props.focused ? 'icon focused' : 'icon'} aria-hidden="true">
              <use xlinkHref="#icon-search"></use>
            </svg>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'>
            <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-pencil2"></use>
            </svg>
              写文章
            </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

}
const mapStateToProps = (state) => {
  return {
      focused: state.header.focused
    }
  }

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocused () {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleBlur () {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)