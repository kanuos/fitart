import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';


const Pricing = () => {
    return (
        <div>
            <Navbar />
            <section className="price">
                <h1 className="heading-section">
                    Pricing and Membership
                </h1>
                <section className="price-box">
                    <article className="individual__price">
                        <h1 className="individual__price">$85 <small>per month</small></h1>
                        <div className="individual__description">
                            Basic package. 
                            <ul className="individual__list">
                                <li className="individual__ite">Cardio</li>
                                <li className="individual__ite">Yoga</li>
                                <li className="individual__ite">Core strengthning exercise</li>
                            </ul>
                        </div>
                    </article>
                    <article className="individual__price">
                        <h1 className="individual__price">$125 <small>per month</small></h1>
                        <div className="individual__description">
                            Premium package. 
                            <ul className="individual__list">
                                <li className="individual__ite">Cardio</li>
                                <li className="individual__ite">Yoga</li>
                                <li className="individual__ite">Personal Trainer</li>
                                <li className="individual__ite">Spa & theraputic massage</li>
                                <li className="individual__ite">Nutritional guidance</li>
                            </ul>
                        </div>
                    </article>
                    <article className="individual__price">
                        <h1 className="individual__price">$200 <small>per month</small></h1>
                        <div className="individual__description">
                            Family package. 
                            <ul className="individual__list">
                                <li className="individual__ite">Cardio</li>
                                <li className="individual__ite">Yoga</li>
                                <li className="individual__ite">Personal Trainer</li>
                                <li className="individual__ite">spa & Massage</li>
                                <li className="individual__ite">Nutritional guidance</li>
                            </ul>
                        </div>
                    </article>

                </section>
            </section>
            <Footer />
        </div>
    )
}

export default Pricing
