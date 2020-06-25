import React from 'react';

class SearchBar extends React.Component {
  state = { numberSel: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.numberSel);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search a number</label>
            <input
              type="text"
              value={this.state.numberSel}
              onChange={(e) => this.setState({ numberSel: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
