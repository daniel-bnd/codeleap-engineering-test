import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #dddddd;
`

export const Modal = styled.div`
  width: 500px;
  height: 220px;
  padding-left: 32px;
  padding-top: 28px;
  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
`

export const Subtitle = styled.p`
  margin-top: 30px;
`

export const Input = styled.input`
  width: 444px;
  height: 28px;
  border: 1px solid #777777;
  border-radius: 4px;
  padding-left: 11px;
  margin-top: 13px;

  ::placeholder {
    color: #cccccc;
  }
`

export const EnterButton = styled.button`
  width: 111px;
  height: 33px;
  background: #000000;
  color: #ffffff;
  border: none;
  font-weight: 700;
  float: right;
  margin-top: 20px;
  margin-right: 25px;

  :hover {
    cursor: pointer;
    animation: buttonAnimation 0.9s ease-in-out infinite;
  }

  @keyframes buttonAnimation {
    50% {
      transform: Scale(1.05);
    }
    100% {
      transform: Scale(1);
    }
  }
`
