import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";

const SearchBar = (props) => {
  const [valueState, setValueState] = useState("");
  const [numberState, setNumberState] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (event.keyCode === 13) {
      console.log("testing");
      props.onSubmit(valueState, numberState);
    }
  };

  const numberOptions = [
    {
      key: "trivia",
      text: "Trivia",
      value: "trivia",
    },
    {
      key: "year",
      text: "Year",
      value: "year",
    },
    {
      key: "date",
      text: "Date",
      value: "date",
    },
    {
      key: "math",
      text: "Math",
      value: "math",
    },
  ];
  return (
    <div className='ui segment'>
      <div className='ui form' onSubmit={onFormSubmit}>
        <div className='field'>
          <label>Search a number</label>
          <Dropdown
            placeholder='Select'
            fluid
            selection
            options={numberOptions}
            onChange={(e) => setNumberState(e.target.innerText.toLowerCase())}
          />
          <input
            type='text'
            value={valueState}
            onChange={(e) => setValueState(e.target.value)}
            onKeyUp={onFormSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
