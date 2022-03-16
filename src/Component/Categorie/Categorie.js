import React from "react";
import "./Categorie.css";

import {Link} from "react-router-dom"

const Categorie = ({index, icon, title, description, deleteCategorie}) => {
    const removeCategorie = () => {
        deleteCategorie(index);
    }

    return(
        <fieldset className="Categorie">
            <legend><h3>{icon} {title}</h3></legend>
            <p>{description}</p>
            <Link to={`/Categorie/${index}`}>Voir les notes →</Link>
            <span title="Delete Categorie" onClick={removeCategorie}>🛇</span>
            <span title="Edit Categorie">✎</span>
        </fieldset>
    )
}

export default Categorie;