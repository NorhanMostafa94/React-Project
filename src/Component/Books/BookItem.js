import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Rating from '../Books/Rating';


class Book extends Component {
    render() {
        const { id, title, author, cover, authorID, rating, avgrating } = this.props;
        // console.log(this.props)
        if (id, title, author, cover, authorID) {
            return (
                // <Col sm={3}>
                <Card className="card-item col-sm-3" >
                    <Card.Body>
                        <Card.Img style={{ height: '300px', boxShadow: '0px 3px 5px 0px #adadab' }} variant="top" src={cover} />
                        <Link className="author-details-bok-title" to={`/books/${id}`} style={{ textDecoration: 'none' }}>{title}</Link>
                        <div>
                            <Link className="author-details-author-title" to={`/authors/${authorID}`} style={{ textDecoration: 'none' }}>{author}</Link>
                        </div>
                        <span className="book-details-stars author-details-book-rating " >
                            {<Rating key={id} rating={rating} />}
                        </span>
                        <span className="book_avg author-details-book-AVGrating ">
                            {avgrating}
                        </span>
                    </Card.Body>
                </Card>
                // </Col>
            );
        }
    }
}

export default Book;