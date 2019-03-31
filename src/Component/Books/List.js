import React, { Component } from 'react';
import { Context } from '../../App';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';


class BooksList extends Component {

    render() {
        return (
            <Context.Consumer>
                {
                    value => (
                        value.state.books.map(d => <Link to={`/books/${d.id}`} key={d.id}><div>{d.name}<br/>{d.author}</div></Link>)
                    )
                }
            </Context.Consumer>
        )
    }
}

export default BooksList;