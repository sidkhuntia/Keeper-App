import React from "react";

function Footer(){
    //create a date object
    let date = new Date();
    //get the year
    let year = date.getFullYear();
    //return the footer
    return(
        <footer>
            <p className="footer">Copyright &copy; {year}</p>  
        </footer>
    );  //end return
}  //end Footer

    


export default Footer