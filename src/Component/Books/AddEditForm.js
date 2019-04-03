import React, { Component } from "react";

import { Button, Modal, Form, Row, Col } from "react-bootstrap";

class AddEditBookForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.saveBook = this.saveBook.bind(this);

    this.state = {
      count: 0,
      show: false,
      newBook: false,
      categories: [],
      author: [],
      currentBook: {
        id: Number,
        title: "",
        category: "",
        author: "",
        cover: ""
      },
      books: []
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState(
      {
        newBook: this.props.newBook,
        currentBook: this.props.currentBook,
        categories: this.props.categories,
        author: this.props.author,
        books: this.props.books
      },
      this.setState({ show: true })
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
      this.setState(
        {
          count: this.state.count + 1
        },
        () => {
          this.setState(
            {
              currentBook: { ...this.state.currentBook, id: this.state.count }
            },
            () => {
              this.setState(
                {
                  books: [...this.state.books, this.state.currentBook]
                },
                () => {
                  this.setState({
                    currentBook: {
                      id: Number,
                      title: "",
                      category: "",
                      author: "",
                      cover: ""
                    }
                  });
                  console.log(this.state.books);
                }
              );
            }
          );
        }
      );
    } else {
      this.state.books.find(element => {
        if (this.state.currentBook.id === element.id) {
          element = this.state.currentBook;
          return element;
        } else return this.state.currentBook;
      });
      console.log(this.state.books);
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
                  {this.state.author.map(author => (
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
