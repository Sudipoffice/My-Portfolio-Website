import React from "react";
import Navbar from "../Navbar";
import "./Home.css";



function Home(){
    return(
        <div className="home-primary" id="home">
        {/* <img src="https://images.pexels.com/photos/985266/pexels-photo-985266.jpeg" style="width:100%"/> */}
        <Navbar />
       <div className="home-info">
        <h1>Sudip Mandal</h1>
        <p> Web Developor</p>
       </div>
       <div className="home-icon">
       <a href="https://twitter.com/SUDIP__6013" target="_blank"><i className="fa-brands fa-twitter-square" ></i> </a>
       <a href="https://www.linkedin.com/in/sudipmandal/" target="_blank"><i className="fa-brands fa-linkedin"></i> </a>
       <a href="https://github.com/Sudipoffice" target="_blank"><i className="fa-brands fa-github-square"></i></a>
       </div>
       </div>

    );
}

export default Home;