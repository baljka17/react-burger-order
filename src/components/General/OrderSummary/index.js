import React from "react";

const OrderSummary = (props) => {
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны захиалга</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.names[el]}: {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>Цааш үргэлжүүлэх үү?</p>
    </div>
  );
};

export default OrderSummary;
