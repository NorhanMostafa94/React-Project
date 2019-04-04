import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Author extends Component {
    render() {
        const { name, id, cover } = this.props;
        return (

                <div className="card-team-section">
                    <div className="card-team">
                        <div className="card-team__body">
                            <img src={cover} alt="" />
                        </div>
                        <div className="card-team__footer text-center">
                            <h5 className="footer__title">
                     <Link className="author-details-bok-title" to={`/authors/${id}`} style={{ textDecoration: 'none' }}>{name}</Link>
                            </h5>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Author;