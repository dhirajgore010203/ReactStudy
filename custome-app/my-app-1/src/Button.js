import React from "react";

const Button = ({title="No name"}) => {
    return(
        <div>
            <button className="button">{title}</button>
        </div>
    );
};

export default Button;