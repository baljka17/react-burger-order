import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 3,
      bacon: 2,
      meat: 1,
    },
  };
  ortsNemeh = (type) => {
    const newIngredient = { ...this.state.ingredients };
    newIngredient[type]++;
    this.setState({ ingredients: newIngredient });
    console.log(type + " : " + newIngredient[type]);
  };
  ortsHasah = (type) => {
    const newIngredient = { ...this.state.ingredients };
    if (newIngredient[type] > 0) {
      newIngredient[type]--;
      this.setState({ ingredients: newIngredient });
      console.log(type + " : " + newIngredient[type]);
    }
  };
  render() {
    return (
      <div>
        <Burger ingred={this.state.ingredients} />
        <BuildControls ortsNemeh={this.ortsNemeh} ortsHasah={this.ortsHasah} />
      </div>
    );
  }
}

export default BurgerBuilder;
