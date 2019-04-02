import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { authors } from '../../data';

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
                <div className="container book-details-block">
                    <div className="row">
                        <div className="col-3">
                            <img src={this.state.author.cover} className="book-img" alt={this.state.author.cover}></img>
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
                            <h5 className="bookTitle">{this.state.author.title}</h5>
                            <h6>{this.state.author.name}</h6>
                            <p>
                                {this.state.author.bio}
                            </p>
                        </div>
                    </div>

                </div>


            </>
        )
    }
}
export default AuthorDetails;