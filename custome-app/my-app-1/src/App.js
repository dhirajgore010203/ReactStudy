import React from "react";
import Button from "./Button";
import "./style.css";


// creating App component
const App= () =>{
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Hello Word!!</h1>
             <Button title="Play Game"></Button> 
             <Button title="Reload Game"></Button>
             <Button></Button> 
        </div>
    );
};

export default App;