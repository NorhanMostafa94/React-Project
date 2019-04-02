import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class Author extends Component {
    render() {
        const { name, id } = this.props;
        return (
            <Card style={{ width: '18rem' }} className="card-item">
                <Card.Img />
                <Card.Body>
                    <Link className="link-btn" to={`/authors/${id}`} style={{ textDecoration: 'none' }}>{name}</Link>
                </Card.Body>
            </Card>
        );
    }
}

export default Author;