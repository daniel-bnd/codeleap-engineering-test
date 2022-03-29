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
  align-items: center;
  background: rgba(119, 119, 119, 0.8);
`

export const Title = styled.p`
  font: 700 22rem Roboto, sans-serif;
`

export const Modal = styled.div`
  width: 730px;
  height: 350px;
  padding: 23px 35px 30px 30px;
  background: #ffffff;
  box-sizing: border-box;
`

export const Label = styled.label`
  display: inline-block;
  font-size: 16rem;
  font-weight: 400;
  margin-top: 19px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 30px;
  background: #ffffff;
  border: 1px solid #777777;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 10px;
  font: 400 16px Roboto, sans-serif;
  ::placeholder {
    color: #cccccc;
  }
  :focus:required:invalid {
    outline: none;
    border: 1px solid tomato;
  }
  :required:valid {
    border: 1px solid #777777;
  }
`

export const TextArea = styled.textarea`
  outline: none;
  resize: none;
  white-space: pre-line;
  width: 100%;
  height: 74px;
  background: #ffffff;
  border: 1px solid #777777;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 10px;
  padding-top: 7px;
  font: 400 16rem Roboto, sans-serif;
  ::placeholder {
    color: #cccccc;
  }
  :focus:required:invalid {
    outline: none;
    border: 1px solid tomato;
  }
  :required:valid {
    border: 1px solid #777777;
  }
`

export const Button = styled.button`
  border: none;
  float: right;
  width: 111px;
  height: 33px;
  margin-top: 35px;
  background: #000000;
  color: #fff;
  font: 700 16rem Roboto, sans-serif;

  :hover {
    cursor: pointer;
    animation: buttonAnimation 0.7s ease-in-out infinite;
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
