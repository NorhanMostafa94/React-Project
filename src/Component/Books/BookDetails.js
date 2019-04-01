import React, { Component } from 'react';
const BDETAILS_URL = ' http://localhost:3004/AllBooks'
class BookDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {}
        }
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
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src={this.state.book.cover} className="book-img"></img>
                        </div>
                        <div className="col-8">
                            <h5>{this.state.book.title}</h5>
                            <h6>{this.state.book.author}</h6>
                            <span>
                                <i className="fas fa-star rating"></i>
                                <i className="fas fa-star rating"></i>
                                <i className="fas fa-star rating"></i>
                                <i className="fas fa-star rating"></i>
                                <span>{this.state.book.avgrating}</span>
                            </span>
                            <p>
                                {this.state.book.description}
                            </p>
                        </div>
                    </div>
                <div className="row">
                    <div>

                    </div>
                </div>
                </div>


            </>
        )
    }
}
export default BookDetails;