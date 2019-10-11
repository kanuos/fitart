import React, {useState, useContext} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {TrainerContext} from '../context/TrainerContext'
import vid from '../assets/180419_Boxing_A1_04.mp4';
import ExpertCard from './ExpertCard';

const About = () => {
    const [...trainers] = useContext(TrainerContext);
    const [gym] = useState(trainers.filter(item => item.type==='gym'));
    const [nut] = useState(trainers.filter(item => item.type==='nut'));
    return (
        <main>
            <Navbar />
            <div className="about-page">
                <video autoPlay playsInline muted loop className="about-page-hero">
                    <source src={vid} type="video/mp4"/>
                </video>
                <div className="about-content">
                    <section className="about-section">
                        <h1 className="about-heading">About Us</h1>
                        <p className="about-paragraph">
                            We at Fit-Art, have taken a vow to make our #fitArmy healthy and happy. We have been winning the battle for the last 10 years when we started our journey. Today our family comprises thousands of members and we are growing every day.
                        </p>
                        <p className="about-paragraph">
                            We have trained experts with great education,experience and insight who will help you to be fit and healthy and help you optimize the transition process.
                        </p>
                        <p className="about-paragraph">
                            We help you optimize your nutrition intake with the help of our expert nutritionists and get in shape with the guidance of the best trainers in the industry.
                        </p>
                    </section>
                    <section className="about-section">
                        <h1 className="about-heading">Nutrition</h1>
                        <p className="about-paragraph">
                            Getting in the best shape needs a lot more than just working out. It is believed that 70% of what you eat decides your health and looks.
                            Let's meet our team of <strong>Nutritionists </strong>
                        </p>
                        <div className="flexy">
                            {nut.map(item => 
                                <ExpertCard key={item.id}
                                    name={item.name}
                                    img={item.pic}
                                    qualification={item.qualification}
                                    experience={item.experience}
                                    gender = {item.gender}
                                    item = {item.gender}
                                    slug = {item.slug}
                            />)}
                        </div>
                    </section>
                    <section className="about-section">
                        <h1 className="about-heading">Trainers</h1>
                        <p className="about-paragraph">
                            With the best trainers across the country in our team, we guarantee you a better health and physique. With scientific approach towards working out our team of expert trainers are here to optimize your training.
                            Let's meet our team of <strong>Fitness Trainers </strong>
                        </p>
                        <div className="flexy">
                            {gym.map(item => 
                                <ExpertCard key={item.id}
                                    name={item.name}
                                    img={item.pic}
                                    qualification={item.qualification}
                                    experience={item.experience}
                                    gender = {item.gender}
                                    item = {item.gender}
                                    slug = {item.slug}
                            />)}
                        </div>
                    </section>
                </div>
            </div>
           <Footer />
        </main>
    )
}

export default About
