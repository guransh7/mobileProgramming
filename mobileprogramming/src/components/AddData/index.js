import React, { Component } from "react";

class AddData extends Component {
  state = {
    inputValue: ""
  };

  handleKeyPress(event) {
    this.setState({ inputValue: event.target.value });
    if (event.key === "Enter") this.props.onSubmitClick(this.state.inputValue);
  }
  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          aria-label="Recipient's username"
          onKeyUp={event => this.handleKeyPress(event)}
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => this.props.onSubmitClick(this.state.inputValue)}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default AddData;
