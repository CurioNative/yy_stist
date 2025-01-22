/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import './PropertyDefaultWrapper.css';

export const PropertyDefaultWrapper = ({ property1 }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className="property-default-wrapper"
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="text-wrapper-3">PARTNER</div>

      <div className={`text-wrapper-4 property-1-${state.property1}`}>LOGO</div>

      {state.property1 === "variant-2" && (
        <div className="div-wrapper">
          <div className="frame-2">
            <div className="frame-3">
              <div className="text-wrapper-5">about</div>

              <img
                className="img"
                alt="Arrow"
                src="https://c.animaapp.com/DV3wXYri/img/arrow-1.svg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}
export default PropertyDefaultWrapper;