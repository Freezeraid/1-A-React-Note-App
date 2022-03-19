import React, {useState} from 'react';
import "./App.css";
import {Routes, Route, useParams} from "react-router-dom"

import AddNoteButton from "../AddNoteButton/AddNoteButton"
import Categorie from '../Categorie/Categorie';
import CategoriePage from '../CategoriePage/CategoriePage';
import AddNote from '../AddNote/AddNote';

const App = () => {
    const [data, setData] = useState({
        displayAdd: 0, 
        categorieToEdit: undefined,
        categories: []
    });

    const addCategories = categorieData => {
        let newData = {...data};
        newData.categories = [...data.categories, categorieData];
        newData.categorieToEdit = undefined;
        setData(newData);
    }

    const editCategories = index => {
        let newData = {...data};
        if (newData.categories[index] !== undefined)
        {
            newData.categorieToEdit = newData.categories[index];
            newData.displayAdd = 1;
            setData(newData);
        }
    }

    const deleteCategorie = index => {
        let newData = {...data};
        if (newData.categories[index] !== undefined)
        {
            newData.categories.splice(index, 1);
            setData(newData);
        }
    }

    const displayAddComponentPanel = () => {
        let newData = {...data};
        if(data.displayAdd !== 0)
        {
            newData.displayAdd = 0;
            newData.categorieToEdit = undefined;
        }
        else
            newData.displayAdd = 1;
        setData(newData);
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
                            <CategoriePage/>
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
                displayAddComponentPanel={displayAddComponentPanel}
                categorieToEdit={data.categorieToEdit}
            />
        </>
    )
}

export default App;