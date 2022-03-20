import React from "react"
import './Note.css'

const Note = ({id, title, date, description, catEditNote, catDeleteNote}) => {

    const noteEditNote = () => {
        catEditNote(id);
    }

    const noteDeleteNote = () => {
        catDeleteNote(id);
    }

    return(
        <article className='note'>
            <h3 className="note_title">{title}</h3>
            <span className="note_infos">{date}</span>
            <p>{description}</p>
            <span className='iconSpan' title="Delete Category" onClick={noteDeleteNote}>🛇</span>
            <span className='iconSpan' title="Edit Category" onClick={noteEditNote}>✎</span>
        </article>
    )
}

export default Note;