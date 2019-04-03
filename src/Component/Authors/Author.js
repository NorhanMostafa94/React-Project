import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class Author extends Component {
    render() {
        const { name, id, cover } = this.props;
        return (
            <Card className="card-item" key={id} >
                <Card.Body>
                    <Card.Img style={{ height: '250px', boxShadow: '0px 3px 5px 0px #adadab' }} variant="top" src={cover} />
                    <div>
                        <Link className="author-details-bok-title" to={`/authors/${id}`} style={{ textDecoration: 'none' }}>{name}</Link>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default Author;