import React, { useState } from 'react';

function Dropdown({ options, selected, onChange }) {
  return (
    <div className="relative inline-block text-left">
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

const DropdownComponent = (props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div>
      <Dropdown
        options={props.options}
        selected={selectedOption}
        onChange={handleOptionChange}
      />
    </div>
  );
};

export default DropdownComponent;
