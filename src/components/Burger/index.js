import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";

const Burger = (props) => {
  let content = [];

  const items = Object.entries(props.ingred);
  items.map((el, index) => {
    for (let i = 0; i < el[1]; i++) {
      content.push(<BurgerIngredient key={`${index}${i}`} type={el[0]} />);
    }
  });

  if (content.length === 0) {
    content = "Орцоо сонгоно уу!";
  }
  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
