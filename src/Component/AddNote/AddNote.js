import React, {useState} from 'react'
import "./AddNote.css"
import {Routes, Route} from "react-router-dom"

export default function AddNote({updateCategories}) {
    const initialData = {
        icon:"",
        title:"",
        description:""
    }

    const [data, setData] = useState(initialData);

    const submitForm = e => {
        e.preventDefault();
        updateCategories(data);
    }

    const editFormData = e => {
        const {name, value} = e.target;
        const newData = {...data};
        newData[name] = value;
        setData(newData);
    }

    return (
        <aside id="AddNotePanel">
            <Routes>
                <Route path="/" element={<h2>Create a New Categorie:</h2>} />
                <Route path="/Categorie" element={<h2>Create a New Note:</h2>}></Route>
            </Routes>
           
            <form onSubmit={submitForm} method="post">
                <label htmlFor="icon" placeholder='Set the categorie icon'>Icone:</label>
                <input name="icon" id="icon" type="text" maxLength={7} onBlur={editFormData}/>
                <label htmlFor="title" placeholder='Set the categorie title'>Titre:</label>
                <input name="title" id="title" type="text" maxLength={40} onBlur={editFormData} />
                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" placeholder='Set the categorie description' maxLength={300} onBlur={editFormData} />
                <input type="submit" value="Envoyer" />
            </form>
        </aside>
    )
}