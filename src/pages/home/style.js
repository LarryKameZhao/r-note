import styled from 'styled-components'

export const HomeWrapper = styled.div `
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div `
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`
export const TopicWrapper = styled.div `
  padding: 20px 0 10px 0;
  // background: red;
  overflow:hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div `
  float: left;
  padding-right: 10px;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px; 
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  margin-left: 18px;
  margin-bottom: 18px;
  .topic-img {
    // float: left;
    display: block;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
  .topic-desc {
    margin-left: 10px;
  }
`
export const ListItem = styled.div `
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic {
    display:block;
    float:right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div `
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 18px;
    color: #999;
    margin-top: 20px;
  }
`
export const LoadMore = styled.div `
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 20x;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
`
export const HomeRight = styled.div `
  width: 280px;
  float: right;

`
export const BackTop = styled.div `
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 15px;
`
export const RecommendWrapper = styled.div `
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div `
  width: 280px;
  height: 50px;
  background: url(${(props) =>{return props.imgUrl} });
  background-size: contain;
`
export const WriterWrapper = styled.div `
  width: 278px;
  height: 300px;
  line-height: 300px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
`