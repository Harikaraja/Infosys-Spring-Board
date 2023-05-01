import React from "react";
import display from '../assets/images/about.jpg';

const About =()=>{
    return(
       
       <>
        
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
     </>
    );
}

export default About;