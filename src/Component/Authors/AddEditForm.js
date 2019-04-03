import React, { Component } from "react";

import { Button, Modal, Form, Row, Col } from "react-bootstrap";

class AddEditAuthorForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      show: false,
      newAuthor: false,
      author: {
        id: Number,
        name: "",
        cover: "",
        Born: "",
        bio: "",
        Website: ""
      },
      authors: [
        {
          id: 1,
          name: "first author",
          cover: "link",
          Born: "8/10/2019",
          bio: "great author",
          Website: "www"
        }
      ]
    };
  }

  handleClose() {
    this.setState({
      show: false,
      author: {
        id: Number,
        name: "",
        cover: "",
        Born: "",
        bio: "",
        Website: ""
      }
    });
  }

  handleShow() {
    this.setState({
      newAuthor: this.props.newAuthor,
      author: this.props.author,
      show: true
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { id } = this.state.author.id;
    console.log(this.state.authors);
    if (isNaN(id)) {
      this.state.authors.map(auth => {
        if (auth.name === this.state.author.name) {
          this.state.validated = "false";
        } else {
          this.setState(
            {
              authors: [
                ...this.state.authors,
                {
                  ...this.state.author,
                  id: this.state.authors.length + 1
                }
              ]
            },
            () => {
              console.log(this.state.authors);
            }
          );
        }
      });
    } else {
      const exist = this.state.authors.find(author => {
        if (this.state.author.id === author.id) {
          author = this.state.author;
          return true;
        } else return false;
      });
      if (!exist)
        this.setState(
          {
            authors: [...this.state.authors, this.state.author]
          },
          () => console.log(this.state.authors)
        );
    }
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      this.handleClose();
    }
  }

  handleChange(e) {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        newAuthor: false,
        author: { ...this.state.author, [name]: value }
      },
      () => console.log(this.state.author)
    );
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Author</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              className="author-form"
              onSubmit={this.onSubmit}
              noValidate
              validated={this.state.validated}
              style={{ padding: "1rem" }}
            >
              <Form.Group as={Row} controlId="formAuthorName">
                <Form.Label column sm={4}>
                  Author Name:
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Author name"
                    onChange={this.handleChange}
                    name="name"
                    value={this.state.newAuthor ? "" : this.state.author.name}
                  />
                </Col>
                <Col sm={{ span: 6, offset: 3 }}>
                  <Form.Control.Feedback type="invalid">
                    Invalid Category Name
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formAuthorCover">
                <Form.Label column sm={4}>
                  Image:
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Author image"
                    onChange={this.handleChange}
                    name="cover"
                    value={this.state.newAuthor ? "" : this.state.author.cover}
                  />
                </Col>
                <Col sm={{ span: 6, offset: 3 }}>
                  <Form.Control.Feedback type="invalid">
                    Invalid Image
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formAuthorBD">
                <Form.Label column sm={4}>
                  Author BirthDate:
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Author Birthdate"
                    onChange={this.handleChange}
                    name="Born"
                    value={this.state.newAuthor ? "" : this.state.author.Born}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formAuthorBIO">
                <Form.Label column sm={4}>
                  Author BIO:
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Author Biography"
                    onChange={this.handleChange}
                    name="bio"
                    value={this.state.newAuthor ? "" : this.state.author.bio}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formAuthorWS">
                <Form.Label column sm={4}>
                  Author Website:
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter Author Website"
                    onChange={this.handleChange}
                    name="Website"
                    value={
                      this.state.newAuthor ? "" : this.state.author.Website
                    }
                  />
                </Col>
              </Form.Group>

              <Col sm={{ span: 4, offset: 4 }}>
                <Button variant="primary" type="submit">
                  Add
                </Button>
              </Col>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default AddEditAuthorForm;