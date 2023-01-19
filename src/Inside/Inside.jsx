import React from 'react';
import "./Inside.css";
import sectionsecond from "../Images/secondsection.jpg";

const Inside = () => {
    return (
        <><div className="where">
            <h3>WHERE WE STARTED</h3>
            <p>We started in 2015. With a passionate team who want to
                bring game-changing solutions through disrupting
                technologies. We expertise in delivering
                enterprise-level solutions in the field of
                Artificial Intelligence(AI), Cyber Security,
                Robotic Process Automation (RPA), Internet of Things
                (IoT), and BlockChain technology.
            </p>
        </div>
            <div>
                <img src={sectionsecond} alt="second" className="sectionsecondimage" />
            </div>
        </>
    );
}

export default Inside;