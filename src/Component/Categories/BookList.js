import React, { Component } from 'react';
import { Container, Row, Card } from 'react-bootstrap';

class BookList extends Component {
    generateBooks = ({ books }) => {
        if (books) {
            return (
                books.map(t =>
                    <Container key={t.id}>
                        <Row className="justify-content-md-center">
                            <Card style={{ width: '50rem', marginTop: '20px' }}>
                                <Card.Body>
                                    <Card.Text>{t.name}</Card.Text>
                                    <Card.Text>{t.author}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                )
            )
        }
    }

    render() {
        return (
            <div>
                {this.generateBooks(this.props)}
            </div>
        )
    }
}

export default BookList;