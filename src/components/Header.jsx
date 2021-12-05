import React from "react";
import EventNoteIcon from '@material-ui/icons/EventNote';
function Header(){
 //retrurn header   
    return (
        <header>
            {/* <EventNoteIcon /> */}
            <h1> <span className="logo-icon"><EventNoteIcon /></span>  Keeper</h1>
        </header>
    );

}

export default Header