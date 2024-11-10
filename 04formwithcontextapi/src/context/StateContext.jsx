import CreateContextApi from "./CreateContextApi"
import { useState } from 'react';

const StateContext = ({children}) =>{
    const [user, setUser] = useState(null)
  return (
    <CreateContextApi.Provider value={{user, setUser}}>
     {children}
    </CreateContextApi.Provider>
  )
}

export default StateContext
