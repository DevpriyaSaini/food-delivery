import React from 'react'
import'./Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer' id='Footer'>
        <div className="footer-content">
            <div className="foot-cont-left">
             <img src="https://imgs.search.brave.com/yDwMAT0FtudXz8MnHgdnB-pldG4xjZrQkMryQbVV9QM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MTEvWm9tYXRvLUxv/Z28tNzAweDM5NC5w/bmc" alt="" className="logo" /> 
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis eveniet repudiandae ratione sed odio magni incidunt dolor, minima repellendus nemo animi dolorem reiciendis ipsa commodi possimus nam voluptas reprehenderit.</p> 
             <div className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
             </div>
          
            </div>
            <div className="foot-cont-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="foot-cont-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>love@dev.com</li>
                </ul>

            </div>
            
        </div>
        <hr />
        <p className='copy-right'>Copyright 2025 ©. All rights reserved </p>
    </div>
  )
}

export default Footer