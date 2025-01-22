import React from "react";
import { Frame } from './Frame';
import { PropertyDefaultWrapper } from './PropertyDefaultWrapper';
import './Slide.css';

export const Slide = () => {
  return (
    <div className="slide">
      <div className="overlap-group">
        <div className="frame-1261153094-wrapper">
          <Frame className="frame-1261153094" property1="default" />
        </div>

        <div className="frame-4">
          <PropertyDefaultWrapper property1="default" />
          <PropertyDefaultWrapper property1="default" />
          <PropertyDefaultWrapper property1="default" />
          <PropertyDefaultWrapper property1="default" />
        </div>

        <div className="frame-5">
          <PropertyDefaultWrapper property1="default" />
          <PropertyDefaultWrapper property1="default" />
          <PropertyDefaultWrapper property1="default" />
          <PropertyDefaultWrapper property1="default" />
        </div>

        <div className="frame-6">
          <PropertyDefaultWrapper property1="default" />
          <PropertyDefaultWrapper property1="default" />
          <PropertyDefaultWrapper property1="default" />
          <PropertyDefaultWrapper property1="default" />
        </div>

        <div className="frame-7">
          <PropertyDefaultWrapper property1="default" />
          <PropertyDefaultWrapper property1="default" />
          <PropertyDefaultWrapper property1="default" />
          <PropertyDefaultWrapper property1="default" />
        </div>

        <div className="frame-8">
          <PropertyDefaultWrapper property1="default" />
          <PropertyDefaultWrapper property1="default" />
          <PropertyDefaultWrapper property1="default" />
          <PropertyDefaultWrapper property1="default" />
        </div>
      </div>
    </div>
  );
};

export default Slide;