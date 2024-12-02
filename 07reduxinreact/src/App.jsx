import { Provider } from 'react-redux'
import './App.css'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import { store } from './reduxapp/store'

function App() {


  return (
    <Provider store={store}>
      <div className='bg-gray-800 h-screen'>
        <Navbar />
        <Counter />
      </div>
    </Provider>
  )
}

export default App
