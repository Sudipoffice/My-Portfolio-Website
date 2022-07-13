import React from "react";
import "./About.css";


function About(){
    return(
        <div className="about-primary" id="about">
        <h1>About</h1>
       <div className="about-info">
        <div className="introduction">
        <div className="card">
                       
                            <div className="card-image">
                                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEyczQmymS53Q/profile-displayphoto-shrink_200_200/0/1643884585056?e=1659571200&v=beta&t=TwOGudmiQcbvTWy-a0Ub38cPqrIvUcAlsEJvYxZ1I1A" alt="" />
                            </div>
                            

                        <div className="card-content">
                            <h2 className="name">Sudip Mandal</h2>
                            <p className="description">An aspiring Software Engineer with excellent problem solving and web development skills with the ability to perform well in a team.</p>
                        </div>
                    </div>
        </div> 
        </div>

        </div>
    );
}

export default About;