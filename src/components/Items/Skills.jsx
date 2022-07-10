import React from "react";
import SkillsItems from "../../SkillsItems";


function Skills(){
    return(
        <div className="skills-primary" id="skills">
            <h1>Skills</h1>
            <ul className="skills-info">
            {SkillsItems.map((item, index) => {
                        return (
                            <li key={index} className={item.skill}>
                            <img src={item.src}/>
                            <br/>
                                <a>
                                {item.skill}
                                </a>
                            </li>
                        )
                    })}
            </ul>
        </div>
    );
}

export default Skills;