import React, { Component } from 'react';
import Listing from './Listing'
const URL_ALL_BOOKS = ' http://localhost:3004/AllBooks';

class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [{}],
            data: [{}]
        }
    }
    componentDidMount() {

        fetch(URL_ALL_BOOKS, {
            method: 'GET'
        })
            .then(reponse => reponse.json())
            .then(json => {
                console.log(json)

                this.setState({
                    books: json,
                    data: json
                })
            })
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

            <div className="container">
                <div className="row books-header">
                    <div className="col-6">
                        <h3 className="books_title-header">My Books</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 bookshelves">
                        <h6>Bookshelves </h6>
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

        )
    }
}
export default MainPage;