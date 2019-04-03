import React, { Component } from 'react';

import { Container, Row } from 'react-bootstrap';

import { Context } from '../../App';

import Book from '../Books/BookItem'
import { categories } from '../../data';


class CategoryItem extends Component {
    state = {
        category: categories
    }


    render() {
        const id = this.props.match.params.id;
        return (

            <Context.Consumer>
                {
                    value => (
                        value.state.categories.filter(e => e.id === Number(id)).map(t =>
                            <div key={t.id}>
                                <div className="cat-header">
                                    <h1 className="cat-header-text">{t.name}</h1>
                                </div>
                                <Container className="card-container" >
                                    <Row className="justify-content-md-center">
                                        {t.books.map(c => <Book key={c.id} {...c}></Book>)}
                                    </Row>
                                </Container>
                            </div>
                        )
                    )
                }
            </Context.Consumer>
        )

    }
}

export default CategoryItem;