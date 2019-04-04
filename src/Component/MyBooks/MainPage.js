import React, { Component } from 'react';
import Listing from './Listing'
import {AllBooks} from '../../data'
// const URL_ALL_BOOKS = ' http://localhost:3004/AllBooks';

import NavBar from '../shared/Navbar'

class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: AllBooks,
            data: AllBooks
        }
    }
    handleClick = (event) => {
        event.preventDefault();
        const name = event.target.name;
        console.log(name)

        if (name === 'all') {
            this.setState({
                books: this.state.data,

            })
        }
        else {
            // debugger

            const arr = this.state.data.filter((el) =>
                el.status === name
            )
            this.setState({
                books: arr

            })

        }

    }
    render() {

        return (
            <>
            <NavBar />

            <div className="container">
                <div className="row books-header">
                    <div className="col-6">
                        <h3 className="books_title-header">My Books</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 bookshelves">
                        <h6 className="bookshelves-title">Bookshelves </h6>
                        <button onClick={this.handleClick} name="all" className="books-link">All</button>
                        <br />
                        <button onClick={this.handleClick} name="read" className="books-link">Read</button>
                        <br />
                        <button onClick={this.handleClick} name="currently-reading" className="books-link">Currently Reading</button>
                        <br />
                        <button onClick={this.handleClick} name="to-read" className="books-link">Want to read</button>
                    </div>
                    <div className="col-9 listing">
                        {<Listing books={this.state.books} ></Listing>}
                    </div>
                </div>
            </div>
            </>

        )
    }
}
export default MainPage;