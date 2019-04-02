import React from 'react';
import Rating from './Rating';
const Reviews = (props) => {


    const diplayReviews = ({reviews}) => {
        if (reviews ) {
            return reviews.map((review) => {
                return (
                    <>
                        <h6>{review.name}</h6>
                        <img src={review.cover}></img>
                        <span className="book-details-stars ">
                            <span>rate it </span>
                            
                            {<Rating rating={review.rate} />}
                        </span>
                        <p>
                            {review.review}
                        </p>

                    </>
                )
            })
        }
    }
    return (
        <>
        { diplayReviews(props) }
        </>
    )
}
export default Reviews
