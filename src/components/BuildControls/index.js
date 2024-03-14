import React from "react";
import BuildControl from "../BuildControl";

const BuildControls = (props) => {
  return (
    <div>
      <BuildControl
        type={props.type}
        orts={props.ingred}
        ortsNemeh={props.ortsNemeh}
      />
    </div>
  );
};

export default BuildControls;
