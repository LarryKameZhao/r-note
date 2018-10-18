import styled from 'styled-components'

let logoPic = '//x-note.oss-cn-beijing.aliyuncs.com/img/nav-logo.png'

export const HeaderWrapper = styled.div`
  z-index: 1;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`
export const Logo = styled.div `
  height: 58px;
  position:absolute;
  top:0;
  left:0;
  width:100px;
  display:block;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
  &.icon{
    margin-left: 20px;
  }
 `
export const NavItem = styled.div`
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right {
    float: right;
    color:#969696;
  }
  &.active {
    color: #ea6f5a;
  }
 `

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  margin: 9px;
  padding: 0px 30px 0px 20px;
  margin-left: 20px;
  width: 160px;
  line-height:38px;
  border: none;
  outline:none;
  border-radius: 19px;
  background: #eee;
  box-sizing: border-box;
  font-size: 14px;
  color: #777;
  &.slide-enter {
    width: 160px;
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
  &.focused {
    width: 220px;
  }

`
export const Addition = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;

`

export const Button = styled.div `
  line-height: 38px;
  float: right;
  margin-right: 20px;
  border-radius: 19px;
  padding: 0 20px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    background:#ec6149;
    color: #fff;
  }
`

export const SearchWrapper = styled.div `
  position: relative;
  float: left;
  .zoom {
    width: 15px;
    height: 15px;
    // right: 5px;
    // top:5px;
     margin-left: -35px;
    &.focused{
      width: 20px;
      height: 20px;
      background: #777;
      fill:white;
      border-radius:20px;
    }
  }
`
export const SearchInfo = styled.div `
  position: absolute;
  top: 56px;
  width: 240px;
  left: 0;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: white;
 
`
export const SearchInfoTitle = styled.div `
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #333;
  display: flex;
  justify-content: space-between;
  

`

export const SearchInfoSwitch = styled.span `
  font-size: 14px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 4px;
    margin-top: 3px;
    transition: all .3s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`
export const SearchInfoItem = styled.a `
  font-size: 12px;
  padding: 0 5px;
  line-height: 20px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
  float: left; 
  margin-right: 10px;
  margin-bottom: 15px;
`
export const SearchInfoList = styled.div `
  overflow: hidden;
`

