import React, { Component } from 'react';
import { Context } from '../../App';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';


class CategoriesList extends Component {

    render() {
        return (
            <Context.Consumer>
                {
                    value => (
                        <Container className="card-container" style={{marginTop:'200px'}}>
                            <Row className="justify-content-md-center">
                                {value.state.categories.map(d =>
                                    <Link className="cat-btn" to={`/categories/${d.id}`} key={d.id}>
                                        <div>{d.name}</div>
                                    </Link>)}
                            </Row>
                        </Container>
                    )
                }
            </Context.Consumer>
        )
    }
}

export default CategoriesList;