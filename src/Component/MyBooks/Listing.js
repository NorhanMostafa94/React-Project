import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Paging from './Pagination';
const Listing = (props) => {

    const rating = (rating) => {
        let stars = [];
        for (let index = 0; index < rating; index++) {
            stars.push( <i className="fas fa-star rating"></i>)

        }
        return stars
    }
    const displayBooks = ({ books }) => {
        if ({ books }) {

            return books.map((el) => {
                return (
                    <>
                        <tr>
                            <td><img src={el.cover} alt=""  className="image-listing"/></td>
                            <td>{el.title}</td>
                            <td>{el.author}</td>
                            <td>{el.avgrating}</td>
                            <td>
                                {rating(el.rating)}
                            </td>
                            <td>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Want to Read
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Currently Reading</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Read</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Want to Read</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>

                    </>

                )
            })
        }
    }
    return (
        <>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th className="table_header">cover</th>
                        <th className="table_header table__title">title</th>
                        <th className="table_header">author</th>
                        <th className="table_header">avg rating</th>
                        <th className="table_header">rating</th>
                        <th className="table_header">shelves</th>
                    </tr>
                </thead>
                <tbody>
                    {displayBooks(props)}
                </tbody>
            </Table>
            <Paging />
        </>
    )
}
export default Listing;
