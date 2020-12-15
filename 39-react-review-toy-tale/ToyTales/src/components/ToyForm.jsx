import React, { Component } from 'react';

class ToyForm extends Component {

  initialState = {
    name: "",
    image: "",
    likes: 0
  }

  state = this.initialState

  handleInputChange = (e) => {
    // if(e.target.name === "name"){
    //   this.setState({ name: e.target.value })
    // }else{
    //   this.setState({ image: e.target.value })
    // }
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addNewToy(this.state)
    this.setState(this.initialState)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input onChange={this.handleInputChange} value={this.state.name} type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input onChange={this.handleInputChange} value={this.state.image} type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
