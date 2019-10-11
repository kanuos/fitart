import React, { useContext } from 'react'
import {TrainerContext} from '../context/TrainerContext';

const AboutHome = () => {
    const value  = useContext(TrainerContext);
    console.log("From the about.jsx",value);
    return (
        <section className="about">
            <h1>who are we</h1>    {/* text center and heading section*/}
            <hr/>
            <p>whats good and bs 70% diet and 30% exerise nutrition</p>    {/* block of text */}
            <ul>
                <li>choleserol</li>
                <li>healthy heart</li>
                <li>arthritis and joint pain</li>
                <li>obesity and weight loss</li>
            </ul>
            <p>block of text</p>
            <em>featured trainer</em>
            <small>check out our trainers barrage.. link to about us</small>
            <ul>
                <li>review 1</li>
                <li>review 2</li>
                <strong>read more ... link to fitarmy</strong>
            </ul>
            <p>read more about our packages <strong>link to pricing</strong></p>
            <p>mini contact and newsletter</p>
        </section> 
    )
}

export default AboutHome
