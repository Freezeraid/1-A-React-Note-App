import React from 'react';
import "./App.css";

import Note from '../Note/Note';
import AddNote from '../AddNote/AddNote'

const App = () => {

    return(
        <>
            <h1 id="App-title">A ReactJs Note App</h1>
            <main>
                <Note/>
                <AddNote/>
            </main>
        </>
    )
}

export default App;