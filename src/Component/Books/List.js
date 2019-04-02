import React, { Component } from 'react';
import { Context } from '../../App';
import Book from '../Categories/BookItem'


class BooksList extends Component {

    render() {
        return (
            <Context.Consumer>
                {
                    value => (
                        value.state.books.map(d => <Book key={d.id} {...d}></Book>)
                    )
                }
            </Context.Consumer>
        )
    }
}

export default BooksList;