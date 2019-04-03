import React from 'react';
import Rating from './Rating';
const Reviews = (props) => {


    const diplayReviews = ({ reviews }) => {
        if (reviews) {
            return reviews.map((review) => {
                return (

                    <div key={review.id}>
                        <h6 className="author-details-bok-title reader-name">{review.name}</h6>
                        <img src={review.cover} alt={review.cover}></img>
                        <span className="book-details-stars ">
                            <span className="rate-header reader-rate" >rate it </span>

                            {<Rating rating={review.rate} />}
                        </span>
                        <p className="bio">
                            {review.review}
                        </p>

                    </div>
                )
            })
        }
    }
    return (
        <>
            {diplayReviews(props)}
        </>
    )
}
export default Reviews
