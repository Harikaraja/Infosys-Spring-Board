import React from "react";
import "../assets/Home.css";

const Footer =()=>{
   
    return(
        <>
         <div class="footer">
                <div class="footer-parts">
                    <div class="footer-parts-h4">Get In Touch</div>
                    <ul>
                        <li><a href="#"><i class="fa fa-phone"></i>&nbsp; +91-9963XXXX68</a></li>
                        <li><a href="mailto:info@freetimelearning.com"><i class="fa fa-envelope"></i>&nbsp; info@freetimelearning.com</a></li>
                    </ul>
                </div>
                <div class="footer-parts">
                    <div class="footer-parts-h4">Extra Links</div>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                    </ul>
                </div>
                <div class="footer-parts">
                    <div class="footer-parts-h4">Extra Links</div>
                    <ul>
                        <li><a href="#">Appointments</a></li>
                        <li><a href="#">Find a Doctor</a></li>
                        <li><a href="#">Insurance</a></li>
                    </ul>
                </div>
                <div class="footer-parts">
                   
                    <div style={{paddingLeft:'20px', fontSize:'22px'}}>
                    <div class="footer-parts-h4">Extra Links</div>
                    <ul>
                        <li><a href="#">Appointments</a></li>
                        <li><a href="#">Find a Doctor</a></li>
                        <li><a href="#">Insurance</a></li>
                        <li><a href="#">Appointments</a></li>
                        <li><a href="#">Find a Doctor</a></li>
                        <li><a href="#">Insurance</a></li>
                    </ul>
                    </div>
                </div>
                <div class="clearfix"></div>
                    <div class="copyrights">
                        <div class="copyrights-left">
                        &copy; 2023. All rights reserved by <a href="http://www.freetimelearning.com" target="_blank">Hospitals</a>.
                        </div>
                        <div class="copyrights-right">
                            Designed by <a href="http://www.freetimelearning.com" target="_blank">F T L</a>
                        </div>
                    </div>
               </div>
        </>
    );
}

export default Footer;