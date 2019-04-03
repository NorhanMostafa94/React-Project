import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import imgg from '../../assets/images/16.png'

class Author extends Component {
    render() {
        const { name, id, cover } = this.props;
        return (
            // <Card className="card-item" key={id} >
            //     <Card.Body>
            //         <Card.Img style={{ height: '250px', boxShadow: '0px 3px 5px 0px #adadab' }} variant="top" src={cover} />
            //         <div>
            //             <Link className="author-details-bok-title" to={`/authors/${id}`} style={{ textDecoration: 'none' }}>{name}</Link>
            //         </div>
            //     </Card.Body>
            // </Card>
                <div class="card-team-section">
                    <div class="card-team">
                        <div class="card-team__body">
                            <img src={cover} alt="" />
                        </div>
                        <div class="card-team__footer text-center">
                            <h5 class="footer__title">
                     <Link className="author-details-bok-title" to={`/authors/${id}`} style={{ textDecoration: 'none' }}>{name}</Link>
                            </h5>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Author;