import React from 'react';
import uuidv4 from 'uuid/v4';

const Rating = (props) => {

  const ratting=({rating})=>{
        let stars = [];
        for (let index = 0; index < rating; index++) {
            stars.push(<i className="fas fa-star rating" key={uuidv4()}></i>)

        }
        return stars
    }

    return (
       <>
        { ratting(props)}
        </>
    )

}
export default Rating