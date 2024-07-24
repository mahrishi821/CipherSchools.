import React, { Component } from 'react';

class AddPizza extends Component {
  state = {
    name: "",
    description: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state, this.props);
    this.props.addCard(this.state); // Corrected this line
  }

  render() {
    return (
      <div id="add-pizza">
        <h2>Please fill the details</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" id="name" placeholder="Enter name.." onChange={this.handleChange}></input> <br></br>
          <label htmlFor="description">Description:</label><br></br>
          <textarea rows="10" cols="20" id="description" placeholder="Enter description.." onChange={this.handleChange}></textarea><br></br> {/* Added onChange */}
          <input type="submit" value="Add Pizza"></input>
        </form>
      </div>
    )
  }
}

export default AddPizza;
