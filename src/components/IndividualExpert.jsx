import React, {useContext} from 'react';
import { Link, Redirect } from 'react-router-dom';
import {FaChevronCircleLeft} from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import {TrainerContext} from '../context/TrainerContext';

import vid from '../assets/180419_Boxing_19_29.mp4';

const IndividualExpert = (props) => {
    const slug = props.match.params.id;
    const [...trainers] =  useContext(TrainerContext);
    const expert =  (trainers.filter(trainer => trainer.slug === slug))[0];
    
    if(!expert){
        return <Redirect to='/error'/>
    }
    else{
        return (
            <main>
                <Navbar />
                <div className="individual">
                    <h1 className="individual-name">{expert.name}</h1>
                    <video autoPlay playsInline loop muted className="individual-hero">
                        <source src={vid} type="video/mp4"/>
                        video not supported
                    </video>
                    <img src={expert.pic} alt= {expert.name}className="individual-image" />
                
                    <span className="individual-desc">Qualification: {expert.qualification}</span>
                    <span className="individual-desc individual-year">Experience: {expert.experience} years</span>
                    <strong className="individual-bold">Bio</strong>
                    <p className="individual-paragraph">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quas iusto sint nihil non error illo ex eius quo natus adipisci suscipit, molestiae molestias nam est voluptates nesciunt vel, eligendi ut aut nemo ratione pariatur voluptas consectetur! Vero blanditiis dicta cum? Illum vitae dolor ipsam ex, totam, dolorum fugit qui expedita fugiat quaerat dicta minima odit voluptatem odio earum laboriosam quo praesentium natus soluta magnam! Laborum repellat corrupti dicta sint. <br/> Assumenda deserunt veniam porro amet atque a reiciendis temporibus sunt soluta laboriosam maxime quam aspernatur perspiciatis repellendus obcaecati earum, ad natus. Perferendis commodi rem quis voluptates id velit soluta expedita sequi sint suscipit consequuntur nesciunt omnis enim, maiores eos accusantium, temporibus quae aspernatur facilis numquam, perspiciatis adipisci. Voluptatibus repellat tempora repellendus iste voluptates! Eos nulla ratione natus sint ab nobis dolores quo nesciunt officia. Rerum tempora quaerat omnis doloremque obcaecati voluptatem atque praesentium officiis, voluptatibus optio dolorum ratione pariatur nulla, repudiandae quo accusantium odit corporis suscipit, eveniet placeat? Minus facilis eveniet ea? <br/> Ipsum maiores ab qui tempore magnam minus rem culpa fugit quasi, nihil magni odio natus similique, voluptas corrupti vero delectus inventore maxime corporis dignissimos fuga cumque eos. Doloribus nulla obcaecati libero nobis, molestias quod modi sed quis praesentium quae nihil veritatis eligendi in atque non alias consectetur? Officiis quasi tempora aperiam accusamus velit perferendis saepe aspernatur non excepturi at repudiandae nam adipisci eligendi officia natus architecto quod repellat harum, quibusdam nulla debitis magnam. Maiores, delectus. Nisi deleniti voluptatem corrupti quisquam. Quos, dicta? Voluptatem alias doloremque reiciendis ea aspernatur omnis distinctio quos, esse molestias facilis in voluptatum nostrum aperiam, hic aut itaque odit. Cum explicabo repellendus, amet accusamus, cumque dignissimos illo voluptatibus esse qui quos ad omnis neque, incidunt vitae! Nobis obcaecati dolores officia nesciunt, maiores sequi tempora neque delectus unde sed ducimus dolorum consequuntur, nostrum facilis voluptatum suscipit vero odio earum placeat dicta! Assumenda laboriosam alias est perspiciatis deserunt dicta, reiciendis nesciunt nemo nostrum tempora pariatur. Laborum quia iste non adipisci asperiores voluptatem in deserunt deleniti, molestias quisquam facilis itaque libero voluptatum ipsa neque eveniet accusamus iusto recusandae ex. Aut id sunt ipsa corporis obcaecati laboriosam, odio rerum iusto error velit, dolore debitis laborum et qui quos aliquid consequuntur officiis illum. Voluptates, sint. Ut at error minus fugit blanditiis dolores esse veritatis libero doloribus, deserunt quas molestiae dolorum assumenda illo quo.
                    </p>
                <Link to='/about' className="back-btn"><FaChevronCircleLeft/> Go back </Link>
                </div>
                <Footer />
            </main>
        )
    }
}

export default IndividualExpert
