import React, { Component } from 'react';

class Header extends Component {

    onMenuClick = (event) => {
        const listPlaces = document.getElementById("list");
        const map_container = document.getElementById("map_container");
        listPlaces.classList.toggle("hide");
        map_container.classList.toggle("full-width");
    }


    render(){
        return(
            <header className="App-header">  
                <a id="menu" className="header__menu" onClick = {(event)=>this.onMenuClick(event)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
                    </svg>
                </a>
                <h1 className="App-title">Find your Gym</h1>
            </header>
        )
    }
}

export default Header;