import React from "react"
import Nav from "./Nav"
import Body from "./Body";
import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min"; 

const Main = ()=>{
    return(
        <div>
        <Nav/>
        <Body/>
        </div>
    )
}
export default Main