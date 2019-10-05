import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [mobile, SetMobile] = useState(true);
    const [home, setHome] = useState(true);
    const [fit, setFit] = useState(false);
    const [about, setAbout] = useState(false);
    const [price, setPrice] = useState(false);
    const [contact, setContact] = useState(false);

    useEffect(()=>{
        
    }, [home,about,fit,price,contact])

    return (
        <nav className="navbar">
            <a href="/" className="navbar-brand">Fit-Art</a>
            <button 
                className="navbar-toggler"
                onClick = {()=>SetMobile(!mobile)}    
            >
                <FaBars />
            </button>

            <div className={`mobile mobile-${mobile}`}>
                <a href="/" 
                    className={`navbar-link current-${home}`}
                    onClick = {(e)=> {
                        e.preventDefault();
                        setHome(true);
                        setFit(false);
                        setAbout(false);
                        setPrice(false);
                        setContact(false);
                }}>
                        Home
                </a>
                <a href="/gallery" 
                    className={`navbar-link current-${fit}`}
                    onClick={(e)=>{
                        setFit(true);
                        setHome(false);
                        setAbout(false);
                        setPrice(false);
                        setContact(false);
                        e.preventDefault();
                    }}>
                        #FitArmy
                </a>
                <a href="/about" 
                    className={`navbar-link current-${about}`}
                    onClick={(e)=>{
                        e.preventDefault();
                        setFit(false);
                        setHome(false);
                        setAbout(true);
                        setPrice(false);
                        setContact(false);
                }}>
                        About Us
                </a>
                <a href="/price" 
                    className={`navbar-link current-${price}`}
                    onClick={(e)=>{
                        e.preventDefault();
                        setFit(false);
                        setHome(false);
                        setAbout(false);
                        setPrice(true);
                        setContact(false);
                }}>
                        Pricing
                </a>
                <a href="/contact" 
                    className={`navbar-link current-${contact}`}
                    onClick={(e)=>{
                        e.preventDefault();
                        setFit(false);
                        setHome(false);
                        setAbout(false);
                        setPrice(false);
                        setContact(true);
                }}>
                        Contact
                </a>
                <a href="/register" className="navbar-link join-now">Join Now</a>
            </div>
        </nav>
    )
}

export default Navbar
