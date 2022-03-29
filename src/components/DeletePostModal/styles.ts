import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background: rgba(119, 119, 119, 0.8);
`

export const Modal = styled.div`
  width: 660px;
  height: 170px;
  margin-top: 124px;
  padding: 35px 35px 25px 50px;
  background: #ffffff;
  box-sizing: border-box;
`

export const Message = styled.div`
  font: 400 20rem Roboto, sans-serif;
`

export const ConfirmationBox = styled.div`
  float: right;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
`

export const Button = styled.button`
  width: 111px;
  height: 33px;
  margin-left: 15px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  font: 700 16rem Roboto, sans-serif;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`
