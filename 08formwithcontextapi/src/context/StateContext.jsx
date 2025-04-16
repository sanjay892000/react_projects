import createContextApi from "./CreateContextApi"
import { useState } from 'react';

const StateContext = ({children}) =>{
    const [user, setUser] = useState(null)
  return (
    <createContextApi.Provider value={{user, setUser}}>
     {children}
    </createContextApi.Provider>
  )
}

export default StateContext
