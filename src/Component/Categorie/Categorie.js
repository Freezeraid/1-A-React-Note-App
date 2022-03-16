import React from "react";
import "./Categorie.css";

import {Link} from "react-router-dom"

const Categorie = ({index, icon, title, description}) => {
    return(
        <fieldset className="Categorie">
            <legend><h3>{icon} {title}</h3></legend>
            <p>{description}</p>
            <Link to={`/Categorie/${index}`}>Voir les notes →</Link>
        </fieldset>
    )
}

export default Categorie;