import React, { useState } from "react";

function LinearScale({ min, max, step, value, onChange }) {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <div>{value}</div>
    </div>
  );
}

const LinearScaleComponent = (props) => {
  const [scaleValue, setScaleValue] = useState(props.min || 0);

  const handleScaleChange = (value) => {
    setScaleValue(value);
  };

  return (
    <div className="p-4">
      <LinearScale
        min={props.min}
        max={props.max}
        step={props.step}
        value={scaleValue}
        onChange={handleScaleChange}
      />
    </div>
  );
};

export default LinearScaleComponent;
