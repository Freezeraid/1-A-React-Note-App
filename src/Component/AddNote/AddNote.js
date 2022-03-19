import React, {useState, useEffect} from 'react'
import "./AddNote.css"
import {Routes, Route} from "react-router-dom"

export default function AddNote({display, addCategories, displayAddComponentPanel, categorieToEdit}) {
    const displayNone = "displayPanelNone";

    display === 1 ? display = "" : display = displayNone;

    const submitForm = e => {
        e.preventDefault();
        const {icon, title, description} = data;
        let formData = {icon:icon, title:title, description:description}
        addCategories(formData);
    }

    const editFormData = e => {
        const {name, value} = e.target;
        const newData = {...data};
        newData[name] = value;
        setData(newData);
    }

    const closePanel = () => {
        displayAddComponentPanel();
    }

    const setPanelTitle = () => {
        if(categorieToEdit === undefined)   
            return <h2>Create a Categorie:</h2>;
        else
            return <h2>Edit a Categorie:</h2>;
    }

    useEffect(() => {
        let icon = "", description = "", title = "";
        if(categorieToEdit !== undefined){
            icon = categorieToEdit.icon;
            title = categorieToEdit.title;
            description = categorieToEdit.description;
        }
        document.getElementById('icon').value = icon;
        document.getElementById('title').value = title;
        document.getElementById('description').value = description;
        let newData = {...data};
        newData.panelTitle = setPanelTitle();
        newData.icon = icon;
        newData.title = title;
        newData.description = description;
        setData(newData);
    }, [categorieToEdit]);

    const initialData = {
        panelTitle: setPanelTitle(),
        icon:"",
        title:"",
        description:""
    }

    const [data, setData] = useState(initialData);

    return (
        <aside id="AddNotePanel" className={display}>
            <span id="close_AddPanel" onClick={closePanel}>←</span>
            <div id="form_container">
                <Routes>
                    <Route path="/" element={data.panelTitle} />
                    <Route path="/Category" element={data.panelTitle}></Route>
                </Routes>
                <form onSubmit={submitForm} method="post">
                    <label htmlFor="icon" placeholder='Set the categorie icon'>Icone:</label>
                    <input name="icon" id="icon" type="text" maxLength={7} onChange={editFormData} required />
                    <label htmlFor="title" placeholder='Set the categorie title'>Title:</label>
                    <input name="title" id="title" type="text" maxLength={40} onChange={editFormData} required/>
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" placeholder='Set the categorie description' maxLength={300} onChange={editFormData} required />
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </aside>
    )
}