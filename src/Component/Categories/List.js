import React, { Component } from 'react';
import { Context } from '../../App';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import NavBar from '../shared/Navbar'


class CategoriesList extends Component {

    render() {
        return (
            <Context.Consumer>
                {
                    value => (
                        <>
                        <NavBar/>
                        <div className="cat-header" style={{backgroundImage:'url(https://i.pinimg.com/564x/f7/70/4e/f7704e0755bcad2a4e9f308a8c74c31a.jpg)'}}>
                            <Container className="card-container" >
                                <Row className="justify-content-md-center" style={{ marginTop: '200px' }}>

                                    {value.state.categories.map(d =>
                                        <Link className="cat-btn" to={`/categories/${d.id}`} key={d.id}>
                                            <div>{d.name}</div>
                                        </Link>)}
                                </Row>
                            </Container>
                        </div>
                        </>
                    )
                }
            </Context.Consumer>
        )
    }
}

export default CategoriesList;