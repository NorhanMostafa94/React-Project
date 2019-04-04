import React, { Component } from "react";

import { Button, Modal, Form, Row, Col } from "react-bootstrap";

class AddEditBookForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.saveBook = this.saveBook.bind(this);

    this.state = {
      show: this.props.show,
      newBook: this.props.newBook,
      categories: this.props.categories,
      authors: this.props.authors,
      currentBook: this.props.book,
      books: []
    };
  }

  handleClose() {
    this.setState(
      {
        currentBook: {
          id: Number,
          title: "",
          category: "",
          author: "",
          cover: ""
        },
        show: false
      },
      () => {
        this.props.handleClose();
      }
    );
  }

  handlechange(e) {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      newBook: false,
      currentBook: { ...this.state.currentBook, [name]: value }
    });
  }

  saveBook() {
    const { id } = this.state.currentBook;
    if (isNaN(id)) {
      this.setState({
        books: [
          ...this.state.books,
          { ...this.state.currentBook, id: this.state.books.length + 1 }
        ]
      });
    } else {
      this.state.books.find(element => {
        if (this.state.currentBook.id === element.id) {
          element = this.state.currentBook;
          return element;
        } else return this.state.currentBook;
      });
    }

    this.handleClose();
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* AddBook */}
            <Form.Group as={Row} controlId="addBook">
              <Form.Label column sm="3">
                Book Title
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  placeholder="Add Book Title"
                  onChange={this.handlechange}
                  name="title"
                  value={this.props.newBook ? "" : this.state.currentBook.title}
                />
              </Col>
            </Form.Group>
            {/* Select Category */}
            <Form.Group as={Row} controlId="selectCategory">
              <Form.Label column sm="3">
                Category
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  as="select"
                  name="category"
                  onChange={this.handlechange}
                  value={
                    this.state.newBook ? "" : this.state.currentBook.category
                  }
                >
                  {this.state.categories.map(category => (
                    <option key={category.id}>{category.name}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
            {/* Select Author */}
            <Form.Group as={Row} controlId="selectAuthor">
              <Form.Label column sm="3">
                Author
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  as="select"
                  name="author"
                  onChange={this.handlechange}
                  value={
                    this.state.newBook ? "" : this.state.currentBook.author
                  }
                >
                  {this.state.authors.map(author => (
                    <option key={author.id}>{author.name}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="BookCover">
              <Form.Label column sm="3">
                Book Cover:
              </Form.Label>
              <Col sm="9">
                {/* <InputGroup> */}
                <Form.Control
                  type="text"
                  placeholder="Add Book Cover"
                  onChange={this.handlechange}
                  name="cover"
                  value={this.state.newBook ? "" : this.state.currentBook.cover}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={this.state.newBook ? this.handleClose : this.saveBook}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddEditBookForm;
