import React, {useState} from 'react';
import "./App.css";
import {Routes, Route} from "react-router-dom"

import AddNoteButton from "../AddNoteButton/AddNoteButton"
import Categorie from '../Categorie/Categorie';
import CategoriePage from '../CategoriePage/CategoriePage';
import AddNote from '../AddNote/AddNote';
import { useCookies } from "react-cookie";

const App = () => {
    const [cookie, setCookie] = useCookies();
    let categories = [];
    if (cookie.categories !== undefined)
        categories = cookie.categories

    const [data, setData] = useState({
        displayAdd: 0, 
        categorieToEdit: undefined,
        noteToEdit: undefined,
        categories: categories,
        pageIndex: 0
    });

    const updatePageIndex = (index) => {
        let newData = {...data};
        newData.pageIndex = index;
        setData(newData);
    }

    const addNote = noteData => {
        let newData = {...data}
        if(newData.noteToEdit !== undefined)
        {
            newData.categories[newData.pageIndex].notes[newData.noteToEdit.index] = noteData;
            newData.noteToEdit = undefined;
        }
        else
        {
            newData.categories[newData.pageIndex].notes = [...newData.categories[newData.pageIndex].notes, noteData]
        }
        newData.displayAdd = 0;
        setData(newData);
        updateCookie(newData.categories);
    }

    const editNote = index => {
        let newData = {...data};
        if (newData.categories[newData.pageIndex].notes[index] !== undefined)
        {
            newData.noteToEdit = newData.categories[newData.pageIndex].notes[index];
            newData.noteToEdit.index = index;
            newData.displayAdd = 1;
            setData(newData);
            updateCookie(newData.categories);
        }
    }

    const deleteNote = index => {
        let newData = {...data};
        if (newData.categories[newData.pageIndex].notes[index] !== undefined)
        {
            newData.categories[newData.pageIndex].notes.splice(index, 1);
            setData(newData);
            updateCookie(newData.categories);
        }
    }

    const addCategories = categorieData => {
        
        let newData = {...data};
        
        if(newData.categorieToEdit !== undefined)
        {
            newData.categories[newData.categorieToEdit.index] = categorieData;
            newData.categorieToEdit = undefined;
        }
        else 
        {
            newData.categories = [...data.categories, categorieData];
        }
        newData.displayAdd = 0;
        setData(newData);
        updateCookie(newData.categories);
    }

    const editCategories = index => {
        let newData = {...data};
        if (newData.categories[index] !== undefined)
        {
            newData.categorieToEdit = newData.categories[index];
            newData.categorieToEdit.index = index;
            newData.displayAdd = 1;
            setData(newData);
            updateCookie(newData.categories);
        }
    }

    const deleteCategorie = index => {
        let newData = {...data};
        if (newData.categories[index] !== undefined)
        {
            newData.categories.splice(index, 1);
            setData(newData);
            updateCookie(newData.categories);
        }
    }

    const displayAddComponentPanel = () => {
        let newData = {...data};
        if(data.displayAdd !== 0)
        {
            newData.displayAdd = 0;
            newData.categorieToEdit = undefined;
            newData.noteToEdit = undefined;
        }
        else
            newData.displayAdd = 1;
        setData(newData);
    }

    const updateCookie = (categories) => {
        const one_day = 24*60*60*1000;
        let expires = new Date()
        expires.setTime(expires.getTime() + (one_day));
        setCookie('categories', categories, { path: '/',  expires})
    }

    return(
        <>
            <h1 id="App-title">A ReactJs Note App</h1>
            <main>
                <Routes>
                    <Route path="/" element={
                        <>
                        <h2>Categories:</h2>
                            {data.categories.map((value, key) => {
                                const {icon, title, description} = value;
                                return (<Categorie 
                                key={key} 
                                index={key} 
                                icon={icon} 
                                title={title} 
                                description={description}
                                deleteCategorie={deleteCategorie}
                                editCategories={editCategories}
                                />);
                            })}
                        </> 
                    } />
                    <Route/>
                    <Route path="/Category/:id" element={
                        <>
                            <CategoriePage 
                            updatePageIndex={updatePageIndex} 
                            category={data.categories[data.pageIndex]}
                            deleteNote={deleteNote}
                            editNote={editNote}
                            />
                        </>
                    } />
                    <Route/>
                </Routes>
            </main>
            <AddNoteButton 
                displayAddComponentPanel={displayAddComponentPanel}
            />
            <AddNote
                display={data.displayAdd} 
                addCategories={addCategories} 
                addNote={addNote}
                displayAddComponentPanel={displayAddComponentPanel}
                categorieToEdit={data.categorieToEdit}
                noteToEdit={data.noteToEdit}
            />
        </>
    )
}

export default App;