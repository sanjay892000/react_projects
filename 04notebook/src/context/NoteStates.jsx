import React, { Children, useState } from 'react'
import { noteContext } from './noteContext'

function NoteStates({children}) {
    const [allNotes, setAllNotes] = useState([]);

    const addNotes = (notes) => {
        setAllNotes([...allNotes, notes])
    }


    return (
        <noteContext.Provider value={{allNotes,addNotes}}>
         {children}
        </noteContext.Provider>
    )
}

export default NoteStates
