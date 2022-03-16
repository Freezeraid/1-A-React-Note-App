import React from "react"
import "./AddNoteButton.css"

const AddNoteButton = (props) => {
    const openNewNote = () => {
        console.log("Créez une nouvelle note !")
    }

    return (
        <div id="AddNoteButton" onClick={openNewNote}>+</div>
    )
}

export default AddNoteButton;