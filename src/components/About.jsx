import React, { useContext } from 'react'
import {TrainerContext} from '../context/TrainerContext';

const About = () => {
    const value  = useContext(TrainerContext);
    console.log("From the about.jsx",value);
    return (
        <section className="about">
            <h1>About</h1>    {/* text center and heading section*/}
            <hr/>
            
        </section> 
    )
}

export default About
