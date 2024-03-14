import React from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";

const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <BuildControl
        type="salad"
        orts="Салад"
        ortsNemeh={props.ortsNemeh}
        ortsHasah={props.ortsHasah}
      />
      <BuildControl
        type="cheese"
        orts="Бяслаг"
        ortsNemeh={props.ortsNemeh}
        ortsHasah={props.ortsHasah}
      />
      <BuildControl
        type="meat"
        orts="Үхрийн мах"
        ortsNemeh={props.ortsNemeh}
        ortsHasah={props.ortsHasah}
      />
      <BuildControl
        type="bacon"
        orts="Гахайн мах"
        ortsNemeh={props.ortsNemeh}
        ortsHasah={props.ortsHasah}
      />
    </div>
  );
};

export default BuildControls;
