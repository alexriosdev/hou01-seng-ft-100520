import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

import PizzaAdapter from './static/PizzaAdapter'

class App extends Component {

  state = {
    pizzas: [],
    selectedPizza: {}
  }

  componentDidMount(){
    PizzaAdapter.getPizza()
    .then(pizzas => this.setState({ pizzas }))
  }

  handleEditPizza = (pizza) => {
    this.setState({ selectedPizza: pizza })
  }

  handleFormUpdate = (updatedPizza) => {
    fetch(`http://localhost:3000/pizzas/${updatedPizza.id}`,{
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPizza)
    }).then(res => res.json())
    .then(pizzaObj => {
      const updatedList = [...this.state.pizzas].map(pizza => {
        return pizza.id === pizzaObj.id ? pizzaObj : pizza
      })
      this.setState({ pizzas: updatedList, selectedPizza: {} })
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          selectedPizza={this.state.selectedPizza}
            handleFormUpdate={this.handleFormUpdate} />
        <PizzaList
          pizzas={this.state.pizzas}
            handleEditPizza={this.handleEditPizza} />
      </Fragment>
    );
  }
}

export default App;
