import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 723px;
  height: 349px;
  margin-bottom: 35px;
  padding-left: 30px;
  padding-top: 23px;
  background: #ffffff;
  border: 1px solid #999999;
  box-sizing: border-box;
`

export const Message = styled.p`
  font-size: 22rem;
  font-weight: 700;
  margin-bottom: 15px;
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
  width: 659px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #777777;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: 10px;
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

export const TextArea = styled.textarea`
  outline: none;
  resize: none;
  white-space: pre-line;
  width: 659px;
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

interface ButtonProps {
  disabled: boolean
}

export const Button = styled.button<ButtonProps>`
  border: none;
  float: right;
  width: 111px;
  height: 33px;
  margin-top: 30px;
  margin-right: 34px;
  background: #000000;
  color: #fff;
  font: 700 16rem Roboto, sans-serif;

  :hover {
    cursor: pointer;
    animation: buttonAnimation 0.7s ease-in-out infinite;
  }

  ${props =>
    props.disabled &&
    css`
      background: grey;
      :hover {
        cursor: default;
        animation: none;
      }
    `}

  @keyframes buttonAnimation {
    50% {
      transform: Scale(1.05);
    }
    100% {
      transform: Scale(1);
    }
  }
`
