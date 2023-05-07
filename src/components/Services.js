import React from "react";
import Card from './Card.js'
import Data from './Data.js';

const Services =()=>{
    const Elements = Data.map((elem)=>{
        
         return <Card img={elem.img} name={elem.name} matter={elem.matter} 
                 tele={elem.tele} maps={elem.maps} mails={elem.mails} />
    })
    return(
       
       <>
       <center><h1>Branch Details</h1></center>   
       <div className="storage">
           
           {Elements}
        </div>
       </>
    );
}

export default Services;