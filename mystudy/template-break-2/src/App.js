import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Feature from "./Feature";
import GetInTouch from "./GetInTouch";

const App = () =>{
    return(
        <div>
            <h2>Template Breaking</h2>
            <NavBar></NavBar>
            <Jumbotron/>
            <GetInTouch/>
            <Feature/>
            <Footer/>
        </div>
    );
};

export default App;