import React from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import * as actions from "../../redux/actions/orderActions";

import axios from "../../axios-orders";

class OrderPage extends React.Component {
  state = {
    orders: [],
    loading: false,
  };
  componentDidMount() {
    //   this.props.loadOrders(this.props.userId);
    this.setState({ loading: true });
    axios
      .get("/order.json")
      .then((response) => {
        this.setState({ orders: Object.entries(response.data).reverse() });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          this.state.orders.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    userId: state.signupReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: (userId) => dispatch(actions.loadOrders(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
// export default OrderPage;
