import styled from 'styled-components'
import DeleteSVG from '../../assets/Delete.svg'
import EditSVG from '../../assets/Edit.svg'

export const Container = styled.div`
  width: 723px;
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000000;
  span {
    color: #fff;
    font: 700 20rem Roboto, sans-serif;
  }
`

export const SettingsBox = styled.div`
  display: flex;
  align-items: center;
`

export const Delete = styled(DeleteSVG)`
  margin-right: 25px;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
    filter: brightness(0.5);
    transition: all 0.1s ease-in-out;
  }
`

export const Edit = styled(EditSVG)`
  :hover {
    cursor: pointer;
    transform: scale(1.1);
    filter: brightness(0.5);
    transition: all 0.1s ease-in-out;
  }
`

export const PostBox = styled.div`
  width: 723px;
  height: 100%;
  padding: 25px 30px;
  border: 1px solid #999999;
  box-sizing: border-box;
`

export const InfomationBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`

export const User = styled.div`
  font: 700 18rem Roboto, sans-serif;
  color: #777777;
`

export const Time = styled.div`
  font: 400 18rem Roboto, sans-serif;
  color: #777777;
`

export const Content = styled.div`
  white-space: pre-line;
  width: 660px;
  text-align: justify;
  font: 400 18rem Roboto, sans-serif;
`
