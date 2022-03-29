import styled from 'styled-components'
import SignOutSVG from '../../assets/SignOut.svg'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #dddddd;
`
export const ContainerBox = styled.div`
  margin: 0 auto;
  width: 800px;
  min-height: 100vh;
  position: relative;
`

export const Title = styled.div`
  height: 80px;
  padding: 0 37px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: #fff;
    font: 700 22rem Roboto, sans-serif;
  }
`

export const SignOutBox = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #fff;
    font: 500 18rem Roboto, sans-serif;
  }

  :hover {
    cursor: pointer;
    filter: brightness(0.5);
  }
`

export const SignOut = styled(SignOutSVG)`
  margin-left: 5px;
`

export const PostsBox = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 45px;
  background: #ffffff;
`
