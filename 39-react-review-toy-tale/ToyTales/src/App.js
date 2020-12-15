import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(toys => this.setState({ toys }))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addNewToy = (newToy) => {
    fetch('http://localhost:3000/toys',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(toy => {
      const newToysList = [...this.state.toys,toy]
      this.setState({ toys: newToysList })
    })
  }

  removeToy = (toyId) => {
    fetch(`http://localhost:3000/toys/${toyId}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(_ => {
        const newToysList = [...this.state.toys].filter(toy => toy.id !== toyId)
        this.setState({ toys: newToysList })
    })
  }

  likeThisToy = (toy) => {
    fetch(`http://localhost:3000/toys/${toy.id}`,{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: toy.likes + 1
      })
    }).then(res => res.json())
    .then(updatedToy => {
      const updatedToysList = [...this.state.toys].map(toy => {
        return toy.id === updatedToy.id ? updatedToy : toy
      })
      this.setState({ toys: updatedToysList })
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addNewToy={this.addNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} removeToy={this.removeToy} likeThisToy={this.likeThisToy} />
      </>
    );
  }

}

export default App;
