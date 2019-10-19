import React, {useState} from 'react';
import barney from '../assets/barney.jpg';
import richard from '../assets/richard.jpg'
import gilfoyle from '../assets/gilfoyle.jpg'
import dinesh from '../assets/dinesh.jpg'
import Gavin from '../assets/gavin.jpg'
import Rachel from '../assets/rachel.jpg'
import Phoebe from '../assets/phoebe.jpg'
import Monica from '../assets/monica-hall.jpg'
import ross from '../assets/ross.jpg'
import chandler from '../assets/chandler.jpg'
import joey from '../assets/joey.jpg'
import elrich from '../assets/elrich.jpg'
import Jian from '../assets/jian.jpg'
import Jared from '../assets/jared.jpg'
import monica from '../assets/monica.jpg'
import Laurie from '../assets/laurie.jpg'
import dexter from '../assets/dexter.jpg'
import jeessie from '../assets/jesse.jpg'
import walter from '../assets/walter.jpg'
import ted from '../assets/ted.jpg'
import marshall from '../assets/marshall.jpg'
import lilly from '../assets/lily.jpg'
import robin from '../assets/robin.jpg'


const data = [
    {
        id: 1,
        review: "I LIKE MY TRAINER. I LIKE THE LOOK OF THE STUDIO. I LIKE THE   PEOPLE WHO USE IT. I LIKE THE MIX OF THOSE PEOPLE",
        name: 'Richard Hendricks',
        rating: 5,
        date: new Date("2015-10-21"),
        pic: richard
    },
    {
        id: 2,
        review: "ITS A VERY CLEAN, LOW KEY GYM. FOR ME IT IS CLOSE TO WORK AND I LIKE THE CROWD",
        name: 'Bertram Gilfoyle',
        rating: 4.5,
        date: new Date("2018-11-02"),
        pic: gilfoyle
    },
    {
        id: 3,
        review: "HIGH QUALITY, DIVERSE GROUP CLASSES; EQUIPMENTS IN GOOD CONDITION; PEOPLE ARE NICE TO ONE ANOTHER LIKE IN A FRIENDLY COMMUNITY ",
        name: 'Dinesh Chugtai',
        rating: 4,
        date: new Date("2018-07-15"),
        pic: dinesh
    },
    {
        id: 4,
        review: "CONVENIENTLY LOCATED GOOD AESTHETICS PLENTY OF ROOMS ― DOWNSTAIRS, WOMEN’S ROOM AND CLASSROOM SPACE LOW KEY",
        name: 'Galvin Belson',
        rating: 4.5,
        date: new Date("2018-01-05"),
        pic: Gavin
    },
    {
        id: 5,
        review: "CLUB IS CLEAN AND WELL KEPT. GROUP TRAINERS ARE ENTHUSIASTIC, ENGAGING AND WELL PREPARED. I LOVE THAT YOU HAVE ‘MORE MATURE’ TRAINERS... MAKES FOR GREAT ROLE MODELS",
        name: 'Rachel Green',
        rating: 5,
        date: new Date("2015-10-12"),
        pic: Rachel
    },
    {
        id: 6,
        review: "RUBBER BANDS FOR HAIR. WOMEN’S BATHROOM ON MAIN FLOOR. GOOD MACHINE S AND FRIENDLY STAFF",
        name: 'Laurie Bream',
        rating: 3.5,
        date: new Date("2017-10-12"),
        pic: Laurie
    },
    {
        id: 7,
        review: "RUBBER BANDS FOR HAIR. WOMEN’S BATHROOM ON MAIN FLOOR. GOOD MACHINE S AND FRIENDLY STAFF",
        name: 'Phoebe Buffay',
        rating: 3.5,
        date: new Date("2016-08-02"),
        pic: Phoebe
    },
    {
        id: 8,
        review: "YOU HAVE EVERYTHING ONE COULD WANT IN A GYM AS WELL AS A GREAT LOCATION, GREAT STAFF, GREAT OWNER!",
        name: 'monica geller',
        rating: 4,
        date: new Date("2016-10-12"),
        pic: monica
    },
    {
        id: 9,
        review: "FRIENDLY STAFF GREAT TRAINERS ― JASON IS TERRIFIC WOMEN’S GYM CLEAN FACILITIES GREAT HOURS GOOD COMMUNICATION RE: HOLIDAYS & INCLEMENT WEATHER PARKING",
        name: 'ross geller',
        rating: 4.5,
        date: new Date("2019-08-12"),
        pic: ross
    },
    {
        id: 10,
        review: "CLEAN SPACE, UPDATED new Date(EQUIPMENT, E)ASY PARKING, NICE LOCKER ROOM, GREAT STAFF.",
        name: 'chandler bing',
        rating: 3.5,
        date: new Date("2016-10-21"),
        pic: chandler
    },
    {
        id: 11,
        review: "EASE OF PARKING. AVAILABILITY OF MACHINES I LIKE TO WORK WITH.FRIENDLINESS OF RECEPTION STAFF. EXCELLENT PTS.",
        name: 'joey tribbiani',
        rating: 3.5,
        date: new Date("2017-09-12"),
        pic: joey
    },
    {
        id: 12,
        review: "EQUIPMENT. ATMOSPHERE. HOURS. STAFF..",
        name: 'Monica Hall',
        rating: 3,
        date: new Date("2016-10-25"),
        pic: Monica
    },
    {
        id: 13,
        review: "YOUR EXTENSIVE DIVERSITY OF EQUIPMENT TYPES, THOUGH WISH YOU HAD A SEATED CALF PRESS.",
        name: 'barney stinson',
        rating: 4,
        date: new Date("2019-03-12"),
        pic: barney
    },
    {
        id: 14,
        review: "YOUR EXTENSIVE DIVERSITY OF EQUIPMENT TYPES, THOUGH WISH YOU HAD A SEATED CALF PRESS.",
        name: 'dexter morgan',
        rating: 4,
        date: new Date("2017-11-12"),
        pic: dexter
    },
    {
        id: 15,
        review: "INSTRUCTORS FOR THE VARIOUS CLASSES ARE GOOD. MANY CARDIO MACHINES AVAILABLE GOOD WEIGHT ROOM",
        name: 'marshall ericksson',
        rating: 5,
        date: new Date("2017-12-12"),
        pic: marshall
    },
    {
        id: 16,
        review: "GREAT HOURS, LOW COST, LOTS OF EQUIPMENT",
        name: 'robin scherbatsky',
        rating: 3,
        date: new Date("2018-05-12"),
        pic: robin
    },
    {
        id: 17,
        review: "ALWAYS CLEAN AND EVERYONE IS ALWAYS SO NICE",
        name: 'lily aldrin',
        rating: 4,
        date: new Date("2018-10-23"),
        pic: lilly
    },
    {
        id: 18,
        review: "YOU HAVE GREAT FITNESS CLASSES LIKE ZUMBA AND BODY FLOW AND PUMP. I LOVE THE INSTRUCTORS TOO. THEY HAVE SUCH PASSION AND ENERGY FOR WHAT THEY DO!",
        name: 'ted mosby',
        rating: 4,
        date: new Date("2017-06-12"),
        pic: ted
    },
    {
        id: 19,
        review: "IT HAS EVERYTHING I NEED FOR A WORKOUT AND IT IS CLOSE TO MY HOME",
        name: 'walter white',
        rating: 4.5,
        date: new Date("2017-07-06"),
        pic: walter
    },
    {
        id: 20,
        review: "Bitchen! Freaking Awesome ",
        name: 'jesse pinkman',
        rating: 5,
        date: new Date("2017-09-28"),
        pic: jeessie
    },
    {
        id: 21,
        review: "Awesome! Bachman approves ",
        name: 'elrich bachman',
        rating: 4.5,
        date: new Date("2018-09-28"),
        pic: elrich
    },
    {
        id: 22,
        review: "I love gym. Yes.",
        name: 'Jian Yang',
        rating: 4.5,
        date: new Date("2018-09-28"),
        pic: Jian
    },
    {
        id: 23,
        review: "Prestine. Disciplined. Clean.",
        name: 'Donald \'Jared\' Dunn',
        rating: 4.5,
        date: new Date("2018-01-10"),
        pic: Jared
    },
]


export const ReviewContext = React.createContext();

const ReviewContextProvider = (props) => {
    const [review] = useState(data);
    return (
      <ReviewContext.Provider value={[...review]}>
          {props.children}
      </ReviewContext.Provider>
    )
}

export default ReviewContextProvider



