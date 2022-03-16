import React from "react"
import "./AddNote.css"

const AddNote = (props) => {
    const openNewNote = () => {
        console.log("Créez une nouvelle note !")
    }

    return (
        <div id="AddNoteButton" onClick={openNewNote}>+</div>
    )
}

export default AddNote;