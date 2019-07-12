import React from 'react';
import Proptypes from "prop-types";


 function Navbar(props) {
    return (
        <div>
           <h3>{props.title}</h3> 
           <hr/>
        </div>
    )
}
Navbar.propTypes = {
    title : Proptypes.string.isRequired
}
Navbar.defaultProps= {
    title: "Default App"
}

export default Navbar