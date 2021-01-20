import React, { Component } from 'react';

import axios from 'axios';

import SearchBar from './SearchBar';
import CardList from './CardList';

class App extends Component {
  state = { statistic: [], keyword: null };

  onSearchSubmit = async (term) => {
    const response = await axios.get(
      'https://indonesia-covid-19.mathdro.id/api/provinsi'
    );
    this.setState({ statistic: response.data.data });
    this.setState({ keyword: term.toLowerCase() });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <CardList data={this.state} />
      </div>
    );
  }
}

export default App;
