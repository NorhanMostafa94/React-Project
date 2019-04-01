import React, { Component } from 'react';
import { Container, Row, Card } from 'react-bootstrap';

import {Link} from 'react-router-dom'

import img from '../../assets/images/1.jpg'

class Books extends Component {
    generateBooks = ({ books }) => {
        if (books) {
            return (
                <Container className="card-container" >
                    <Row className="justify-content-md-center">
                        {books.map(t =>
                            <Card className="card-item" key={t.id} >
                            <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Link to='/authors/:id' style={{textDecoration:'none',color:'black',fontSize:'20px'}}>{t.author}</Link>
                                    <div>
                                    <Link className="link-btn" to='/books/:id' style={{textDecoration:'none'}}>{t.name}</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        )}
                    </Row>
                </Container>
            )
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.generateBooks(this.props)}
            </div>
        )
    }
}

export default Books;