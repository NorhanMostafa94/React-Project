import React, { Component } from 'react';

import { Context } from '../../App';
import { Card } from 'react-bootstrap';

import BookList from './BookList'

class CategoryItem extends Component {
    state = {
        category: []
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`http://localhost:3000/Categories/${id}`, { method: 'GET' })
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                this.setState({ category: json })
            })
    }
    render() {
        return (

            <Context.Consumer>
                {

                    value =>
                        <Card style={{ width: '50rem', height: '5rem', margin: '20px' }}>
                            <Card.Body >
                                <Card.Title style={{ float: 'left' }}>{this.state.category.name}</Card.Title>
                                <BookList books={this.state.category.books}></BookList>
                            </Card.Body>
                        </Card>
                }
            </Context.Consumer>
        )
    }
}

export default CategoryItem;