import './App.css'
import Profile from './components/Profile'
import Loginform from './components/Loginform'
import StateContext from './context/StateContext'

function App() {


  return (
    <StateContext >
      <div className='h-screen bg-gray-200'>
        <Loginform />
        <Profile />
      </div>
    </StateContext>
  )
}

export default App
