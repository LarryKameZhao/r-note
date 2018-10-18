import React , { PureComponent } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
class Write extends PureComponent {
  render () {
    const { login } = this.props
    if (login) {
      return (
        <div>writer</div>
      )
    } else {
      return <Redirect to='/login'/>
    }
  }


}

const mapStateToProps = (state) => ({
  content: state.getIn(['detail','content']),
  title: state.getIn(['detail','title']),
  login: state.getIn(['login','login'])
})
const mapDispatchToProps = (dispatch) => {
  return {

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Write)