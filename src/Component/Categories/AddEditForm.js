import React, { Component } from "react";

import { Button, Modal, Form, Row, Col } from "react-bootstrap";

class AddEditCategoryForm extends Component {
  constructor(props, context) {
    super(props, context);

    // this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      show: this.props.show,
      validated: false,
      newCategory: this.props.newCategory,
      category: this.props.category,
      categories: this.props.categories,
      errmsg: ""
    };
  }

  handleClose() {
    this.setState(
      {
        show: false,
        category: {
          id: Number,
          name: ""
        }
      },
      () => {
        this.props.handleClose(this.state.categories);
      }
    );
  }

  onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { id } = this.state.category;
    let invalid = false;
    if (isNaN(id)) {
      this.state.categories.map(cat => {
        if (this.state.category.name === cat.name) {
          invalid = true;
        }
      });
      if (!invalid && this.state.category.name != "") {
        this.setState({
          categories: [
            ...this.state.categories,
            {
              id: this.state.categories.length + 1,
              name: this.state.category.name
            }
          ]
        });
      }
    } else {
      this.state.categories.find(category => {
        if (this.state.category.id === category.id) {
          category.name = this.state.category.name;
          return true;
        } else return false;
      });
    }
    if (form.checkValidity() === false || invalid) {
      event.stopPropagation();
    } else {
      this.handleClose();
    }
  }

  handleChange(e) {
    e.persist();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      validated: true,
      newCategory: false,
      category: { ...this.state.category, [name]: value }
    });
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            className="category-form"
            onSubmit={this.onSubmit}
            noValidate
            validated={this.state.validated}
          >
            <Form.Group as={Row} controlId="formCategory">
              <Form.Label column sm={4}>
                Category Name:
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter category name"
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.newCategory ? "" : this.state.category.name}
                />
                <Form.Control.Feedback type="invalid">
                  "invalid category name"
                </Form.Control.Feedback>
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
    );
  }
}

export default AddEditCategoryForm;
