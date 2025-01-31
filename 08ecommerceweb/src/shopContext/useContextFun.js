import { useContext } from "react";
import shopContext from "./shopContext";

const useContextFun = ()=>{
    return useContext(shopContext)
 }

export default useContextFun;