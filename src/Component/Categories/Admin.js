import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { categories } from "../../data";
import AddEditCategoryForm from "./AddEditForm";

class CategoryAdmin extends Component {
  constructor(props) {
    super(props);

    this.categoryform = this.categoryform.bind(this);

    this.state = {
      categories: categories,
      newCategory: false,
      category: {},
      show: false
    };
  }

  handleClose = newCategories => {
    this.setState({
      show: false,
      categories: newCategories
    });
  };

  categoryform(formType, category) {
    this.setState(
      {
        newCategory: formType,
        category: category,
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
              <th
                style={{
                  position: "absolute",
                  right: "0rem",
                  fontSize: "20px"
                }}
              >
                <i
                  className="fas fa-plus-circle"
                  onClick={() =>
                    this.categoryform(true, {
                      id: Number,
                      name: ""
                    })
                  }
                />
              </th>
            </tr>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.categories.map(category => {
              return (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>
                    <div className="tdFlex">
                      <i
                        className="fas fa-pen"
                        onClick={() => this.categoryform(false, category)}
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
          <AddEditCategoryForm
            // ref={this.BookModalRef}
            newCategory={this.state.newCategory}
            category={this.state.category}
            show={this.state.show}
            categories={this.state.categories}
            handleClose={this.handleClose}
          />
        )}
      </>
    );
  }
}
export default CategoryAdmin;
