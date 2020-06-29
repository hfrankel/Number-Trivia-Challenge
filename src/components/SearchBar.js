import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

const SearchBar = (props) => {
  const [numberSel, setNumberSel] = useState('');
  const [option, setOption] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (event.keyCode === 13) {
      props.onSubmit(numberSel, option);
    }
  };

  const numberOptions = [
    {
      key: 'trivia',
      text: 'Trivia',
      value: 'trivia'
    },
    {
      key: 'year',
      text: 'Year',
      value: 'year'
    },
    {
      key: 'date',
      text: 'Date',
      value: 'date'
    },
    {
      key: 'math',
      text: 'Math',
      value: 'math'
    }
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
            onChange={(e) => setOption(e.target.innerText.toLowerCase())}
          />
          <input
            type='text'
            value={numberSel}
            onChange={(e) => setNumberSel(e.target.value)}
            onKeyUp={onFormSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
