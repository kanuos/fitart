import React, {useContext, useState, useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ReviewContext } from '../context/ReviewContext'
import ReviewCard from './ReviewCard';
import {FaSortAmountDown} from 'react-icons/fa';

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
        if(prevPage>0){
            setPrevPage(prevPage - 1)
            setNextPage(nextPage -1)
            setCurrentPage(currentPage - 1)
        }
    }

    const goToNext = () =>{
        if(nextPage<5){
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
                            Join the <strong>#FitArmy</strong><br/>NOW
                        </h1>
                    </div>
                </section>
                <section className="fit-army-review">
                    <h1 className="big-heading">
                        Reviews
                    </h1>
                    <div className="review-btn-case">
                        {!sorted && <button onClick={sortByRating} className="sort-btn"><FaSortAmountDown/>&nbsp;&nbsp;Sort By  rating</button>}
                        {sorted && <button onClick={sortByDate} className="sort-btn"><FaSortAmountDown/>&nbsp;&nbsp;Sort By  date</button>}
                   </div>
                   <section className="review-list">
                        {currentData.map(entry =>(<ReviewCard 
                                key={entry.id}
                                name={entry.name}
                                review={entry.review}
                                rating= {entry.rating}
                                date = {entry.date.toString()}
                                pic = {entry.pic}
                            />
                        ))}
                   <div className="page-btn-case">
                        {prevPage>=1 && <button className="page-btn" onClick={goToPrevious}>Prev</button>}<span className="page-btn page-now">&nbsp;&nbsp;{currentPage + 1}&nbsp;</span>{nextPage<=4 && <button className="page-btn" onClick={goToNext}>Next</button>}               
                   </div>
                   </section>
                </section>
            </div>
            <Footer />
        </main>
    )
}

export default FitArmy
