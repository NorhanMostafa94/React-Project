import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BookAuthor from '../Authors/Books'
import { authors } from '../../data';
import { Container,Row } from 'react-bootstrap';


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

                        </div>
                        <div className="col-7 desc-block">
                            <h6>{this.state.author.name}</h6>
                            <p>
                                <span>Born:</span>
                                <span className="author-bio">{this.state.author.Born}</span>
                            </p>
                            <p>
                                <span>Website:</span>
                                <span className="author-web">{this.state.author.Website}</span>
                            </p>
                            <span>Genre:</span>
                            <span className="author-bio">{this.state.author.Genre}</span>
                            <p>
                                {this.state.author.bio}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">

                            <Container className="card-container" >
                                <Row className="justify-content-md-center">
                                {<BookAuthor books={this.state.author.authorBooks} />}
                                </Row>
                                </Container>
                        </div>
                        </div>

                    </div>


            </>
                )
            }
        }
export default AuthorDetails;