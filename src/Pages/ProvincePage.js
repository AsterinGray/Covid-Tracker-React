import React, { Component } from 'react';

import covid19 from '../api/covid19';

import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';

class ProvincePage extends Component {
  state = { statistic: [], keyword: '' };

  componentDidMount() {
    this.loadData('');
  }

  loadData = async (term) => {
    const response = await covid19.get('/provinsi');
    this.setState({
      statistic: response.data.data,
      keyword: term.toLowerCase(),
    });
  };

  render() {
    return (
      <section>
        <Navbar />
        <div className="container">
          <SearchBar onFormSearch={this.loadData} />
          <CardList data={this.state} />
        </div>
      </section>
    );
  }
}

export default ProvincePage;
