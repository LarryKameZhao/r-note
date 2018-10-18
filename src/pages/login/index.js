import React , { PureComponent } from 'react'
import {connect} from 'react-redux'
import {Link,Redirect} from 'react-router-dom'
import { actionCreators } from './store'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from "./style";

class Login extends PureComponent {
  render () {
    const { login } = this.props
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' innerRef={(input)=>{this.account = input}}></Input>
            <Input placeholder='密码' type='password' innerRef={(input)=>{this.password= input}}></Input>
            <div className='button-wrapper'>
              <Button onClick={()=>{this.props.logIn(this.account,this.password)}}>登陆</Button>
              <Link to='/detail'>
                <Button>注册</Button>
              </Link>
            </div>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/'/>
    }

  }


}

const mapStateToProps = (state) => ({
  login: state.getIn(['login','login'])
})
const mapDispatchToProps = (dispatch) => {
  return {
    logIn (accountElement, passwordElement) {
      dispatch(actionCreators.login(accountElement, passwordElement))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)