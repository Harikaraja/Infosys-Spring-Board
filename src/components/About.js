import React from "react";
import display from '../assets/images/about.jpg';
import about from "../assets/images/aboutus.jpg";
import aw1 from "../assets/images/aw1.jpg";
import aw2 from "../assets/images/aw2.jpg";
import aw3 from "../assets/images/aw3.jpg";
import aw4 from "../assets/images/aw4.jpg";
import aw5 from "../assets/images/aw5.jpg";
import re1 from "../assets/images/re1.jpg";

const About =()=>{
    return(
       
            <div>
                <br/>
                <img src={about} alt="item1" width={100+'%'}/><br/>
                <center><h1>About Motherhood Hospitals</h1></center>
                <div className="About" id="base" data-aos="fade-up">

                    <div id="txt_img">
                    <img src={display} alt="photo" width={300} height={400} id="img_tag"/>
                    
                            <p id="text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula, nulla ut tempor imperdiet, sapien eros suscipit ipsum, eget porttitor dui enim quis dui. 
                            Nullam maximus lacinia mi ut ornare. Vestibulum vestibulum nec purus nec finibus. Vestibulum ullamcorper massa libero, quis varius sem aliquet id. Cras eros tortor, egestas 
                            quis nisl sollicitudin, semper pulvinar tellus. Maecenas consequat metus in libero pellentesque egestas. In et nisl viverra, finibus eros sed, volutpat felis. Donec feugiat viverra orci,
                            eget tempor diam ultricies at. Donec finibus tortor ipsum.
                            Etiam consequat ante sit amet augue pellentesque, in placerat velit dapibus. 
                            Morbi consequat accumsan arcu sit amet placerat. Sed dapibus orci eu cursus laoreet. Donec eget eros eu lacus tincidunt varius quis non felis. 
                            Fusce dui metus, blandit in tortor vel, bibendum pulvinar mi. Nullam rhoncus lacinia magna, ac sollicitudin lacus consequat in. Nunc ut nunc tempus, tempor diam eget, 
                            semper metus. Duis quis congue eros. Nam vulputate interdum orci, ut iaculis dolor scelerisque id. Nullam hendrerit purus dui, sed suscipit leo gravida at. Duis sed eros metus. Suspendisse suscipit id justo in volutpat. Duis fringilla ex vel est finibus ornare. Donec vel risus tincidunt, ullamcorper arcu ut, dapibus quam. Phasellus erat lacus, 
                            hendrerit et eleifend non, dapibus quis mauris. In blandit orci sit amet ante placerat, vel accumsan ligula efficitur. 
                            </p>
                        
                    </div>
                </div>
                <br/>
                <div style={{display:"flex",flexDirection: "row",width:"100%",height:"15rem",padding:"3rem 7rem",gap:"2rem"}}>
                  <div className="box1">
                    <h2 style={{color:"rgb(207,42,186)"}}>Our Vision</h2>
                    <p>
                    Deliver an exceptional healthcare experience to women, children and their 
                    families, steered by the highest standard of competence, care and service excellence.
                    </p>
                  </div>
                  <div className="box1">
                    <h2 style={{color:"rgb(207,42,186)"}}>Our Mission</h2>
                    <p>
                    Deliver an exceptional healthcare experience to women, children and their 
                    families, steered by the highest standard of competence, care and service excellence.
                    </p>
                  </div>
                  <div className="box1">
                    <h2 style={{color:"rgb(207,42,186)"}}>Our Values</h2>
                    <p>
                    Deliver an exceptional healthcare experience to women, children and their 
                    families, steered by the highest standard of competence, care and service excellence.
                    </p>
                  </div>
                </div>
                <center><h1>Why Motherhood</h1></center>
                <div className="matter" style={{padding:"30px 80px"}}>
                At Motherhood Hospitals, we have a legacy of over a decade in delivering excellence in the women and children`s space. 
                Not only are our infrastructure and facilities world-class, but our expert specialists also have over half a century of experience in treating mothers and their children. Whether it’s obstetrics, gynaecology, neonatology, or paediatrics, we have all
                 your needs covered. Now spread over 6 states across the country, find the nearest centre to you now.
                </div><br/><br/>
                <center><h1>Awards And Recognition</h1></center>
                <div className="matter" style={{padding:"20px 80px"}}>
                At Motherhood Hospitals, we have a legacy of over a decade in delivering excellence in the women and children`s space. 
                Not only are our infrastructure and facilities world-class, but our expert specialists also have over half a century of experience in treating mothers and their children. Whether it’s obstetrics, gynaecology, neonatology, or paediatrics, we have all
                 your needs covered. Now spread over 6 states across the country, find the nearest centre to you now.
                </div>
                <div style={{display:"flex",flexDirection: "row",margin:'3rem'}}>
                    <div className="box1" style={{margin:'2rem'}}>
                        <img src={aw1} alt="item2" style={{width:'100px'}}/>
                        <p>Cashless Facility</p>
                    </div>
                    <div className="box2" style={{margin:'2rem'}}>
                        <img src={aw2} alt="item2" style={{width:'100px'}}/>
                        <p>Employee Discounts</p>
                    </div>
                    <div className="box3" style={{margin:'2rem'}}>
                        <img src={aw3} alt="item2" style={{width:'100px'}}/>
                        <p>Medication for women</p>
                    </div>
                    <div className="box4" style={{margin:'2rem'}}>
                        <img src={aw4} alt="item2" style={{width:'100px'}}/>
                        <p>Value Added Services</p>
                    </div>
                    <div className="box4" style={{margin:'2rem'}}>
                        <img src={aw5} alt="item2" style={{width:'100px'}}/>
                        <p>Value Added Services</p>
                    </div>
                    <div className="box3" style={{margin:'2rem'}}>
                        <img src={aw3} alt="item2" style={{width:'100px'}}/>
                        <p>Medication for women</p>
                    </div>
                </div>
                 <br/>
                 <img src={re1} alt="photo" width={100+'%'} />

                 
            </div>
    );
}

export default About;