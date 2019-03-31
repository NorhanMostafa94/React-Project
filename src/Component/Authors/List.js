import React, { Component } from 'react';
import { Context } from '../../App';
import { Container, Row } from 'react-bootstrap';

import Author from './Author'

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
                                )}
                            </Row>
                        </Container>
                    )
                }
            </Context.Consumer>
        )
    }
}

export default AuthorsList;