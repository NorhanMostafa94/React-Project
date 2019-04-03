import React, { Component } from 'react';

import { Container, Row } from 'react-bootstrap';

import { Context } from '../../App';

import Book from '../Books/BookItem'
import { categories } from '../../data';


class CategoryItem extends Component {
    state = {
        category: categories
    }

    componentDidMount() {
        // fetch(`http://localhost:3000/Categories/${id}`, { method: 'GET' })
        //     .then(res => res.json())
        //     .then(json => {
        //         // console.log(json)
        //         this.setState({ category: json })
        //     })
        // const id = this.props.match.params.id;
        // console.log(this.state.category)
        // const newData = this.state.category.filter(e => e.id === id).map(t => console.log(t.name))
        // this.setState({category:newData})
        // console.log(newData)

    }

    render() {
        const id = this.props.match.params.id;
        return (

            <Context.Consumer>
                {
                    value => (
                        value.state.categories.filter(e => e.id === Number(id)).map(t =>
                            <div key={t.id}>
                                <h1>{t.name}</h1>
                                <Container className="card-container" >
                                <Row>
                                    <div className="cat-header"></div>
                                </Row>
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