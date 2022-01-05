import React from "react";
import './footer.css'
import { FaBars,FaFacebook,FaInstagram,FaTwitter,FaSignOutAlt } from 'react-icons/fa'
const Footer=()=>
{ 
    return (
    <div className='foot'>
    <div className='socila'>
        <a>Social Media</a>
        <ul>
            <li style={{"font-size":"25px"}}><FaFacebook></FaFacebook></li>
            <li style={{"font-size":"25px"}}><FaInstagram></FaInstagram></li>
            <li style={{"font-size":"25px"}}><FaTwitter></FaTwitter></li>
           
        </ul>
    </div>
    <div className='comapany'>
        <a>Comapany</a>
        <ul>
            <li>Abouts Us</li>
            <li>FAQs</li>
            <li>Carrer</li>
        </ul>

    </div>
    <div className='visit'>
          <a>Visit</a>
        <ul>
            <li>evoteoffical@gmail.com</li>
            <li>789990894</li>
            <li>Bachupally,Hyderabad</li>
        </ul>

    </div>
 </div>
    )
}
export default Footer;