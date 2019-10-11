import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
    return (
        <main>
            <Navbar />
            <section className="contact">
                <h1 className="heading-section">Contact</h1>
                <div className="container">
                    <article className="contact-section">
                        <strong className="contact-heading">Location</strong>
                        <p className="contact-paragraph">
                        216, Main Road, Ithaca, NY -14850
                        </p>
                    </article>
                    <article className="contact-section">
                        <strong className="contact-heading">Call</strong>
                        <p className="contact-paragraph">
                            +1 123 456 7890 <br/>
                            +1 789 456 1230
                        </p>
                    </article>
                    <article className="contact-section">
                        <strong className="contact-heading">Email</strong>
                        <p className="contact-paragraph">
                            contact@fitart.com
                        </p>
                    </article>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Contact