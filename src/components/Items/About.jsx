import React from "react";


function About(){
    return(
        <div className="about-primary" id="about">
        <h1>About</h1>
       <div className="about-info">
        <div class="introduction">
        <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEyczQmymS53Q/profile-displayphoto-shrink_200_200/0/1643884585056?e=1659571200&v=beta&t=TwOGudmiQcbvTWy-a0Ub38cPqrIvUcAlsEJvYxZ1I1A" alt="" class="card-img"/>
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">Sudip Mandal</h2>
                            <p class="description">An aspiring Software Engineer with excellent problem solving and web development skills with the ability to perform well in a team.</p>
                        </div>
                    </div>
        </div> 
        </div>

        </div>
    );
}

export default About;