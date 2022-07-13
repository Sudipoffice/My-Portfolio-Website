import React from "react";
import "./Contact.css";

function Contact(){
    return(
        <div className="about-primary" id="contact">
        <h1>Contact Us</h1>
        <div className="contact-icon">
       <a href="https://twitter.com/SUDIP__6013" target="_blank"><i className="fa-brands fa-twitter-square" ></i> </a>
       <a href="https://www.linkedin.com/in/sudipmandal/" target="_blank"><i className="fa-brands fa-linkedin"></i> </a>
       <a href="https://github.com/Sudipoffice" target="_blank"><i className="fa-brands fa-github-square"></i></a>
       </div>
       <div className="copyright"><p>Copyright 2022</p></div>
        </div>

        
    );
}

export default Contact;