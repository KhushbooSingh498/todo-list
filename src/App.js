import React from "react";
import ReactDOM  from "react-dom/client";
import Date from "./components/Date";
import Form from "./components/Form";
import "./css/App.scss"

const AppLayout = () =>{
    return( <div className="app">
        <div className="container">
            <h1 className="title">My To-Do List</h1>

            <div className="main-wrapper">
                <Date />
                <Form />
            </div>
            
        </div>
    </div>);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);