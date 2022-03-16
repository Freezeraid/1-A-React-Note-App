import React from "react"
import "./AddNoteButton.css"

const AddNoteButton = ({displayAddComponentPanel}) => {
    const openNewNote = () => {
        displayAddComponentPanel();
    }

    return (
        <div id="AddNoteButton" onClick={openNewNote}>+</div>
    )
}

export default AddNoteButton;