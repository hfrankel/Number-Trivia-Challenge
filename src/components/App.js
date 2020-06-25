import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Number from './Number';

class App extends React.Component {
  state = { number: '' };

  onSearchSubmit = async (numberSel) => {
    const response = await axios.get(
      `http://numbersapi.com/${numberSel}/trivia`
    );

    this.setState({ number: response.data });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Number number={this.state.number} />
      </div>
    );
  }
}

export default App;
