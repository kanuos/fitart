import React from 'react'
// import {TrainerContext} from '../context/TrainerContext';

import {GiMuscleUp,GiKnifeFork, GiHeartBeats, GiRobe} from 'react-icons/gi';

const AboutHome = () => {
    // const value  = React.useContext(TrainerContext);
    return (
        <section className="about-home">
            <h1 className="about-home__heading">who are we</h1> 
            <p className="about-home__block">
                <span className="lead">We</span>, at Fit-Art are <strong>the most effective lifestyle studio</strong> in the country.We, at FitArt, believe in living healthy and happy. Our focus is to help you guide you to a better life style. We focus on nutrition, cross-fit exercise, endurance training, increasing positivity in life and much more.  Our trainers are there to help you whenever you need. They will guide you, mentor you, motivate you and help you become the best YOU. 
            </p>
            <h1 className="about-home__heading about-home__heading--sub">
                Our Goal
            </h1>
            <p className="about-home__block">
                 We, at FitArt, promise you to help you become healthy, fit, energetic, mentally healthy and calm. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente consectetur cum esse quidem recusandae deleniti vero nobis rem aliquid reprehenderit, dolorem provident unde, quibusdam nostrum laborum facilis eaque repellendus!
    
            </p>
            <div className="about-home-flex">
                <div className="about-home__sub-block">
                    <GiMuscleUp  className="home-icon"/>
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Core Body exercises</h4>
                        <p className="muted-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum cupiditate sed, officia ex molestias fugiat! Officia provident, a velit consequatur quos autem officiis unde ex numquam excepturi nobis fugiat?
                        </p>
                    </div>
                </div>
                <div className="about-home__sub-block">
                    <GiRobe className="home-icon" />
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Personal Trainers</h4>
                        <p className="muted-paragraph">
                            Weight-loss, maintaining weight and muscle, healthier heart and fighting cholesterol, getting leaner, developing core strength, gaining muscle, building impressive physique, increasing 
                        </p>
                    </div>
                </div>
                <div className="about-home__sub-block">
                    <GiKnifeFork className="home-icon" />
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Nutrition and planning</h4>
                        <p className="muted-paragraph">Placeat eum cupiditate sed, officia ex molestias fugiat! Officia provident, a velit consequatur quos autem officiis unde ex numquam excepturi nobis fugiat?
                        </p>
                    </div>
                </div>
                <div className="about-home__sub-block">
                   <GiHeartBeats className="home-icon" />
                    <div className="sub-block-text">
                        <h4 className="mini-heading">Yoga & Spa</h4>
                        <p className="muted-paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum cupiditate sed, officia ex molestias fugiat! Officia provident, a velit consequatur quos autem officiis unde ex numquam excepturi nobis fugiat?
                        </p>
                    </div>
                </div>

            </div>
            <div className="offer">
                 &lt;\&gt; Our basic pack starts at 89 per month
                 JOIN NOW BTN--> redirect to join now page
            </div>
            <em>featured trainer</em>
            <em>join our health awareness seminar held by nutritionist 2</em>
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


// className="abhout-home__heading"