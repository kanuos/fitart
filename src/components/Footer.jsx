import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram, FaSnapchat} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <strong>Copyright FitArt{currentYear}</strong>
            <div className="icons">
                <FaFacebook className="footer-icon"/>
                <FaInstagram className="footer-icon"/>
                <FaTwitter className="footer-icon"/>
                <FaSnapchat className="footer-icon"/>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestias facere nobis suscipit, eligendi molestiae quos rem aliquid in perferendis totam omnis tempore impedit esse at aliquam aperiam deserunt iste!
            <strong>Location</strong>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum.
            </p>
            <strong>hours : mon to thur 8am to 7pm, fri 8 to 6 </strong>
            <em>community</em>
            <em>services</em>
            <p>
                personal training
                nutrition
                weight loss program
                stress relief
            </p>
        </footer>
    )
}

export default Footer
