import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              placeholder="add todo item"
              className="form-control text-capitalize"
              onChange={handleChange}
              value={item}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary text-uppercase mt-3 btn-block"
          >
            Add Item
          </button>
        </form>
      </div>
    );
  }
}
