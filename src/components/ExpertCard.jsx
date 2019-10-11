import React from 'react';
import { Link } from 'react-router-dom';

const ExpertCard = ({name, img, qualification, experience, gender, type, slug}) => {
    return (
        <article className="expert">
            <div className="flex">
                <img src={img} alt={name} className="expert-img"/>
                <div className="expert-text-box">
                    <div className="expert-bio">
                        <span className="expert-name">{name}</span>
                        <span className="expert-sub">{qualification}</span>
                        <span className="expert-sub">Experience: {experience} yrs</span>
                    </div>
                    <div className="expert-detail">
                        {name} has a <em>{qualification}</em> degree and an assorted experiencce in the fitness industry for <strong>{experience}</strong> years. {gender ==='female'? "She": "He"} {type==='nut'?'work involves optimizing the calorie in-take and enhancing the metabolism which ensures a healthy body and a sharper mind.':'is highly skilled and motivating when it comes to being a personal trainer.'}
                    </div>
                </div>
            </div>
            <Link to={`/staff/${slug}`} className="expert-btn">
                read more
            </Link>
        </article>
    )
}

export default ExpertCard
