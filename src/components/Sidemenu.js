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
            <aside className="Sidebar">
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
                    <ol>
                        {shownGyms.map((shownGym)=>
                           <li
                                key={shownGym.venue.id}
                                className="list-item"
                                onClick={()=>{showGymInfo(shownGym.venue.id, true)}}>
                                    {shownGym.venue.name}
                            </li> 
                        )}   
                    </ol>
                </section>
            </aside>            
        )
    }
}


export default Sidemenu