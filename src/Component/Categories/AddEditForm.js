import React, { Component } from "react";

import { Button, Modal, Form, Row, Col } from "react-bootstrap";

class AddEditCategoryForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      show: false,
      validated: false,
      newCategory: false,
      category: {
        id: Number,
        name: ""
      },
      categories: [
        {
          id: 1,
          name: "sports"
        }
      ]
    };
  }

  handleClose() {
    this.setState({
      show: false,
      validated: true,
      category: {
        id: Number,
        name: ""
      }
    });
  }

  handleShow() {
    //here should get state from the props and then add it in state, then make sure that the right entery
    //in the input is right
    this.setState({
      newCategory: this.props.newCategory,
      category: this.props.category,
      validated: false,
      show: true
    });
  }

  onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { id } = this.state.category;
    if (isNaN(id)) {
      this.state.categories.map(cat => {
        if (cat.name === this.state.category.name) {
          console.log(cat.name);
          console.log(this.state.category.name);
          this.state.validated = "false";
        } else {
          this.setState(
            {
              categories: [
                ...this.state.categories,
                {
                  id: this.state.categories.length + 1,
                  name: this.state.category.name
                }
              ]
            },
            () => console.log(this.state.categories)
          );
        }
      });
    } else {
      const exist = this.state.categories.find(category => {
        console.log(
          category.name,
          category.id,
          this.state.category.name,
          this.state.category.id
        );
        if (this.state.category.id === category.id) {
          category.name = this.state.category.name;
          return true;
        } else return false;
      });
      if (exist);
      else
        this.setState(
          {
            categories: [
              ...this.state.categories,
              {
                id: this.state.category.id,
                name: this.state.category.name
              }
            ]
          },
          () => console.log(this.state.categories)
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
        newCategory: false,
        category: { [name]: value }
      },
      () => console.log(this.state.category)
    );
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
              </Col>
              <Col sm={{ span: 6, offset: 3 }}>
                <Form.Control.Feedback type="invalid">
                  Invalid Category Name
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
