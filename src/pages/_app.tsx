import { AppProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  )
}

export default MyApp
