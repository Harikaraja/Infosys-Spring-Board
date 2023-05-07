import React from "react";

const Card = (props)=>{

    return(
        <>
        <div class="card">
                <img src={props.img} alt="Avatar" className="sorce" width={365+'px'} height={200+'px'}/>
                    <div class="container">
                        <center><h2><b>{props.name}</b></h2></center>
                        <p className="desc">{props.matter}</p>
                    </div>
                    
                
                <div className="hosp-contact-info">
                    <div className="mail">
                        <a href="tel:9390132059">
                            <img src={props.tele} alt="tele" width={30+'px'} height={30+'px'}/>
                        </a>
                    </div>  
                    <div className="mail">
                        <a href="https://www.google.co.in/maps/place/Apollo+Hospital/@23.1095502,72.6263885,17z/data=!3m1!4b1!4m6!3m5!1s0x395e81d8dddba2cb:0xa74a50295d3eecb2!8m2!
                                  3d23.1095502!4d72.6263885!16s%2Fg%2F1td5k2c4" target="blank">
                            <img src={props.maps} alt="maps" width={60+'px'} height={55+'px'}/>
                        </a>
                    </div>  
                    <div className="tele">
                      <a href="mailto:info@apolloahd.com">
                        <img src={props.mails} alt="mail" width={50+'px'} height={50+'px'} target="blank"/>
                      </a>
                    </div>
                </div>
                <br/>
                <button>Read more</button>
            </div>
        
        </>
    )
}

export default Card;