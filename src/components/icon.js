import React from "react";

import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa';


const Icon = ({icName}) => {      //we are destructuring values here instead of props.name etc.
    // return(
    //     <h1>
    //         <FaTimes className="icon" />
    //         <FaRegCircle className="icon" />
    //         <FaPen className="icon" />
    //     </h1>
    // )

    //lets design for name of icon that is provided in fn parameter
    switch (icName) {
        case "cross":
            return <FaTimes className="icon" />
        case "circle":
            return <FaRegCircle className="icon" />
        default:
            return <FaPen className="icon" />
    }
};

export default Icon;