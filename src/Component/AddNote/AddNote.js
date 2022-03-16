import React, {useState, useEffect} from 'react'
import "./AddNote.css"
import {Routes, Route} from "react-router-dom"

export default function AddNote({display, updateCategories, displayAddComponentPanel}) {
    const initialData = {
        display:display,
        icon:"",
        title:"",
        description:""
    }

    const [data, setData] = useState(initialData);

    const submitForm = e => {
        e.preventDefault();
        const {icon, title, description} = data;
        let formData = {icon:icon, title:title, description:description}
        updateCategories(formData);
    }

    const editFormData = e => {
        const {name, value} = e.target;
        const newData = {...data};
        newData[name] = value;
        setData(newData);
    }

    useEffect(() => {
        let newData = {...data};
        newData.display = display;
        setData(newData);
    }, [display]);

    const closePanel = () => {
        displayAddComponentPanel();
    }

    return (
        <aside id="AddNotePanel" className={data.display}>
            <span id="close_AddPanel" onClick={closePanel}>←</span>
            <div id="form_container">
                <Routes>
                    <Route path="/" element={<h2>Create a New Categorie:</h2>} />
                    <Route path="/Categorie" element={<h2>Create a New Note:</h2>}></Route>
                </Routes>
                <form onSubmit={submitForm} method="post">
                    <label htmlFor="icon" placeholder='Set the categorie icon'>Icone:</label>
                    <input name="icon" id="icon" type="text" maxLength={7} onBlur={editFormData} required />
                    <label htmlFor="title" placeholder='Set the categorie title'>Title:</label>
                    <input name="title" id="title" type="text" maxLength={40} onBlur={editFormData} required />
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" placeholder='Set the categorie description' maxLength={300} onBlur={editFormData} required />
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </aside>
    )
}