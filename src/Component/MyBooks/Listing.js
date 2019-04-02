import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Paging from './Pagination';
import Rating from '../Books/Rating';
const Listing = (props) => {

    
    const displayBooks = ({ books }) => {
        if ({ books }) {

            return books.map((book) => {
                return (
                    
                        <tr key={book.id} >
                            <td><img src={book.cover} alt=""  className="image-listing"/></td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.avgrating}</td>
                            <td>
                               {/* {rating(book.rating)} */}
                                {<Rating key={book.id} rating={book.rating} />}
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
