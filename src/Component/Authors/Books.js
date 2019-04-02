import React from 'react';
import Rating from '../Books/Rating';
import Dropdown from 'react-bootstrap/Dropdown';
const BookAuthor = (props) => {


    const diplayBooks = ({ books }) => {
        if (books) {
            return books.map((book) => {
                return (
                    <>

                        <img src={book.cover}></img>
                        <span className="book_title">{book.title}</span>
                        <h6 className="book_author">by {book.author}</h6>
                        <p>
                        <span className="book-details-stars author_rating ">
                            {<Rating rating={book.rating} />}
                        </span>
                        <span className="book_avg">
                            {book.avgrating}
                        </span> </p>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="book-details-dropdwn author_drodwn">
                                Want to Read
                                </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Currently Reading</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Read</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Want to Read</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

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
