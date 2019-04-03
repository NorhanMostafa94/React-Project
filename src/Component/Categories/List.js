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
                            <div className="cat-header">
                        <Container className="card-container" >
                            <Row className="justify-content-md-center" style={{marginTop:'200px'}}>
                            
                                {value.state.categories.map(d =>
                                    <Link className="cat-btn" to={`/categories/${d.id}`} key={d.id}>
                                        <div>{d.name}</div>
                                    </Link>)}
                            </Row>
                        </Container>
                                    </div>
                    )
                }
            </Context.Consumer>
        )
    }
}

export default CategoriesList;