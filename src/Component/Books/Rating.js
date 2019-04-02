import React from 'react';

const Rating = (props) => {

  const ratting=({rating})=>{
        let stars = [];
        for (let index = 0; index < rating; index++) {
            stars.push(<i className="fas fa-star "></i>)

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