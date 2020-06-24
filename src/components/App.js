import React from 'react';
import SearchBar from './SearchBar';
import Number from './Number';

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar />
        <Number />
      </div>
    );
  }
}

export default App;
