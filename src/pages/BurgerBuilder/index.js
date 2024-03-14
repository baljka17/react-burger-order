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
  ortNemeh = (orts) => {
    console.log(orts);
  };
  render() {
    return <Burger ingred={this.state.ingredients} />;
  }
}

export default BurgerBuilder;
