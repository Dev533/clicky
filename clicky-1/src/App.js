import React, { Component } from "react";
import FoodCard from "./components/FoodCard";
import Wrapper from "./components/Wrapper";
import foods from "./foods.json";
import "./App.css";

class App extends Component {
  // Setting this.state.foods to the foods json array
  state = {
    foods,
    idCounter: []
  };
  shuffleFoods = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])
  );


  checkedTwice = id => {
    // Filter this.state.foods for foods with an id NOT equal to the id being removed.
    let foods = this.state.foods
    // Set this.state.foods equal to the new foods array.
    this.state.idCounter.push(id);
    console.log(id)
    console.log(this.state.idCounter)
    console.log(foods);
    foods = this.shuffleFoods(foods)
    this.setState({ foods });
  };

 

  

  render() {
    return (
  <Wrapper>
    <h1 className="title">Foods List</h1>
    {this.state.foods.map(food => (
      <FoodCard 
      checkedTwice={this.checkedTwice}
      id={food.id}
      key={food.id}
      name={food.name}
      image={food.image}
      />
    ))}
  </Wrapper>
    );
  }
}

export default App;
