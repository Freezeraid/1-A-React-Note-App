import React from "react"
import './Note.css'

const Note = (props) => {
    return(
        <article className='note'>
            <h3 className="note_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <span className="note_infos">21.03.2002 20:50</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et sodales sem. In hac habitasse platea dictumst. Etiam imperdiet scelerisque tortor sed hendrerit. Vivamus tincidunt at lectus vel placerat. In eleifend nulla orci, in iaculis velit consequat et. Aliquam vulputate metus nec orci iaculis, vitae efficitur enim blandit. Nulla ultricies finibus ex tempus placerat. Morbi tincidunt ipsum ac tincidunt consectetur. Donec non finibus ante. Sed quis tortor ornare, molestie lacus et, tristique nisl. Aenean sapien nulla, dapibus sit amet rutrum sed, rhoncus nec orci.</p>
        </article>
    )
}

export default Note;