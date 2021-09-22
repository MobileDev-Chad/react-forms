import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: "",
      height: "",
      color: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.createBox(newBox);
    this.setState({
      width: "",
      height: "",
      color: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="NewBoxForm">
          <label htmlfor="width">Width: </label>
          <input
            id="width"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <label htmlfor="height">Height: </label>
          <input
            id="height"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <label htmlfor="color">Backgound Color: </label>
          <input
            id="color"
            name="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
          <button>New Box↓↓↓</button>
        </div>
      </form>
    );
  }
}
export default NewBoxForm;
