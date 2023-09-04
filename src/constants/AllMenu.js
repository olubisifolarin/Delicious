import React from "react";

const Menu= ({name, text}) => {
    return(
        <div className="allMenu">
            <h6 className="menuMeal">{name}</h6>
            <p className="menuText">{text}</p>
        </div>
    )
}

export default Menu