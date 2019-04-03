import React, { Component } from 'react';
import { Context } from '../../App';
import { Container, Row } from 'react-bootstrap';

import Author from './Author'
// import Book from '../Books/BookItem'
class AuthorsList extends Component {

    render() {
        return (
            <Context.Consumer>
                {
                    value => (

                        // this.get(value.getCategories),
                        <Container className="card-container" >
                            <Row className="justify-content-md-center">
                                {value.state.authors.map(d =>
                                    <Author key={d.id} {...d}></Author>
                                    // <Book key={d.id} {...d}></Book>
                                    )
                                    }
                            </Row>
                        </Container>
                    )
                }
            </Context.Consumer>
        )
    }
}

export default AuthorsList;