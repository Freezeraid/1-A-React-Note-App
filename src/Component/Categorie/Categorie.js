import React from "react";
import "./Categorie.css";

import {Link} from "react-router-dom"

const Categorie = ({index, icon, title, description, deleteCategorie, editCategories}) => {
    const removeCategorie = () => {
        deleteCategorie(index);
    }

    const changeCategorie = () => {
        editCategories(index);
    }

    return(
        <fieldset className="Categorie">
            <legend><h3>{icon} {title}</h3></legend>
            <p>{description}</p>
            <Link to={`/Category/${index}`} state={{ title:`${icon} ${title}` }}>Voir les notes →</Link>
            <span title="Delete Category" onClick={removeCategorie}>🛇</span>
            <span title="Edit Category" onClick={changeCategorie}>✎</span>
        </fieldset>
    )
}

export default Categorie;