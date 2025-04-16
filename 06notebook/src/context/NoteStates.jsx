import React, { Children, useState } from 'react'
import { noteContext } from './noteContext'

function NoteStates({children}) {
    const [allNotes, setAllNotes] = useState([]);

    const addNotes = (notes) => {
        setAllNotes([...allNotes, notes])
    }
    const deleteNotes = (notes) => {
        setAllNotes(allNotes.filter(note => note !== notes))
    }

    const editNotes = (notes)=>{
         
    }


    return (
        <noteContext.Provider value={{allNotes,addNotes,deleteNotes}}>
         {children}
        </noteContext.Provider>
    )
}

export default NoteStates
