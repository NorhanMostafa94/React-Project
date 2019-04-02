import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class Book extends Component {
    render() {
        const { id, title, author,cover } = this.props;
        // console.log(this.props)
        return (
            <Card className="card-item" key={id} >
                <Card.Img variant="top" src={cover} />
                <Card.Body>
                    <Link to='/authors/:id' style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }}>{author}</Link>
                    <div>
                        <Link className="link-btn" to={`/books/${id}`} style={{ textDecoration: 'none' }}>{title}</Link>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default Book;