import React from "react";
// import blogData from "../data/blog"

function Header(props){ 
    console.log(props)
    return (

        <header>
        <h1> {props.name}</h1>
        </header>
    ); 
}

export default Header;