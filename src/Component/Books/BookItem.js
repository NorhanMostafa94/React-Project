import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import noImage from '../../assets/images/noimg.png'


class Book extends Component {
    render() {
        const { id, title, author, cover,authorID } = this.props;
        // console.log(this.props)
        return (
            <Card className="card-item" key={id} >
                <Card.Body>
                    <Card.Img style={{ height: '300px', boxShadow: '0px 3px 5px 0px #adadab' }} variant="top" src={cover} />

                        <Link to={`/authors/${authorID}`} style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }}>{author}</Link>
                    <div>
                        <Link className="link-btn" to={`/books/${id}`} style={{ textDecoration: 'none' }}>{title}</Link>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default Book;