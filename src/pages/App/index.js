import { Component } from "react";
import Toolbar from "../../components/Toolbar";
import SideBar from "../../components/SideBar";
import BurgerBuilder from "../BurgerBuilder";
import css from "./style.module.css";
import OrderPage from "../OrderPage";
import { Route, Routes, Switch } from "react-router-dom";

class App extends Component {
  state = {
    showSidebar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />

        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSideBar={this.toggleSideBar}
        />

        <main className={css.Content}>
          <Routes>
            <Route path="/orders" component={OrderPage} />
            <Route path="/" component={BurgerBuilder} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
