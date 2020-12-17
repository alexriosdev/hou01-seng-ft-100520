export default class PizzaAdapter {
  static getPizza(){
    return fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
  }
}
