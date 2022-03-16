import React, {useState} from 'react';
import "./App.css";
import {Routes, Route} from "react-router-dom"

import AddNoteButton from "../AddNoteButton/AddNoteButton"
import Categorie from '../Categorie/Categorie';
import CategoriePage from '../CategoriePage/CategoriePage';
import AddNote from '../AddNote/AddNote';

const App = () => {
    const displayNone = "displayPanelNone";

    const [data, setData] = useState({
        displayAdd: displayNone, 
        categories: []
    });

    const addCategories = categorieData => {
        let newData = {...data};
        newData.categories = [...data.categories, categorieData];
        setData(newData);
        console.log(newData);
    }

    const deleteCategorie = index => {
        let newData = {...data};
        if (newData.categories[index] !== undefined)
            newData.categories.splice(index, 1);
        setData(newData);
    }

    const displayAddComponentPanel = () => {
        let newDisplay = "";
        if(data.displayAdd !== displayNone)
            newDisplay = displayNone;

        const newData = {...data};
        newData.displayAdd = newDisplay;
        setData(newData);
    }

    return(
        <>
            <h1 id="App-title">A ReactJs Note App</h1>
            <h2>Categories:</h2>
            <main>
                <Routes>
                    <Route path="/" element={
                        data.categories.map((value, key) => {
                            const {icon, title, description} = value;
                            return (<Categorie 
                            key={key} 
                            index={key} 
                            icon={icon} 
                            title={title} 
                            description={description}
                            deleteCategorie={deleteCategorie}
                            />);
                        }) 
                    } />
                    <Route/>
                </Routes>
            </main>
            <AddNoteButton displayAddComponentPanel={displayAddComponentPanel}/>
            <AddNote 
                display={data.displayAdd} 
                addCategories={addCategories} 
                displayAddComponentPanel={displayAddComponentPanel}
            />
        </>
    )
}

export default App;