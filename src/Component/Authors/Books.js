import React from 'react';
import Rating from '../Books/Rating';
// import Dropdown from 'react-bootstrap/Dropdown';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const BookAuthor = (props) => {


    const diplayBooks = ({ books }) => {
        if (books) {
            return books.map((book) => {
                return (
                    <>

                                <Card className="card-item" key={book.id} >
                                    <Card.Body>
                                        <Card.Img style={{ height: '300px', boxShadow: '0px 3px 5px 0px #adadab' }} variant="top" src={book.cover} />

                                            <Link className="link-btn author-details-bok-title" to={`/books/${book.id}`} style={{ textDecoration: 'none' }}>{book.title}</Link>
                                        {/* <div >
                                            <Link to={`/authors/${book.authorID} `}style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }}>{book.author}</Link>
                                        </div> */}
                                        <h6 className="author-details-author-title">{book.author}</h6>
                                        
                                            <span className="book-details-stars author-details-book-rating " >
                                                {<Rating rating={book.rating} />}
                                            </span>
                                            <span className="book_avg author-details-book-AVGrating ">
                                                {book.avgrating}
                                            </span> 
                                    </Card.Body>
                                </Card>

                    </>
                )
            })
        }
    }
    return (
        <>
            {diplayBooks(props)}
        </>
    )
}
export default BookAuthor;
