import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import HoverProvider from './redux/HoverProvider.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
   <Provider store={store}>
    <HoverProvider>
    <App />
    </HoverProvider>
   </Provider>
  </ChakraProvider>,
)
