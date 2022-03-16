import React, {useState} from 'react';
import "./App.css";
import {Routes, Route} from "react-router-dom"

import AddNoteButton from "../AddNoteButton/AddNoteButton"
import Categorie from '../Categorie/Categorie';
import CategoriePage from '../CategoriePage/CategoriePage';
import AddNote from '../AddNote/AddNote';

const App = () => {

    const [data, setData] = useState([]);

    const updateCategories = categorieData => {
        setData([...data, categorieData]);
    }

    return(
        <>
            <h1 id="App-title">A ReactJs Note App</h1>
            <h2>Categories:</h2>
            <main>
                <Routes>
                    <Route path="/" element={
                        data.map((value, key) => {
                            const {icon, title, description} = value;
                            return <Categorie key={key} index={key} icon={icon} title={title} description={description}/>;
                        }) 
                    } />
                    <Route/>
                </Routes>
            </main>
            <AddNoteButton/>
            <AddNote updateCategories={updateCategories}/>
        </>
    )
}

export default App;