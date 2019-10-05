import React, { useContext } from 'react'
import {TrainerContext} from '../context/TrainerContext'

const Trainers = () => {
    const [...trainers] = useContext(TrainerContext);
    
    // const about_base = `
    // _______ holds a BS in Physical Education as well as a MS in Exercise Science and Health Promotion. (___) is a Certified Strength and Conditioning Specialist (CSCS). (___) has a background in health and fitness as well as athletic performance training with over 20 years of certification and experience in the field.
    
    // (___) is a Certified Strength and Condition Specialist (CSCS) with the National Strength and Conditioning Association. (___) has an extensive background from training professional and amateur athletes to working professionals with nominal experience in fitness. 
    
    // _____ was inspired to join the fitness industry after reflecting on the value and lessons he learned through working with a Personal Trainer of (___) own. (___) approach to training relies heavily on the fundamentals of Functional Training, incorporating movements from the activities of daily life that are unique to each individual. (--) aims to be adaptable with his programming to help find the types of exercise and lifestyle changes that are exciting, manageable, and shape a path to achieve goals.

    // _________ approaches fitness as a life long behavior modification where we have continuous improvement. (___) defines his sessions as simple, challenging, and efficient with an emphasis on proper form and mobility. (___) favorite client is anyone with a goal and a willingness to work towards it!`;

    return (
        <div>
            {trainers.map(trainer => (
                <div key={trainer.id}>
                    <img src={trainer.pic} alt={trainer.name}/>
                    {<strong>{trainer.name}</strong>} is a Certified Strength and Condition Specialist (CSCS) with the National Strength and Conditioning Association. {trainer.gender === 'male' ? 'He':'She'} has an extensive background from training professional and amateur athletes to working professionals with nominal experience in fitness.
                    <button>Read More</button>
                    <br/><br/><hr/>
                </div>
            ))}
        </div>
    )
}


export default Trainers
