/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import './Frame.css';

export const Frame = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`frame ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="text-wrapper">TITLE PARTNER</div>

      <div className={`div ${state.property1}`}>LOGO</div>

      {state.property1 === "variant-2" && (
        <div className="element">
          <div className="frame-wrapper">
            <div className="div-2">
              <div className="text-wrapper-2">about</div>

              <img
                className="arrow"
                alt="Arrow"
                src="https://c.animaapp.com/DV3wXYri/img/arrow-1-1.svg"
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

export default Frame;