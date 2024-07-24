import React, { Component } from 'react';
import Pizza from './components/Pizza.js'; // Ensure no extra spaces
import AddPizza from './components/AddPizza.js';

class App extends Component {
  state = {
    dynamicName: "React is mind blowing",
    pizzaPlaces: [
      { name: "pizzaHut", description: "Best Pizza", id: 1 },
      { name: "Dominoes", description: "Best Pizza in town", id: 2 },
      { name: "papaJhones", description: "pizza place", id: 3 },
      { name: "Ovenexpress", description: "authentic pizza", id: 4 },
    ]
  }

  addCard = (details) => {
    console.log(details);
    details.id = Math.ceil(7+ Math.random()*10);// this.state.pizzaPlces.lenght()+1
    // this.state.pizzaPlaces.push(details);
    // Serad operator : copy the elemt from the source[Array,object] to the destination[Array,object
    // this is an es6 feature
    this.setState({
      pizzaPlaces:[...this.state.pizzaPlaces,details]
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.dynamicName}</h1>
        <Pizza pizzaPlaces={this.state.pizzaPlaces}></Pizza>
        <AddPizza addCard={this.addCard} /> {/* Corrected this line */}
      </div>
    )
  }
}

export default App;
