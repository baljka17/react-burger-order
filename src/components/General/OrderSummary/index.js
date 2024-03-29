import React from "react";
import Button from "../Button";

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
      <p>
        <strong>Захиалгын дүн: {props.price}₮ </strong>
      </p>
      <p>Цааш үргэлжүүлэх үү?</p>
      <Button daragdsan={props.onCancel} btnType="Danger" text="ТАТГАЛЗАХ" />
      <Button
        daragdsan={props.onContinue}
        btnType="Success"
        text="ҮРГЭЛЖЛҮҮЛЭХ"
      />
    </div>
  );
};

export default OrderSummary;
