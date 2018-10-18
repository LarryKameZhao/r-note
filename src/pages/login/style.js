import styled from 'styled-components'

export const LoginWrapper = styled.div `
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom:0;
  top: 56px;
  background: #eee;

`

export const LoginBox = styled.div `
  width: 400px;
  height: 220px;
  margin: 50px auto;
  background: #fff;
  box-shadow: 0 0 8x rgba(0,0,0,.2);
  padding-top: 20px;
  .button-wrapper{
    display: flex;
    justify-content: center;
    width: 400px;
  }
`

export const Input = styled.input `
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  margin: 10px auto;
`
export const Button = styled.div `
  width: 100px;
  height: 30px;
  line-height: 30px;
  color:#fff;
  background: #3194d0;
  border-radius: 15px;
  margin: 40px 30px;
  text-align: center;
 
`