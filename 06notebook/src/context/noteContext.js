import { createContext, useContext } from "react";

export const noteContext = createContext();

export const useNoteContext = ()=>{
    return useContext(noteContext);
}