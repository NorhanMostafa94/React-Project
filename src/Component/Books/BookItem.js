import React, { Component } from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class Book extends Component {
    render() {
        const { id, title, author } = this.props;
        // console.log(this.props)
        return (
            <Container className="card-container" >
                <Row className="justify-content-md-center">
                    <Card className="card-item" key={id} >
                        <Card.Img variant="top" />
                        <Card.Body>
                            <Link to='/authors/:id' style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }}>{author}</Link>
                            <div>
                                <Link className="link-btn" to={`/books/${id}`} style={{ textDecoration: 'none' }}>{title}</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        );
    }
}

export default Book;