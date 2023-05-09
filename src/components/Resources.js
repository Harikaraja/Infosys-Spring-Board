import React from "react";
import item1 from "../assets/images/item1.jpg";
import item2 from "../assets/images/item2.jpg";
import item3 from "../assets/images/item3.jpg";
import item4 from "../assets/images/item4.jpg";
import item5 from "../assets/images/item5.jpg";
import item6 from "../assets/images/item6.jpg";
import item7 from "../assets/images/item7.jpg";
import ps from "../assets/images/ps.jpg";
import pack from "../assets/images/packages.jpg";
import i1 from "../assets/images/packages.jpg";
const Resources =()=>{
    return(
       
       <>
        <center><h1>Our Resources</h1></center><br/>
        <img src={item1} alt="item1" width={100+'%'}/>

        <div className="matter" style={{padding:"80px"}}>
            <p>Our partners include over 500 leading companies across all segments of the healthcare industry. </p><br/>
            <p>Our dedicated Corporate Relations Team handles and manages our corporate clients to ensure 
                that all their medical needs are met. </p><br/>
            <p>We also engage with our clients through wellness and women’s health awareness initiatives, interactive talk 
                sessions, parenting programmes for future parents and new parents, and counselling services. </p><br/>
            <p>We work to ensure every woman`s health and well-being.</p>
        </div>
        
        <hr/>
        
        <center><h1>Key Benifits</h1></center>
        <div style={{display:"flex",flexDirection: "row",margin:'3rem'}}>
          <div className="box1" style={{margin:'2rem'}}>
            <img src={item2} alt="item2" style={{width:'100px'}}/>
            <p>Cashless Facility</p>
          </div>
          <div className="box2" style={{margin:'2rem'}}>
            <img src={item3} alt="item2" style={{width:'100px'}}/>
            <p>Employee Discounts</p>
          </div>
          <div className="box3" style={{margin:'2rem'}}>
            <img src={item4} alt="item2" style={{width:'100px'}}/>
            <p>Medication for women</p>
          </div>
          <div className="box4" style={{margin:'2rem'}}>
            <img src={item5} alt="item2" style={{width:'100px'}}/>
            <p>Value Added Services</p>
          </div>
          <div className="box5" style={{margin:'2rem'}}>
            <img src={item6} alt="item2" style={{width:'100px'}}/>
            <p>Nutrition Councelling</p>
          </div>
          <div className="box6" style={{margin:'2rem'}}>
            <img src={item7} alt="item2" style={{width:'100px'}}/>
            <p>Health Insurance</p>
          </div>
        </div>
       
        <br/><br/>
        <hr/>
        
       
       
        <center><h1>Patients Speak</h1></center>
        <br/>
        
        <img src={ps} alt="item1" width={100+'%'}/>
        <br/>
        <div style={{display:'flex',margin:'7rem',gap:'43rem'}}>
        <select name="cars" id="cars" style={{width:'250px',height:'40px',padding:'4px'}}>
            <option >Search By Unit</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
        </select>
        <select name="cars" id="cars" style={{width:'250px',height:'40px',padding:'4px'}}>
            <option >Search By Department</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
            <option >Indore</option>
        </select>
        </div>
        <hr/>
        
       
       
        <center><h1>Packages</h1></center>
        <br/>
        
        <img src={pack} alt="item1" width={100+'%'}/>
        <br/>

        <div className="matter" style={{padding:"80px"}}>
            <p>Best Maternity packages we offer you and your little one!</p><br/>
            <p>We care for you and your baby. Considering the finest care as our aim,  we have handpicked 
                services that we would like to introduce to you. </p><br/>
            <p>Awards: Received the CII Customer Session Award for Customer Centricity 2021 along with a FICCI Healthcare Excellence award for patient 
                safety and other awards for one of the best services in town. </p><br/>
            <p>We work to ensure every woman`s health and well-being.</p>
        </div>
        
        
        <section style={{display:'flex',padding:'0rem 4rem',background:'orange',gap:'20rem'}}>
            <h1>Empanelled Insurance Companies</h1>
            <h1>Empanelled TPA</h1>
        </section>
        <div style={{display:'flex',flexDirection:'row',padding:'3rem',gap:'25rem'}}>
           <div className="box1">
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
           </div>
           <div className="box2">
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
            <p>✦ Universal Sompo Insurance Chola Mandalam</p>
           </div>
        </div>
        <section style={styles.section}>
            <center><h1>Contact Information</h1></center>
            <div style={{width:'70rem',height:'250px',background:'blue',margin:'2rem 11rem',borderRadius:'2rem'}}>
            <ul style={styles.ul}>
                <li style={styles.li}>Location of the Main Branch : Lorem haurijn shdieje unsjdiid</li>
                <li style={styles.li}>Phone: +91 7894561230</li>
                <li style={styles.li}>Email: hospital@gmail.com</li>
                <li style={styles.li}>Website: Hospital.com</li>
            </ul>
            </div>
            
        </section>
      </>
    );
}

export default Resources;

const styles = {
   
    h1: {
        color: '#333'
    },
    section: {
        marginBottom: '40px',
        
    },
    
    ul: {
       padding:'5rem 10rem',
       color:'white',
       listStyleType: 'none',
       fontSize:'1.1rem'
    }
    ,
    li: {
        marginBottom: '10px'
    },
    
    span: {
        fontWeight:'bold'
    },
    
    
  };
  