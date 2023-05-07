import React from "react";
import imaging from "../assets/images/services.jpg";
const Branches = ()=>{

    return(

        <>
        <div className="body-text"><h1 id="sec_head"> <center>Our Services and Specializations</center></h1></div>
            <div className="prim">
                <br/>
                <center>
                    <img src={imaging} alt="services" id="serv" width={1300+'px'} height={400+'px'}/>
                </center>   
                <br/>
                <p className="para">At motherhood Hospitals, We have legacy of over a decade in delivering excellence in the women and 
                    children space. Not only are our infrastructure and facilities worldclass, our specialists have a lot 
                    more years of experience in treating mothers and their Children with care. Neonatology, Gynaecology or paediatrics, 
                    or whatever it may be, we have all your needs covered. Now find the nearest centre to you and get checked up. 
                </p>
                <br/>
                <h2 id="sec_head"><center>Voice Of Customer Process</center></h2>
                <div className="cust">   
                    <ul>
                        <li>A robust feedback mechanism that has all the listening and learning ports available to capture Patient feedback from all touch points</li>
                        <li>A robust feedback mechanism that has all the listening and learning ports available to capture Patient feedback from all touch points</li>
                        <li>A robust feedback mechanism that has all the listening and learning ports available to capture Patient feedback from all touch points</li>
                        <li>A robust feedback mechanism that has all the listening and learning ports available to capture Patient feedback from all touch points</li>
                        <li>A robust feedback mechanism that has all the listening and learning ports available to capture Patient feedback from all touch points</li>
                        <li>A robust feedback mechanism that has all the listening and learning ports available to capture Patient feedback from all touch points</li>
                    </ul>
                    <br/> 
                </div>
                <h2 id="sec_head"><center>Tender Loving Care</center></h2>
                <div className="cust">  
                    <ul>
                        <li>Has been our guiding motto of the organization from inception.</li>
                        <li>Has been our guiding motto of the organization from inception.</li>
                        <li>Has been our guiding motto of the organization from inception.</li>
                        <li>Has been our guiding motto of the organization from inception.</li>
                        <li>Has been our guiding motto of the organization from inception.</li>
                        <li>Has been our guiding motto of the organization from inception.</li>
                    </ul>
                </div>
            </div>
            <h2 id="sec_head"><center>-- Our Specialties  -- </center> </h2>
            <br/>
            
            <div class="list-container">
            <ul class="list">
                <li>Paediatrics</li>
                <li>Fertility</li>
                <li>Gynaecology</li>
                <li>Neonatology</li>
                <li>Feotal Medicine</li>
                <li>Physiotherapy</li>
                <li>Radiology</li>
                <li>Cosmetology</li>
                <li>Internal Medicine</li>
                <li>General Surgery</li>
                <li>Nutrition</li>
            </ul>
            </div>
            <br/>
           
        </>

    );

}

export default Branches;