import './App.css'
import StateContext from './context/StateContext'
import Home from './components/Home'

function App() {


  return (
    <StateContext >
     <Home/>
    </StateContext>
  )
}

export default App
