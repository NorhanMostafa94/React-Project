import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { books, categories, authors } from "../../data";
import AddEditBookForm from "./AddEditForm";

class BookAdmin extends Component {
  constructor(props) {
    super(props);

    this.bookform = this.bookform.bind(this);

    this.state = {
      categories: categories,
      authors: authors,
      newBook: false,
      book: {},
      show: false
    };
  }

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  bookform(formType, book) {
    this.setState(
      {
        newBook: formType,
        book: book,
        show: true
      },
      () => console.log(this.state)
    );
  }
  render() {
    return (
      <>
        <Table hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Category</th>
              <th>Author Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => {
              return (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>
                    <img
                      src={book.cover}
                      style={{ width: "100px", height: "150px" }}
                      alt={book.name}
                    />
                  </td>
                  <td>{book.title}</td>
                  <td>{book.category}</td>
                  <td>{book.author}</td>
                  <td>
                    <div className="tdFlex">
                      <i
                        className="fas fa-pen"
                        onClick={() => this.bookform(false, book)}
                      />
                      <i className="fas fa-eraser" />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {this.state.show && (
          <AddEditBookForm
            // ref={this.BookModalRef}
            newBook={this.state.newBook}
            book={this.state.book}
            show={this.state.show}
            categories={this.state.categories}
            authors={this.state.authors}
            handleClose={this.handleClose}
          />
        )}
      </>
    );
  }
}
export default BookAdmin;
