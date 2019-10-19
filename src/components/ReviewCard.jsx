import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const ReviewCard = ({name,pic,rating,date, review}) => {
    const month = ['Jan','Feb','Mar', 'Apr','May','Jun','Jul','Aug','Sep', 'Oct', 'Nov', 'Dec'];
    
    const datum = new Date(date);
    
    function daySuffix(day){
        switch(Number(day)){
            case 1: return `st`;
            case 21: return `st`;
            case 31: return `st`;
            case 22: return `nd`;
            case 3: return `rd`;
            case 23: return `rd`;
            default: return `th`;
        }
    }

    return (
        <article className="review-card">
            <img src={pic} alt={name} className="review-img"/>
            <div className="review-text">
                <h2 className="review-name">{name}</h2>
                <div className="review-desc">
                    <span className="review-rating" title={`${rating} out of 5`}>
                        <StarRatingComponent 
                            name="rating"
                            editing={false}
                            value = {rating}
                            onStarClick = {()=>null}
                        />
                    </span>
                    <span className="review-muted">Joined : 
                    {datum.getUTCDate()}<sup>{daySuffix(datum.getUTCDate())}</sup>&ndash;{month[datum.getUTCMonth()]}&ndash;{datum.getUTCFullYear()}</span>
                </div>
                <p className="review-content">
                    {review}
                </p>
            </div>
        </article>
    )
}

export default ReviewCard
