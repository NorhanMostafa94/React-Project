import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Rating from './Rating';
import Reviews from './Reviews'
import {Link} from 'react-router-dom'
import { books } from '../../data';
// const BDETAILS_URL = ' http://localhost:3004/AllBooks';
class BookDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: books,
            book: {}
        }
    }


    componentDidMount() {
        const ID = this.props.match.params.id;
        const foundedBook = this.state.books.filter((book) => {
            return book.id === Number(ID)
        })
       
        this.setState(
            { book: foundedBook[0] }
        )
    }
 

    render() {
        return (
            <>
                <div className="container book-details-block">
                    <div className="row">
                        <div className="col-3">
                            <img src={this.state.book.cover} className="book-img" alt={this.state.book.cover}></img>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="book-details-dropdwn">
                                    Want to Read
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Currently Reading</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Read</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Want to Read</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <span>
                                <div className="rate-header">Rate this book</div>
                                <span className="book-details-stars ">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </span>
                            </span>
                        </div>
                        <div className="col-7 desc-block">
                            <h5 className="bookTitle">{this.state.book.title}</h5>
                            <Link to={`/authors/${this.state.book.authorID}`} style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }}>{this.state.book.author}</Link>
                            <Link to={`/categories/${this.state.book.categoryID}`} style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }}>{this.state.book.category}</Link>

                            {/* <h6>{this.state.book.author}</h6>
                            <h6>{this.state.book.category}</h6> */}
                            <span>
                                {<Rating rating={this.state.book.rating} />}
                                <span className="avgRate">{this.state.book.avgrating}</span>
                            </span>
                            <p>
                                {this.state.book.description}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {<Reviews reviews={this.state.book.reviews} />}

                        </div>
                    </div>
                </div>


            </>
        )
    }
}
export default BookDetails;