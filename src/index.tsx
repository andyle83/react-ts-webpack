import ReactDOM from 'react-dom'
import { App } from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
)
