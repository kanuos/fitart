import React, {useContext, useState, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ReviewContext } from '../context/ReviewContext'

const FitArmy = () => {
    const PER_PAGE = 5;
    const [review, setReview] = useState(useContext(ReviewContext));
    const [sorted, setSorted] = useState(false);
    const [currentPage, setCurrentPage] = useState(0); 
    const [prevPage, setPrevPage] = useState(null); 
    const [nextPage, setNextPage] = useState(1); 
    const [currentData, setCurrentData] = useState(review.slice(prevPage*PER_PAGE,nextPage*PER_PAGE));
    
    useEffect(()=>{
        setCurrentData(review.slice(prevPage*PER_PAGE ,nextPage*PER_PAGE)) ;
    },[prevPage, nextPage, sorted, review]);

    const goToPrevious = () =>{
        if(prevPage){
            setPrevPage(prevPage - 1)
            setNextPage(nextPage -1)
            setCurrentPage(currentPage - 1)
        }
    }

    const goToNext = () =>{
        if(nextPage<4){
            setPrevPage(prevPage + 1)
            setNextPage(nextPage + 1)
            setCurrentPage(currentPage + 1)
        }
    }

    const sortByRating = () =>{
        setSorted(!sorted);
        setReview(review.sort((a,b)=>{
            return b.rating - a.rating; 
        }))
    }

    const sortByDate = () =>{
        setSorted(!sorted);
        setReview(review.sort((a,b)=>{
            return b.date - a.date; 
        }))
    }
    
    return (
        <main>
            <Navbar />
            <div className="fit-army-container">
                <section className="fit-army-hero">
                    <div className="fit-text">
                        <span className="fit-header">
                            Our family has 10,000 members <br/>
                        </span>
                        <h1 className="fit-header-main">
                            Join the <strong>#FitArmy</strong>
                        </h1>
                    </div>
                </section>
                <section className="fit-army-review">
                    <div className="wrapper">
                        {!sorted && <button onClick={sortByRating}>Sort By  rating</button>}
                        {sorted && <button onClick={sortByDate}>Sort By  date</button>}
                   </div>
                    {currentData.map(entry =>{
                        return <div key={entry.id}>
                            <h1>{entry.name}</h1>
                            <img src={entry.pic} alt={entry.name}/>
                            <h2>{entry.rating} out of 5</h2>
                            <small>
                            {new Date(entry.date).getDate()}-
                            {new Date(entry.date).getMonth() + 1}-
                            {new Date(entry.date).getFullYear()}
                            </small>
                            <p className="paragraph">{entry.review}</p>
                        </div>
                    })}
                    {prevPage>1 && <button onClick={goToPrevious}>Prev</button>}
                    <span>&nbsp;{currentPage + 1}&nbsp;</span>
                    {nextPage<4 && <button onClick={goToNext}>Next</button>}               
                </section>
            </div>
            <Footer />
        </main>
    )
}

export default FitArmy
