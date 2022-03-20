import React from "react"
import "./AddNoteButton.css"

const AddNoteButton = ({displayAddComponentPanel}) => {
    const openNewNote = () => {
        displayAddComponentPanel();
    }

    return (
        <span id="AddNoteButton" onClick={openNewNote}>+</span>
    )
}

export default AddNoteButton;