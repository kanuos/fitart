import t1 from '../assets/trainer1.jpg';
import t2 from '../assets/trainer2.jpg';
import t3 from '../assets/trainer3.jpg';
import t4 from '../assets/trainer4.jpg';
import t5 from '../assets/trainer5.jpg';

import React, { useState, createContext } from 'react'

export const TrainerContext = createContext();

const TrainerContextProvider = (props) => {
    const trainer_data = [
        {
            id: 1,
            name: 'Michelle Ortega',
            gender: `female`,
            pic: t1
        },
        {
            id: 2,
            name: 'Stacy Morgan',
            gender: `female`,
            pic: t2
        },
        {
            id: 3,
            name: 'Christy Rhoades',
            gender: `female`,
            pic: t3
        },
        {
            id: 4,
            name: 'David Phelps',
            gender: `male`,
            pic: t4
        },
        {
            id: 5,
            name: 'Juan Martinez',
            gender: `male`,
            pic: t5
        },
    ]

    const [trainers] = useState(trainer_data);

    return (
        <TrainerContext.Provider value={[...trainers]}>
            {props.children}
        </TrainerContext.Provider>
    )
}

export default TrainerContextProvider

