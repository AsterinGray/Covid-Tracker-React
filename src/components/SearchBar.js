import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

  onFormSearch = (e) => {
    this.props.onFormSearch(this.state.term);
  };

  onFormSubmit = (e) => {
    e.preventDefault();
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <form onChange={this.onFormSearch} onSubmit={this.onFormSubmit}>
        <label>Covid Search</label>
        <input
          type="text"
          placeholder="Search Province"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

export default SearchBar;
