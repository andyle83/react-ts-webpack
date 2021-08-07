import './styles.css'
import react_logo from './react.png'
import { Counter } from './components/Counter'

export const App = () => {
  return (
    <>
      <img src={react_logo} alt="React Logo" />
      <h1>Starter Template</h1>
      <h2>
        Environment: {process.env.NODE_ENV} / {process.env.name}
      </h2>
      <Counter />
    </>
  )
}
