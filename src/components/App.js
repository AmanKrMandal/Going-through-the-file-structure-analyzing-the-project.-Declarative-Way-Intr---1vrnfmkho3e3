import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
             <Name/>
            <Project/>
    </div>
  )
}

let Name =()=>{
    return(
        <h1 data-ns-test="project-name">E-Commerce </h1>

    );
}
let Project =()=>{
    return(
        <div>
        <p data-ns-test="project-description" >loremdnfhsduyfgvduyh jdfhgvbyu</p>
        </div>
  


    );
}


export default App;
