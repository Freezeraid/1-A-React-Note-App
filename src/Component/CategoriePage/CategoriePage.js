import React, {useState, useEffect} from "react"
import AddNoteButton from '../AddNoteButton/AddNoteButton'
import Note from '../Note/Note'
import { useLocation, useParams } from "react-router-dom"

const CategoriePage = ({updatePageIndex, category, editNote, deleteNote}) => {
    let { id } = useParams();
    const location = useLocation();
    const titleCategory = location.state.title;

    useEffect(()=>{
        updatePageIndex(id);
    }, []);

    const [data, setData] = useState({
        noteToEdit: undefined,
    });

    const catEditNote = (index) => {
        editNote(index);
    }

    const catDeleteNote = (index) => {
        deleteNote(index);
    }

    return(
        <>
            <h2>{titleCategory}:</h2>
            <AddNoteButton/>
            {category.notes.map((value, key) => {
                const { title, date, description } = value;
                return (<Note 
                    key={key}
                    id={key}
                    title={title}
                    date={date}
                    description={description}
                    catEditNote={catEditNote}
                    catDeleteNote={catDeleteNote}
                />);
            })}
        </>
    )
}

export default CategoriePage;