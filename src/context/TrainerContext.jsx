import t1 from '../assets/trainer1.jpg';
import t2 from '../assets/trainer2.jpg';
import t3 from '../assets/trainer3.jpg';
import t4 from '../assets/trainer4.jpg';
import t5 from '../assets/trainer5.jpg';
import t6 from '../assets/nut1.jpg';
import t7 from '../assets/nut2.jpg';
import t8 from '../assets/nut4.jpg';
import t9 from '../assets/nut3.jpg';
import t10 from '../assets/r7.jpg';

import React, { useState, createContext } from 'react'

export const TrainerContext = createContext();

const TrainerContextProvider = (props) => {
    const trainer_data = [
        {
            id: 1,
            name: 'Michelle Ortega',
            gender: `female`,
            pic: t1,
            type: 'gym',
            qualification: 'Personal Trainer (ACE-CPT)',
            experience: 6,
            slug: 'michelle'  
         },
        {
            id: 2,
            name: 'Stacy Morgan',
            gender: `female`,
            pic: t2,
            type: 'gym',
            qualification: 'Personal Trainer (ACE-CPT)',
            experience: 4,
            slug: 'stacy'  
       },
        {
            id: 3,
            name: 'Christy Rhoades',
            gender: `female`,
            pic: t3,
            type: 'gym',
            qualification: 'ACSM Certified Personal Trainer (CPT)',
            experience: 5,
            slug: 'christy'        
        },
        {
            id: 4,
            name: 'David Phelps',
            gender: `male`,
            pic: t4,
            type: 'gym',
            qualification: 'Certified Personal Fitness Trainer (CPFT)',
            experience: 6,
            slug: 'david'        
        },
        {
            id: 5,
            name: 'Juan Martinez',
            gender: `male`,
            pic: t5,
            type: 'gym',
            qualification: 'International Fitness Professionals Association Personal Fitness Training Certification (IFPA - PFT)',
            experience: 7,
            slug: 'juan'        
        },
        {
            id: 6,
            name: 'Angela Ng',
            gender: `female`,
            pic: t6,
            type: 'nut',
            qualification: 'MS Nutrition and Food Science from University of California-Berkeley',
            experience: 5,
            slug: 'angela'  
        },
        {
            id: 7,
            name: 'Sophie Cortez',
            gender: `female`,
            pic: t7,
            type: 'nut',
            qualification: 'PhD in Applied Nutrition from Cornell University',
            experience: 7,
            slug: 'sophie'        
        },
        {
            id: 8,
            name: 'Janie Lopez',
            gender: `female`,
            pic: t8,
            type: 'nut',
            qualification: 'MS in Nutrition and Food Science from University of Georgia',
            experience: 3,
            slug: 'janie'        
        },
        {
            id: 9,
            name: 'Isabella Munez',
            gender: `female`,
            pic: t9,
            type: 'nut',
            qualification: 'BS in Clinical Nutrition from Syracuse University',
            experience: 2,
            slug: 'isabella' 
        },
        {
            id: 10,
            name: 'CJ Wells',
            gender: `male`,
            pic: t10,
            type: 'gym',
            qualification: 'Certified Personal Fitness Trainer (CPFT)',
            experience: 12,
            slug:'cj'
        }
    ]

    const [trainers] = useState(trainer_data);

    return (
        <TrainerContext.Provider value={[...trainers]}>
            {props.children}
        </TrainerContext.Provider>
    )
}

export default TrainerContextProvider

