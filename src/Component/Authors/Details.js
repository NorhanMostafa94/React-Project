import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import BookAuthor from '../Authors/Books'
import { authors } from '../../data';
import { Row, Navbar } from 'react-bootstrap';

import Book from "../Books/BookItem";
import NavBar from '../shared/Navbar';

class AuthorDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: authors,
            author: {}
        }
    }


    componentDidMount() {
        const ID = this.props.match.params.id;
        const foundedAuthor = this.state.authors.filter((author) => {
            return author.id === Number(ID)
        })

        this.setState(
            { author: foundedAuthor[0] }
        )
    }


    render() {
        return (
            <>
            <NavBar/>
                <div className="container book-details-block">
                    <div className="row">
                        <div className="col-lg-3 col-sm-12">
                            <img src={this.state.author.cover} className="book-img" alt={this.state.author.cover}></img>

                        </div>
                        <div className="col-lg-7 col-sm-12 desc-block">
                            <h6 className="bookTitle">{this.state.author.name}</h6>
                            <p>
                                <span className="title">Born:</span>
                                <span className="author-bio title">{this.state.author.Born}</span>
                            </p>
                            <p>
                                <span className="title">Website:</span>
                                <span className="author-web title">{this.state.author.Website}</span>
                            </p>
                            <span className="title">Genre:</span>
                            <span className="author-bio title">{this.state.author.Genre}</span>
                            <p className="bio">
                                {this.state.author.bio}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Row className="justify-content-md-center">
                                {/* {<BookAuthor books={this.state.author.authorBooks} />} */}
                                {this.state.author.authorBooks === undefined ? "":
                                    this.state.author.authorBooks.map(d =>
                                    <Book key={d.id} {...d} />
                                )}
                            </Row>
                        </div>
                    </div>

                </div>


            </>
        )
    }
}
export default AuthorDetails;