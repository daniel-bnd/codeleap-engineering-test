import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Login = styled.button`
  width: 111px;
  height: 33px;
  background: #000000;
  color: #ffffff;
  border: none;
  font-weight: 700;

  :hover {
    cursor: pointer;
    animation: buttonAnimation 0.9s ease-in-out infinite;
  }

  @keyframes buttonAnimation {
    50% {
      transform: Scale(1.1);
    }
    100% {
      transform: Scale(1);
    }
  }
`
