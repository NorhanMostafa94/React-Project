import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const Paging = () => {
    return (
        <Pagination className="paging">
           
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item >{4}</Pagination.Item>

            <Pagination.Next />
           
        </Pagination>
    )
}
export default Paging