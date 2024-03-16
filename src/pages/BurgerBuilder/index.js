import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/General/OrderSummary";
import axios from "../../axios-order";
import Spinner from "../../components/General/Spinner";

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
    loading: false,
  };
  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  continueOrder = () => {
    this.setState({ loading: true });
    const order = {
      orts: this.state.ingredients,
      dun: this.state.totalPrice,
      addr: {
        city: "Ulaanbaatar",
        dist: "BZD",
        khoroo: "26",
      },
    };
    axios
      .post("/order.json", order)
      .then((response) => {
        console.log("Wrote successfully!");
      })
      .finally(() => {
        this.setState({ loading: false });
      });
    console.log("click on the contunue ...");
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

  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get("/order.json")
      .then((response) => {
        const arr = Object.entries(response.data);
        arr.forEach((el) => {
          console.log(el[1].addr.city + " ===> " + el[1].dun);
        });

        const lastOrder = arr[arr.length - 1][1];
        this.setState({
          ingredients: lastOrder.orts,
          totalPrice: lastOrder.dun,
        });
        console.log(lastOrder);
      })
      .finally(() => {
        this.setState({ loading: false });
      });
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
          showConfirmModal={this.showConfirmModal}
        />
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              names={INGREDIENT_NAMES}
              ingredients={this.state.ingredients}
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
            />
          )}
        </Modal>
      </div>
    );
  }
}

export default BurgerBuilder;
