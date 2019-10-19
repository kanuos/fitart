import React from 'react'
import Navbar from './Navbar';
import vid from '../assets/hero.mp4';
import hero from '../assets/floor.jpg';
import Footer from './Footer';
import { FaAngleDown } from 'react-icons/fa';
import AboutHome from './AboutHome';

const Home = () => {
    return (
        <main>
            <Navbar />
            <header className="header-section" onContextMenu={e=>e.preventDefault()}>
                <video autoPlay playsInline muted loop className="hero-video">
                    <source  src={vid} type="video/mp4"/>
                    <img src={hero} alt="man lifting weights"/>
                    Your browser does not support the video. Sorry for the inconvenience.
                </video>
                <div className="hero-heading">
                    <h2 className="heading__header--sub">
                       <span className="header-logo">Fit-Art</span><br/>Everyone Needs a Tune-up
                    </h2>
                    <h1 className="heading__header">
                    Get In. <br/>
                    Get Fit. <br/> Get on with Life.
                    </h1>
                </div>
                    <button 
                    className="next-btn" 
                    aria-label="Discover Fit Art"
                    onClick = {()=>document.getElementById('about').scrollIntoView()}>
                        <FaAngleDown/>
                    </button>
            </header>
            <div id="about">
                <AboutHome />
            </div>
            <Footer />
        </main>
    )
}

export default Home
