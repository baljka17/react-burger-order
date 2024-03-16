import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>Нийт үнийн дүн: {props.total}</p>
      {Object.keys(props.names).map((el) => (
        <BuildControl
          key={el}
          type={el}
          orts={props.names[el]}
          ortsNemeh={props.ortsNemeh}
          ortsHasah={props.ortsHasah}
        />
      ))}

      <button onClick={props.showConfirmModal} className={css.OrderButton}>
        Захиалах
      </button>
    </div>
  );
};

export default BuildControls;
