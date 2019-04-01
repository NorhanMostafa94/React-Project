import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
const BDETAILS_URL = ' http://localhost:3004/AllBooks'
class BookDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {}
        }
    }
    rating = (rating) => {
        let stars = [];
        for (let index = 0; index < rating; index++) {
            stars.push(<i className="fas fa-star "></i>)

        }
        return stars
    }
    componentDidMount() {

        // fetch(`${BDETAILS_URL}/${this.props.match.params.bookid}`, {

        fetch(`${BDETAILS_URL}/11`, {
            method: 'GET'
        })
            .then(reponse => reponse.json())
            .then(json => {

                console.log(json)
                this.setState({
                    book: json,

                }, () => {
                    console.log(this.state)
                })
            })
    }

    render() {
        return (
            <>
                <div className="container book-details-block">
                    <div className="row">
                        <div className="col-3">
                            <img src={this.state.book.cover} className="book-img"></img>
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
                                <span className="book-details-stars">
                                    {this.rating(this.state.book.rating)}
                                </span>
                            </span>
                        </div>
                        <div className="col-7 desc-block">
                            <h5 className="bookTitle">{this.state.book.title}</h5>
                            <h6>{this.state.book.author}</h6>
                            <h6>{this.state.book.category}</h6>
                            <span>
                                <i className="fas fa-star rating"></i>
                                <i className="fas fa-star rating"></i>
                                <i className="fas fa-star rating"></i>
                                <i className="fas fa-star rating"></i>
                                <span className="avgRate">{this.state.book.avgrating}</span>
                            </span>
                            <p>
                                {this.state.book.description}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {/* <h7>{this.state.book.reviews.name}</h7> */}
                            
                        </div>
                    </div>
                </div>


            </>
        )
    }
}
export default BookDetails;