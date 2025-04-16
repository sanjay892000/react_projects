import { useState } from "react";
import myContext from "./myContaxt";


const myState = ({children})=>{
    
    const [user, setUser] = useState("")
    
    return(

        <myContext.Provider value={{user, setUser}}>
        {children}
    </myContext.Provider>
    )
}

export default myState;