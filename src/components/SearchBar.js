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
    this.props.onFormSearch(this.state.term);
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <form
        className="search"
        onChange={this.onFormSearch}
        onSubmit={this.onFormSubmit}
      >
        <input
          type="text"
          placeholder="Search Province"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <button type="submit">
          <i class="fas fa-search"></i>
        </button>
      </form>
    );
  }
}

export default SearchBar;
