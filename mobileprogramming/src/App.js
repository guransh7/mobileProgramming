import React, { Component } from "react";
import "./App.css";
import AddData from "./components/AddData";
import DisplayData from "./components/DisplayData";

class App extends Component {
  state = {
    data: []
  };
  removeData = id => {
    const data = this.state.data.filter((value, index) => {
      return value.id !== id;
    });
    this.setState({ data: data });
  };

  onSubmitClick = input => {
    var currentdate = new Date();
    // apoorva 
    this.state.data.push({
      id: this.state.data.length + 1,
      name: input,
      CreatedDate:
        currentdate.getDate() +
        "/" +
        (currentdate.getMonth() + 1) +
        "/" +
        currentdate.getFullYear() +
        " @ " +
        currentdate.getHours() +
        ":" +
        currentdate.getMinutes() +
        ":" +
        currentdate.getSeconds(),
      remove: this.removebuttonReturn(this.state.data.length + 1)
    });
    this.setState({});
  };

  removebuttonReturn(id) {
    return (
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={this.removeData.bind(this, id)}
      >
        Remove
      </button>
    );
  }
  render() {
    return (
      <div className="parentDiv">
        <div className="spaceContainer" />
        <div className="AppDiv">
          <AddData onSubmitClick={this.onSubmitClick} />
          <DisplayData removeData={this.removeData} data={this.state.data} />
        </div>
        <div className="spaceContainer" />
      </div>
    );
  }
}

export default App;
