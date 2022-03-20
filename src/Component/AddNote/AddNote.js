import React, {useState, useEffect} from 'react'
import "./AddNote.css"
import {Routes, Route} from "react-router-dom"

export default function AddNote({display, addCategories, displayAddComponentPanel, categorieToEdit, noteToEdit, addNote}) {
    const displayNone = "displayPanelNone";

    display === 1 ? display = "" : display = displayNone;

    const submitForm = e => {
        e.preventDefault();
        const {icon, title, description} = data;

        const isInCategory = window.location.href.includes("Category");
        if(!isInCategory)
        {
            let formData = {icon:icon, title:title, description:description, notes:[]}
            addCategories(formData);
        }
            
        else
        {
            const today = new Date();
            const todayDate = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`;
            let formData = {title:title, date:todayDate, description:description}
            addNote(formData);
        }
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
        if(categorieToEdit === undefined || noteToEdit === undefined)
            return "Create a";
        else
            return "Edit a";
    }

    useEffect(() => {
        let icon = "", description = "", title = "";
        if(categorieToEdit !== undefined){
            icon = categorieToEdit.icon;
            title = categorieToEdit.title;
            description = categorieToEdit.description;
        }

        let newData = {...data};
        setInitialFormData(icon, title, description, newData);
    }, [categorieToEdit]);

    useEffect(() => {
        let description = "", title = "";
        if(noteToEdit !== undefined){
            title = noteToEdit.title;
            description = noteToEdit.description;
        }

        let newData = {...data};
        setInitialFormData(null, title, description, newData);
    }, [noteToEdit]);

    const setInitialFormData = (icon, title, description, newData) => {
        console.log(newData);
        if(icon !== null)
            document.getElementById('icon').value = icon;
        document.getElementById('title').value = title;
        document.getElementById('description').value = description;
        newData.panelTitle = setPanelTitle();
        newData.icon = icon;
        newData.title = title;
        newData.description = description;
        setData(newData);
    }

    const initialData = {
        panelTitle: setPanelTitle(),
        icon:"",
        title:"",
        description:""
    }

    const [data, setData] = useState(initialData);

    return (
        <>
            <div id='GreyBg' className={display} onClick={closePanel}>
                &zwnj;  
            </div>
            <aside id="AddNotePanel" className={display}>
                <span id="close_AddPanel" onClick={closePanel}>←</span>
                <div id="form_container">
                    <Routes>
                        <Route path="/" element={<h2>{data.panelTitle} Category:</h2>}/>
                        <Route path="/Category/:id" element={<h2>{data.panelTitle} Note:</h2>}></Route>
                    </Routes>
                    <form onSubmit={submitForm} method="post">
                        <Routes>
                            <Route path="/" element={<>
                                <label htmlFor="icon" placeholder='Set the categorie icon'>Icone:</label>
                                <input name="icon" id="icon" type="text" maxLength={7} onChange={editFormData} required />
                            </>}></Route>
                        </Routes>
                        
                        <label htmlFor="title" placeholder='Set the categorie title'>Title:</label>
                        <input name="title" id="title" type="text" maxLength={40} onChange={editFormData} required/>
                        <label htmlFor="description">Description:</label>
                        <textarea name="description" id="description" placeholder='Set the categorie description' maxLength={300} onChange={editFormData} required />
                        <input type="submit" value="Envoyer" />
                    </form>
                </div>
            </aside>
        </>
    )
}