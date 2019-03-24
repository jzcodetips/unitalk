import React from "react"
import { Provider } from 'react-redux'

import 'resources/stylesheets/main.scss'

import store from './store'
import Main from 'src/containers/main'

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App