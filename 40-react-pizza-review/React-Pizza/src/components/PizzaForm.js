import React from "react"

class PizzaForm extends React.Component {

  state = {
    id: null,
    topping: '',
    size: '',
    vegetarian: false
  }

  componentDidUpdate(prevProps){
    if (this.props.selectedPizza !== prevProps.selectedPizza) {
      const { id, topping, size, vegetarian } = this.props.selectedPizza
      this.setState({ id, topping, size, vegetarian })
    }
  }

  handleInputChange = (e) => {
    if(e.target.type === "text"){
      this.setState({ topping: e.target.value })
    }else if(e.target.type === "select-one"){
      this.setState({ size: e.target.value })
    }else{
      if(e.target.value === "Vegetarian"){
        this.setState({ vegetarian: true })
      }else{
        this.setState({ vegetarian: false })
      }
    }
  }

  handleUpdatePizza = () => {
    this.props.handleFormUpdate(this.state)
    this.setState({
      id: null,
      topping: '',
      size: '',
      vegetarian: false
    })
  }

  render(){

    const { topping, size, vegetarian } = this.state

    return(
        <div className="form-row">
          <div className="col-5">
              <input type="text" onChange={this.handleInputChange} className="form-control" placeholder="Pizza Topping" value={
                  topping
                }/>
          </div>
          <div className="col">
            <select value={size} onChange={this.handleInputChange} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" onChange={this.handleInputChange} type="radio" value="Vegetarian" checked={vegetarian}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" onChange={this.handleInputChange} type="radio" value="Not Vegetarian" checked={!vegetarian}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={this.handleUpdatePizza}>Submit</button>
          </div>
        </div>
    )
  }
}

export default PizzaForm
