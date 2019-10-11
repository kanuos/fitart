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
                <p className="price-paragraph">
                    We provide the ultimate workout experience. We believe that a healthy body promotes healthy lifestyles and by that extension a healthier mind.
                    We are riddled with bad food habits, hectic lifestyles and extreme pollution all around us.
                    We have come up with a scientific approach to tackle all these issues and keep all of us healthy, both physically and mentally.
                </p>
                <section className="price-box">
                    <article className="individual__price">
                        <h1 className="price-heading">$85 <small>per month</small></h1>
                        <div className="paragraph card-paragraph">
                            <span className="mini-desc">Basic package. </span><br/><small> For all those who want to live healthy and happy. Best suited for regular users.</small>
                            <strong className="mini-desc">What you get : </strong>
                            <ul className="individual__list">
                                <li className="individual__item">Cardio and Yoga</li>
                                <li className="individual__item">Core strength enhancing exercises</li>
                                <li className="individual__item">Crossfit exercises</li>
                                <li className="individual__item">Nutritional guidance</li>
                                <li className="individual__item">Personal Trainer</li>
                            </ul>
                        </div>
                    </article>
                    <article className="individual__price">
                        <h1 className="price-heading">$125 <small>per month</small></h1>
                        <div className="paragraph card-paragraph">
                            <span className="mini-desc">Premium package.</span><br/> <small>Get unlimited access to our spa and massages. Get best advices from nutritionists and personal trainers for optimum workout.</small>
                            <strong className="mini-desc">What you get : </strong>
                            <ul className="individual__list">
                                <li className="individual__item">Cardio</li>
                                <li className="individual__item">Yoga</li>
                                <li className="individual__item">Personal Trainer</li>
                                <li className="individual__item">Spa & theraputic massage</li>
                                <li className="individual__item">Nutritional guidance</li>
                            </ul>
                        </div>
                    </article>
                    <article className="individual__price">
                        <h1 className="price-heading">$300 <small>per month</small></h1>
                        <div className="paragraph card-paragraph">
                            <span className="mini-desc">Family package.</span> <br/> <small>For a family of four or less, the best package for a wholesome family health investment</small>
                            <strong className="mini-desc">What you get : </strong>
                            <ul className="individual__list">

                                <li className="individual__item">Cardio</li>
                                <li className="individual__item">Yoga</li>
                                <li className="individual__item">Personal Trainer</li>
                                <li className="individual__item">spa & Massage</li>
                                <li className="individual__item">Nutritional guidance</li>
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
