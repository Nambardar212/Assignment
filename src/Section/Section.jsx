import React from 'react';
import "./Section.css";
import sectionfirst from "../Images/sectionfrist.jpg";
import sideimage from "../Images/sideimage.jpg";
import Inside from '../Inside/Inside';

const Section = () => {
    return (
        <>
            <section className='sectionFrist'>
                <img src={sectionfirst} alt="logo" />
            </section>
            <section>
                <div className="section2font">
                    <div className="who-are">
                        <b>WHO WE ARE</b>
                        <p className="sectionpra">Rubixe™ is a global technology company specializing in
                            disruptive technologies – Artificial Intelligence (AI), Machine Learning,
                            Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT).
                        </p>
                        <p className="sectionpra">Rubixe mission to enable businesses to leverage the
                            full potential of disruptive technologies to stay competitive in the market.
                        </p>
                    </div>
                    <div>
                        <img className="imagewho" src={sideimage} alt="side" />
                    </div>
                </div>
            </section>
            <Inside />
        </>
    );
}

export default Section;