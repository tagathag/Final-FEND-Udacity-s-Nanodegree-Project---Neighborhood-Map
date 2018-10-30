import React, { Component } from 'react';
import PropTypes from "prop-types";

class Sidemenu extends Component {

    static propTypes = {
        query: PropTypes.string.isRequired,
        updateQuery: PropTypes.func.isRequired,
        shownGyms: PropTypes.array.isRequired,
    }

    render(){
        const { query, updateQuery, shownGyms, showGymInfo } = this.props

        return(
            <aside className="Sidebar" id="Sidebar">
                <section className="Search-field">
                    <input
                        className="Search-field-input"
                        type="text"
                        placeholder="Filter gyms"
                        value={query}
                        onChange={(event)=>updateQuery(event.target.value)}
                    />
                </section>
                <section className="list" id="list">
                    <ol aria-label="List of locations">
                        {shownGyms.map((shownGym)=>
                            <li
                                key={shownGym.venue.id}
                                className="list-item"
                                onClick={()=>{showGymInfo(shownGym.venue, true)}}
                                >
                                    <button className="list-button" aria-label="button to open infowindow">{shownGym.venue.name}</button>
                               
                                
                            </li> 
                        )}   
                    </ol>
                </section>
            </aside>            
        )
    }
}


export default Sidemenu