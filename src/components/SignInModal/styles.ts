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
  padding: 28px 25px 23px 30px;
  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100vw;
    height: 29.5vh;
    padding-left: 15px;
  }
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 22rem;
  line-height: 26px;
`

export const Subtitle = styled.p`
  margin-top: 30px;
`

export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 28px;
  border: 1px solid #777777;
  border-radius: 4px;
  padding-left: 11px;
  margin-top: 13px;
  font: 400 16rem Roboto, sans-serif;

  :focus:required:invalid {
    border: 1px solid tomato;
  }
  :required:valid {
    border: 1px solid #777777;
  }

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
