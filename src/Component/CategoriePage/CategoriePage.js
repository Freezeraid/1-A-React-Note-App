import React from "react"
import AddNoteButton from '../AddNoteButton/AddNoteButton'
import Note from '../Note/Note'
import { useLocation } from "react-router-dom"

const CategoriePage = () => {
    const location = useLocation();
    console.log(location);
    const titleCategory = location.state.title;
    return(
        <>
            <h2>{titleCategory}:</h2>
            <AddNoteButton/>
            <Note/>
        </>
    )
}

export default CategoriePage;