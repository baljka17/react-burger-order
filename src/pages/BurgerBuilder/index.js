import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/General/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 150,
  cheese: 250,
  bacon: 600,
  meat: 900,
};
const INGREDIENT_NAMES = {
  salad: "Салад",
  bacon: "Гахайн мах",
  cheese: "Бяслаг",
  meat: "Үрхийн мах",
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 3,
      bacon: 2,
      meat: 1,
    },
    totalPrice: 1000,
  };
  ortsNemeh = (type) => {
    const newIngredient = { ...this.state.ingredients };
    newIngredient[type]++;

    let newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, ingredients: newIngredient });
    console.log(type + " : " + newIngredient[type]);
  };
  ortsHasah = (type) => {
    const newIngredient = { ...this.state.ingredients };
    if (newIngredient[type] > 0) {
      newIngredient[type]--;
      let newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({ totalPrice: newPrice, ingredients: newIngredient });
      console.log(type + " : " + newIngredient[type]);
    }
  };
  render() {
    return (
      <div>
        <Burger ingred={this.state.ingredients} />
        <BuildControls
          names={INGREDIENT_NAMES}
          total={this.state.totalPrice}
          ortsNemeh={this.ortsNemeh}
          ortsHasah={this.ortsHasah}
        />
        <Modal>
          <OrderSummary
            names={INGREDIENT_NAMES}
            ingredients={this.state.ingredients}
          />
        </Modal>
      </div>
    );
  }
}

export default BurgerBuilder;
